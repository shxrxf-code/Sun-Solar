'use client'

import { Phone, MessageCircle, Mail } from 'lucide-react'

export default function ContactPage() {
  return (
    <section className="bg-[#f9fafb] min-h-screen flex items-center justify-center px-6 py-16">

      <div className="w-full max-w-2xl">
        {/* Form Container */}
        <div className="bg-white border border-[#f3f4f6] rounded-2xl shadow-xl">

          <div className="p-8 md:p-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-2">
              Get Free Consultation
            </h1>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              Fill out the form below and our solar experts will get back to you within 24 hours.
            </p>

            <form className="space-y-5">

              {/* Row 1: Name + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="h-12 px-4 rounded-lg border border-neutral-200 text-base focus:outline-none focus:border-green-500 focus:shadow-[0_0_0_4px_rgba(34,197,94,0.12)] transition-all placeholder:text-neutral-400"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="h-12 px-4 rounded-lg border border-neutral-200 text-base focus:outline-none focus:border-green-500 focus:shadow-[0_0_0_4px_rgba(34,197,94,0.12)] transition-all placeholder:text-neutral-400"
                />
              </div>

              {/* Row 2: Email */}
              <input
                type="email"
                placeholder="Email Address"
                className="w-full h-12 px-4 rounded-lg border border-neutral-200 text-base focus:outline-none focus:border-green-500 focus:shadow-[0_0_0_4px_rgba(34,197,94,0.12)] transition-all placeholder:text-neutral-400"
              />

              {/* Row 3: Message */}
              <textarea
                placeholder="Tell us about your solar needs..."
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-base focus:outline-none focus:border-green-500 focus:shadow-[0_0_0_4px_rgba(34,197,94,0.12)] transition-all resize-none placeholder:text-neutral-400 leading-relaxed"
              />

              {/* CTA Button */}
              <button className="w-full h-12 px-8 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition-all shadow-lg hover:shadow-green-500/25">
                Submit Request →
              </button>

            </form>
          </div>

        </div>

        {/* Contact Info Below */}
        <div className="mt-8 text-center space-y-2">
          <p className="text-neutral-600 text-sm flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4 text-green-600" />
            <a href="https://wa.me/919489231133" className="text-green-600 font-semibold hover:text-green-700">
              +91 94892 31133
            </a>
          </p>
          <p className="text-neutral-600 text-sm flex items-center justify-center gap-2">
            <Phone className="w-4 h-4 text-green-600" />
            <a href="tel:+917708001737" className="text-green-600 font-semibold hover:text-green-700">
              +91 77080 01737
            </a>
          </p>
          <p className="text-neutral-600 text-sm flex items-center justify-center gap-2">
            <Mail className="w-4 h-4 text-green-600" />
            <a href="mailto:sunsolarpowersystems@gmail.com" className="text-green-600 font-semibold hover:text-green-700">
              sunsolarpowersystems@gmail.com
            </a>
          </p>
          <p className="text-neutral-500 text-xs">
            © 2024 Sun Solar Power Systems
          </p>
        </div>

      </div>

    </section>
  )
}
