import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRightIcon, PhoneIcon } from 'lucide-react';
export function ContactCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px'
  });
  return (
    <section
      id="contact"
      className="w-full py-20 lg:py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0d1b2a 0%, #1e3a8a 100%)'
      }}
      aria-labelledby="cta-heading"
      ref={ref}>

      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#06b6d4]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#2563eb]/15 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          animate={
          isInView ?
          {
            opacity: 1,
            scale: 1
          } :
          {}
          }
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1]
          }}>

          <span className="inline-block text-[#06b6d4] text-sm font-semibold uppercase tracking-widest mb-4">
            Get Started Today
          </span>
          <h2
            id="cta-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>

            Ready to Upgrade
            <br />
            Your Facility?
          </h2>
          <p className="text-blue-200 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 120+ healthcare facilities already benefiting from Kodiscan's
            equipment renting program. No capital required, just better patient
            care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:info@kodiscan.rw"
              whileHover={{
                scale: 1.04
              }}
              whileTap={{
                scale: 0.97
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#06b6d4] text-white font-semibold text-base hover:bg-cyan-400 transition-colors duration-200 shadow-lg shadow-cyan-500/25">

              Request a Demo <ArrowRightIcon size={18} />
            </motion.a>
            <motion.a
              href="tel:+250787104894"
              whileHover={{
                scale: 1.04
              }}
              whileTap={{
                scale: 0.97
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/40 text-white font-semibold text-base hover:bg-white/10 transition-colors duration-200">

              <PhoneIcon size={18} /> Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>);

}