import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  CheckCircleIcon,
  AwardIcon,
  UsersIcon,
  CalendarIcon } from
'lucide-react';
export function WhyCodiscan() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px'
  });
  return (
    <section
      id="about"
      className="w-full bg-white py-20 lg:py-28"
      aria-labelledby="why-heading"
      ref={ref}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40
            }}
            animate={
            isInView ?
            {
              opacity: 1,
              x: 0
            } :
            {}
            }
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1]
            }}>

            <span className="inline-block text-[#06b6d4] text-sm font-semibold uppercase tracking-widest mb-4">
              Our Advantage
            </span>
            <h2
              id="why-heading"
              className="text-4xl sm:text-5xl font-extrabold text-[#0d1b2a] leading-tight mb-6"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>

              Why Healthcare Facilities Choose Codiscan
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              We believe every Rwandan healthcare facility deserves access to
              world-class medical equipment. Our leasing model removes financial
              barriers, enabling clinics and hospitals of all sizes to deliver
              exceptional patient care from day one.
            </p>
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#f8fafc] border border-gray-100">
              <div className="w-14 h-14 rounded-xl bg-[#0d1b2a] flex items-center justify-center flex-shrink-0">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  aria-hidden="true">

                  <polyline
                    points="2,14 7,14 10,6 13,22 16,10 19,18 22,14 26,14"
                    stroke="#06b6d4"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none" />

                </svg>
              </div>
              <div>
                <p
                  className="text-[#0d1b2a] font-bold text-base"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>

                  Trusted since 2019
                </p>
                <p className="text-gray-500 text-sm">
                  Serving Rwanda's healthcare sector with reliable equipment
                  solutions
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Features */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40
            }}
            animate={
            isInView ?
            {
              opacity: 1,
              x: 0
            } :
            {}
            }
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1
            }}
            className="flex flex-col gap-6">

            {/* Feature 1 */}
            <div className="flex gap-5 items-start p-6 rounded-2xl border border-gray-100 hover:border-cyan-100 hover:bg-cyan-50/30 transition-colors duration-200">
              <div className="w-11 h-11 rounded-xl bg-cyan-50 flex items-center justify-center flex-shrink-0">
                <CheckCircleIcon className="text-[#06b6d4]" size={22} />
              </div>
              <div>
                <h3
                  className="text-[#0d1b2a] font-bold text-base mb-1"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>

                  Zero Capital Outlay
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Lease instead of buy. Preserve your capital for patient care
                  while accessing premium equipment from day one.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-5 items-start p-6 rounded-2xl border border-gray-100 hover:border-cyan-100 hover:bg-cyan-50/30 transition-colors duration-200">
              <div className="w-11 h-11 rounded-xl bg-cyan-50 flex items-center justify-center flex-shrink-0">
                <AwardIcon className="text-[#06b6d4]" size={22} />
              </div>
              <div>
                <h3
                  className="text-[#0d1b2a] font-bold text-base mb-1"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>

                  Certified Equipment
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  All equipment is WHO and CE certified, regularly maintained,
                  and calibrated to international clinical standards.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-5 items-start p-6 rounded-2xl border border-gray-100 hover:border-cyan-100 hover:bg-cyan-50/30 transition-colors duration-200">
              <div className="w-11 h-11 rounded-xl bg-cyan-50 flex items-center justify-center flex-shrink-0">
                <UsersIcon className="text-[#06b6d4]" size={22} />
              </div>
              <div>
                <h3
                  className="text-[#0d1b2a] font-bold text-base mb-1"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>

                  Local Support Team
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Our local biomedical technicians provide rapid on-site
                  support, training, and preventive maintenance.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-5 items-start p-6 rounded-2xl border border-gray-100 hover:border-cyan-100 hover:bg-cyan-50/30 transition-colors duration-200">
              <div className="w-11 h-11 rounded-xl bg-cyan-50 flex items-center justify-center flex-shrink-0">
                <CalendarIcon className="text-[#06b6d4]" size={22} />
              </div>
              <div>
                <h3
                  className="text-[#0d1b2a] font-bold text-base mb-1"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>

                  Flexible Terms
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Choose from 12 to 60-month leasing plans tailored to your
                  facility's budget and operational requirements.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}