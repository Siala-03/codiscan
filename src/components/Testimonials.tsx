import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { StarIcon } from 'lucide-react';

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px'
  });

  return (
    <section
      className="w-full bg-[#f8fafc] py-20 lg:py-28"
      aria-labelledby="testimonials-heading"
      ref={ref}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 24
          }}
          animate={
          isInView ?
          {
            opacity: 1,
            y: 0
          } :
          {}
          }
          transition={{
            duration: 0.6
          }}
          className="text-center mb-14">

          <span className="inline-block text-[#06b6d4] text-sm font-semibold uppercase tracking-widest mb-3">
            Client Stories
          </span>
          <h2
            id="testimonials-heading"
            className="text-4xl sm:text-5xl font-extrabold text-[#0d1b2a]"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>

            Trusted by Healthcare Facilities
            <br className="hidden sm:block" />
            <span className="text-[#06b6d4]"> Across Rwanda</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {/* Testimonial 1 */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={
            isInView ?
            {
              opacity: 1,
              y: 0
            } :
            {}
            }
            transition={{
              duration: 0.55,
              delay: 0.1
            }}
            className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 flex flex-col gap-5">

            {/* Stars */}
            <div className="flex gap-1" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) =>
              <StarIcon
                key={i}
                size={16}
                className="text-amber-400 fill-amber-400" />

              )}
            </div>
            {/* Quote */}
            <blockquote className="text-gray-600 text-sm leading-relaxed flex-1">
              "Kodiscan transformed our ICU capabilities overnight. The
              equipment quality is exceptional and their team installed
              everything within 24 hours. Our patient outcomes have improved
              dramatically since the upgrade."
            </blockquote>
            {/* Author */}
            <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
              <div
                className="w-10 h-10 rounded-full bg-[#06b6d4] flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                aria-hidden="true">

                AU
              </div>
              <div>
                <p
                  className="text-[#0d1b2a] font-bold text-sm"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>

                  Dr. Amina Uwase
                </p>
                <p className="text-gray-400 text-xs">Horebu Hospital</p>
              </div>
            </div>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={
            isInView ?
            {
              opacity: 1,
              y: 0
            } :
            {}
            }
            transition={{
              duration: 0.55,
              delay: 0.2
            }}
            className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 flex flex-col gap-5">

            {/* Stars */}
            <div className="flex gap-1" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) =>
              <StarIcon
                key={i}
                size={16}
                className="text-amber-400 fill-amber-400" />

              )}
            </div>
            {/* Quote */}
            <blockquote className="text-gray-600 text-sm leading-relaxed flex-1">
              "The renting model allowed us to upgrade our entire radiology
              department without touching our capital budget. Kodiscan's
              flexible 36-month plan was exactly what we needed for our
              university hospital."
            </blockquote>
            {/* Author */}
            <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
              <div
                className="w-10 h-10 rounded-full bg-[#2563eb] flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                aria-hidden="true">

                JH
              </div>
              <div>
                <p
                  className="text-[#0d1b2a] font-bold text-sm"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>

                  Dr. Jean-Pierre Habimana
                </p>
                <p className="text-gray-400 text-xs">
                  Butare University Hospital
                </p>
              </div>
            </div>
          </motion.div>

          {/* Testimonial 3 */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={
            isInView ?
            {
              opacity: 1,
              y: 0
            } :
            {}
            }
            transition={{
              duration: 0.55,
              delay: 0.3
            }}
            className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 flex flex-col gap-5">

            {/* Stars */}
            <div className="flex gap-1" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) =>
              <StarIcon
                key={i}
                size={16}
                className="text-amber-400 fill-amber-400" />

              )}
            </div>
            {/* Quote */}
            <blockquote className="text-gray-600 text-sm leading-relaxed flex-1">
              "Responsive support team — our ventilator equipment arrived on
              time and the technician stayed for two days to train our nursing
              staff. I highly recommend Kodiscan to any district facility."
            </blockquote>
            {/* Author */}
            <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
              <div
                className="w-10 h-10 rounded-full bg-[#06b6d4] flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                aria-hidden="true">

                CM
              </div>
              <div>
                <p
                  className="text-[#0d1b2a] font-bold text-sm"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>

                  Nurse Claudine Mukamana
                </p>
                <p className="text-gray-400 text-xs">
                  Ruhengeri District Hospital
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}