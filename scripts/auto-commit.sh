#!/usr/bin/env bash
set -euo pipefail

# ─── Configuration ───────────────────────────────────────────────────────────
BRANCH="main"
REMOTE="origin"
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LOG_FILE="${PROJECT_DIR}/scripts/deploy.log"

# ─── Colors ──────────────────────────────────────────────────────────────────
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

# ─── Helpers ─────────────────────────────────────────────────────────────────
log()  { echo -e "${CYAN}[deploy]${NC} $1"; }
ok()   { echo -e "${GREEN}[✓]${NC} $1"; }
warn() { echo -e "${YELLOW}[!]${NC} $1"; }
fail() { echo -e "${RED}[✗]${NC} $1"; exit 1; }

log_to_file() {
  local msg="[$(date '+%Y-%m-%d %H:%M:%S')] $1"
  echo "$msg" >> "$LOG_FILE"
}

# ─── Pre-flight checks ──────────────────────────────────────────────────────
cd "$PROJECT_DIR"

if ! git rev-parse --git-dir > /dev/null 2>&1; then
  fail "Not a Git repository"
fi

if ! git remote get-url "$REMOTE" > /dev/null 2>&1; then
  fail "Remote '$REMOTE' not configured. Run: git remote add origin <url>"
fi

# ─── Detect changes ─────────────────────────────────────────────────────────
if git diff --quiet && git diff --cached --quiet && [[ -z $(git status --porcelain) ]]; then
  warn "No changes detected — nothing to commit."
  exit 0
fi

CHANGED_FILES=$(git status --short)
CHANGED_COUNT=$(echo "$CHANGED_FILES" | wc -l)
log "Detected $CHANGED_COUNT changed file(s)"

# ─── Generate commit message ────────────────────────────────────────────────
generate_commit_message() {
  local added modified deleted
  added=$(git diff --cached --name-only --diff-filter=A 2>/dev/null || true)
  modified=$(git diff --cached --name-only --diff-filter=M 2>/dev/null || true)
  deleted=$(git diff --cached --name-only --diff-filter=D 2>/dev/null || true)
  # also check unstaged for full picture
  added+=$'\n'$(git diff --name-only --diff-filter=A 2>/dev/null || true)
  modified+=$'\n'$(git diff --name-only --diff-filter=M 2>/dev/null || true)
  deleted+=$'\n'$(git diff --name-only --diff-filter=D 2>/dev/null || true)

  local msg=""

  # Category-based detection (check added first, then modified)
  if echo "$added" | grep -q -E "app/.*page\.tsx|app/.*layout\.tsx"; then
    local pages
    pages=$(echo "$added" | grep -E "app/.*page\.tsx" | head -3 | sed 's|.*app/||;s|/page\.tsx||;s|/| |g')
    for p in $pages; do
      p_cap="$(echo "${p:0:1}" | tr '[:lower:]' '[:upper:]')${p:1}"
      msg+="${p_cap}, "
    done
  fi
  if echo "$added" | grep -q -E "sections/|components/"; then
    local sections
    sections=$(echo "$added" | grep -E "sections/|components/" | head -3 | sed 's|.*/||;s|\.tsx||')
    for s in $sections; do
      # camelCase to Title Case
      s_title=$(echo "$s" | sed 's/[A-Z]/ &/g' | sed 's/^ //')
      msg+="${s_title}, "
    done
  fi
  if echo "$added" | grep -q -E "public/images/"; then
    msg+="Images, "
  fi

  if [[ -z "$msg" ]]; then
    # Use modified files for hint
    if echo "$modified" | grep -q "sitemap"; then msg+="SEO sitemap, "
    elif echo "$modified" | grep -q -E "Navbar|Header|Footer"; then msg+="Navigation, "
    elif echo "$modified" | grep -q -E "sections/Testimonial"; then msg+="Testimonials, "
    elif echo "$modified" | grep -q "page\.tsx"; then msg+="Pages, "
    elif echo "$modified" | grep -q "layout\.tsx"; then msg+="Layout, "
    elif echo "$modified" | grep -q -E "\.css$|globals"; then msg+="Styles, "
    elif echo "$deleted" | grep -q "."; then msg+="Cleanup, "
    else msg+="Updates, "
    fi
  fi

  if echo "$added" | grep -q -E "scripts/|\.sh$"; then msg+="Scripts, "
  fi

  # Theme detection
  if echo "$modified" | grep -q -E "theme|dark|light"; then msg+="Theme, "
  fi

  # SEO detection
  if echo "$modified" | grep -q -E "metadata|sitemap|robots|seo|canonical"; then msg+="SEO, "
  fi

  # Services detection
  if echo "$added" | grep -q "services/"; then msg+="Services, "
  fi

  # Remove trailing comma/space
  msg="${msg%, }"

  if [[ -z "$msg" ]]; then
    echo "Update project files"
  else
    echo "${msg}"
  fi
}

COMMIT_MSG=$(generate_commit_message)
log "Generated commit message: ${COMMIT_MSG}"

# ─── Stage all changes ──────────────────────────────────────────────────────
log "Staging all changes..."
git add -A
ok "All changes staged"

# ─── Run quality checks ─────────────────────────────────────────────────────
log "Running quality checks..."

log "  → TypeScript check..."
if npm run typecheck 2>/dev/null || npx tsc --noEmit 2>/dev/null; then
  ok "TypeScript check passed"
else
  warn "TypeScript check failed (non-fatal, continuing)"
fi

log "  → ESLint..."
if npm run lint 2>/dev/null; then
  ok "ESLint passed"
else
  fail "ESLint failed — fix errors before committing"
fi

log "  → Build verification..."
if npm run build 2>/dev/null; then
  ok "Build passed"
else
  fail "Build failed — fix errors before committing"
fi

# ─── Commit ──────────────────────────────────────────────────────────────────
log "Committing..."
if git commit -m "$COMMIT_MSG"; then
  ok "Committed: ${COMMIT_MSG}"
else
  fail "Commit failed"
fi

# ─── Push ────────────────────────────────────────────────────────────────────
log "Pushing to ${REMOTE}/${BRANCH}..."
if git push "$REMOTE" "$BRANCH"; then
  ok "Pushed to ${REMOTE}/${BRANCH}"
  PUSH_STATUS="Success"
else
  warn "Push failed — attempting to pull and retry..."
  git pull "$REMOTE" "$BRANCH" --rebase
  if git push "$REMOTE" "$BRANCH"; then
    ok "Pushed after rebase"
    PUSH_STATUS="Success (after rebase)"
  else
    fail "Push failed after rebase — resolve conflicts manually"
    PUSH_STATUS="Failed"
  fi
fi

# ─── Deployment summary ─────────────────────────────────────────────────────
echo ""
echo "═══════════════════════════════════════════"
echo -e "  ${GREEN}Deployment Summary${NC}"
echo "═══════════════════════════════════════════"
echo "  Files changed  : $CHANGED_COUNT"
echo "  Commit message : $COMMIT_MSG"
echo "  Branch         : $BRANCH"
echo "  Remote         : $REMOTE"
echo "  Push status    : $PUSH_STATUS"
echo "═══════════════════════════════════════════"
echo ""
echo -e "${YELLOW}Note:${NC} Vercel auto-deploys from GitHub on push to main."
echo "      Check deployment at: https://vercel.com/shxrxf-code/sun-solar"
echo ""

log_to_file "${COMMIT_MSG} | ${PUSH_STATUS} | ${CHANGED_COUNT} file(s)"
