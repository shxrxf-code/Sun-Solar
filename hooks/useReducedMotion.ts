'use client'

import { useEffect, useState } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

function getMatches(): boolean {
  if (typeof window !== 'undefined') {
    return window.matchMedia(QUERY).matches
  }
  return false
}

function getDeviceTier(): 'low' | 'mid' | 'high' {
  if (typeof window === 'undefined') return 'high'

  const memory = (navigator as any).deviceMemory
  const cores = navigator.hardwareConcurrency

  if (memory && memory <= 4) return 'low'
  if (memory && memory <= 8) return 'mid'
  if (cores && cores <= 4) return 'low'
  if (cores && cores <= 6) return 'mid'

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
  if (isMobile) return 'low'

  return 'high'
}

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(getMatches)
  const [deviceTier, setDeviceTier] = useState<'low' | 'mid' | 'high'>('high')

  useEffect(() => {
    setDeviceTier(getDeviceTier())

    const mediaQuery = window.matchMedia(QUERY)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  const shouldReduceMotion = prefersReducedMotion || deviceTier === 'low'

  return { prefersReducedMotion, deviceTier, shouldReduceMotion }
}

// Preset animation variants optimized for performance
export const fadeUp = (reduceMotion: boolean) => reduceMotion
  ? { initial: {}, whileInView: {}, transition: {}, viewport: { once: true } }
  : {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.4 },
      viewport: { once: true, margin: '-50px' },
    }

export const staggerItem = (reduceMotion: boolean, delay: number) => reduceMotion
  ? {}
  : { transition: { duration: 0.4, delay } }
