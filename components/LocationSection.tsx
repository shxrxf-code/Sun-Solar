'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, Mail, MapPin, Navigation, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const LOCATION = {
  name: 'Sun Solar Power Systems',
  address: {
    line1: '1/731, Jothi Nagar, AJM Mahal Line',
    line2: 'Mandapam Road',
    line3: 'Near Kumaraiya Kovil Bus Stop',
    city: 'Ramanathapuram',
    state: 'Tamil Nadu',
    pincode: '623504',
  },
  phone: ['+917708001737', '+919489231133'],
  email: 'sunsolarpowersystems@gmail.com',
  coordinates: { lat: 9.3639, lng: 78.8395 },
  mapQuery: '1/731+Jothi+Nagar+Mandapam+Road+Ramanathapuram+623504',
  googleMapsUrl: 'https://maps.google.com/?q=1/731+Jothi+Nagar+AJM+Mahal+Line+Mandapam+Road+Ramanathapuram+Tamil+Nadu+623504',
  osmUrl: 'https://www.openstreetmap.org/?mlat=9.3639&mlon=78.8395&zoom=16',
}

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeOut' },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Sun Solar Power Systems',
  description: 'Solar company in Ramanathapuram offering solar panel installation, on-grid & off-grid solar systems, solar water heaters, solar water pumps, and solar street lights.',
  url: 'https://www.sunsolarpowersystems.com',
  telephone: '+917708001737',
  email: 'sunsolarpowersystems@gmail.com',
  image: 'https://www.sunsolarpowersystems.com/sunsolar-logo.png',
  priceRange: '₹₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1/731, Jothi Nagar, AJM Mahal Line, Mandapam Road, Near Kumaraiya Kovil Bus Stop',
    addressLocality: 'Ramanathapuram',
    addressRegion: 'Tamil Nadu',
    postalCode: '623504',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 9.3639,
    longitude: 78.8395,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '19:00',
  },
  areaServed: [
    { '@type': 'City', name: 'Ramanathapuram' },
    { '@type': 'City', name: 'Rameswaram' },
    { '@type': 'City', name: 'Paramakudi' },
    { '@type': 'City', name: 'Keelakarai' },
    { '@type': 'City', name: 'Mudukulathur' },
    { '@type': 'City', name: 'Erwadi' },
    { '@type': 'State', name: 'Tamil Nadu' },
    { '@type': 'Country', name: 'India' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Solar Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Solar Panel Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'On Grid Solar System' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Off Grid Solar System' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Solar Water Heater' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Solar Water Pump' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Solar Street Light' } },
    ],
  },
}

const A = ({ href, children, className, ...props }: React.ComponentPropsWithoutRef<'a'>) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props}>
    {children}
  </a>
)

function MapEmbed({ mapQuery }: { mapQuery: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const embedSrc = `https://maps.google.com/maps?q=${mapQuery}&output=embed&z=16`

  return (
    <div className="relative w-full h-full min-h-[400px] md:min-h-[500px] rounded-2xl overflow-hidden shadow-xl bg-dark-100">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-dark-100">
          <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <iframe
        ref={iframeRef}
        src={embedSrc}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: '400px', filter: loaded ? 'none' : 'blur(4px)' }}
        className={`absolute inset-0 transition-all duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Sun Solar Power Systems - Office Location in Ramanathapuram"
        onError={() => setError(true)}
      />
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-dark-100 p-8">
          <div className="text-center">
            <MapPin className="w-10 h-10 text-primary-500 mx-auto mb-3" />
            <p className="text-dark-600 font-medium">Map could not load</p>
            <A href={LOCATION.googleMapsUrl} className="mt-3 inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium text-sm">
              Open in Google Maps <ExternalLink className="w-3 h-3" />
            </A>
          </div>
        </div>
      )}
      <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-white/10" />
      <div className="absolute bottom-4 right-4 z-10 flex gap-2 pointer-events-auto">
        <A
          href={LOCATION.googleMapsUrl}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg text-xs font-medium text-dark-700 hover:bg-white transition-colors"
        >
          <Navigation className="w-3.5 h-3.5" /> Google Maps
        </A>
        <A
          href={LOCATION.osmUrl}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg text-xs font-medium text-dark-700 hover:bg-white transition-colors"
        >
          <MapPin className="w-3.5 h-3.5" /> OSM
        </A>
      </div>
    </div>
  )
}

function ContactButton({ icon: Icon, label, href, variant = 'primary' }: {
  icon: React.ElementType
  label: string
  href: string
  variant?: 'primary' | 'secondary' | 'outline'
}) {
  const base = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200'
  const variants = {
    primary: 'bg-primary-600 text-white shadow-lg shadow-primary-500/20 hover:bg-primary-700 hover:shadow-primary-500/30',
    secondary: 'bg-dark-800 text-white hover:bg-dark-700 shadow-lg',
    outline: 'border-2 border-dark-700 text-dark-200 hover:bg-dark-800 hover:border-primary-500 hover:text-primary-400',
  }

  if (href.startsWith('http') || href.startsWith('tel') || href.startsWith('mailto')) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className={`${base} ${variants[variant]}`}>
        <Icon className="w-4 h-4" /> {label}
      </a>
    )
  }
  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      <Icon className="w-4 h-4" /> {label}
    </Link>
  )
}

export default function LocationSection() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <section className="relative bg-dark-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-900/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <motion.div {...fadeUp}>
            <div className="text-center mb-14">
              <span className="inline-block text-primary-400 font-semibold text-sm tracking-[0.2em] uppercase mb-3">Our Location</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white font-poppins">
                Visit Our Office
              </h2>
              <p className="text-dark-400 mt-3 max-w-2xl mx-auto text-lg">
                Serving Ramanathapuram and surrounding areas since 2009. Visit our office for a free solar consultation.
              </p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="bg-dark-800/60 backdrop-blur-sm border border-dark-700/60 rounded-2xl p-8 md:p-10 shadow-2xl space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg font-poppins">
                      {LOCATION.name}
                    </h3>
                    <div className="mt-2 text-dark-400 leading-relaxed text-sm space-y-0.5">
                      <p>{LOCATION.address.line1}</p>
                      <p>{LOCATION.address.line2}</p>
                      <p>{LOCATION.address.line3}</p>
                      <p className="text-dark-300 font-medium mt-1">
                        {LOCATION.address.city}, {LOCATION.address.state} - {LOCATION.address.pincode}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-dark-700 via-dark-600 to-dark-700" />

                <div className="space-y-5">
                  <h4 className="text-white/70 text-xs font-semibold uppercase tracking-widest">Contact</h4>
                  <motion.div {...stagger} className="space-y-4">
                    <a href={`tel:${LOCATION.phone[0]}`} className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-11 h-11 bg-dark-700/80 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/20 transition-colors duration-200">
                        <Phone className="w-5 h-5 text-primary-400" />
                      </div>
                      <div>
                        <p className="text-xs text-dark-500">Phone</p>
                        <p className="text-white font-semibold group-hover:text-primary-400 transition-colors duration-200">{LOCATION.phone[0]}</p>
                      </div>
                    </a>
                    <a href={`tel:${LOCATION.phone[1]}`} className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-11 h-11 bg-dark-700/80 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/20 transition-colors duration-200">
                        <Phone className="w-5 h-5 text-primary-400" />
                      </div>
                      <div>
                        <p className="text-xs text-dark-500">Alternate</p>
                        <p className="text-white font-semibold group-hover:text-primary-400 transition-colors duration-200">{LOCATION.phone[1]}</p>
                      </div>
                    </a>
                    <a href={`mailto:${LOCATION.email}`} className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-11 h-11 bg-dark-700/80 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/20 transition-colors duration-200">
                        <Mail className="w-5 h-5 text-primary-400" />
                      </div>
                      <div>
                        <p className="text-xs text-dark-500">Email</p>
                        <p className="text-white font-semibold group-hover:text-primary-400 transition-colors duration-200 break-all text-sm">{LOCATION.email}</p>
                      </div>
                    </a>
                  </motion.div>
                </div>

                <div className="h-px bg-gradient-to-r from-dark-700 via-dark-600 to-dark-700" />

                <div>
                  <h4 className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-4">Quick Actions</h4>
                  <div className="flex flex-wrap gap-3">
                    <ContactButton icon={Navigation} label="Get Directions" href={LOCATION.googleMapsUrl} variant="primary" />
                    <ContactButton icon={Phone} label="Call Now" href={`tel:${LOCATION.phone[0]}`} variant="secondary" />
                    <ContactButton icon={MessageCircle} label="WhatsApp Us" href="https://wa.me/919489231133" variant="outline" />
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 p-5 bg-dark-800/40 border border-dark-700/40 rounded-xl"
              >
                <p className="text-dark-400 text-xs leading-relaxed">
                  <span className="text-primary-400 font-semibold">Service Areas:</span> Ramanathapuram, Rameswaram, Paramakudi, Keelakarai, Mudukulathur, Erwadi, and all surrounding regions in Tamil Nadu.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
              className="lg:sticky lg:top-28"
            >
              <div className="relative">
                <MapEmbed mapQuery={LOCATION.mapQuery} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
