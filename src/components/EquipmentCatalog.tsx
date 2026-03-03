import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ScanIcon,
  ActivityIcon,
  StethoscopeIcon,
  FlaskConicalIcon,
  WindIcon,
  ShieldIcon,
  ArrowRightIcon } from
'lucide-react';
export function EquipmentCatalog() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-60px'
  });
  return (
    <section
      id="catalog"
      className="w-full bg-[#f8fafc] py-20 lg:py-28"
      aria-labelledby="catalog-heading">

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
          className="text-center mb-14"
          ref={ref}>

          <span className="inline-block text-[#06b6d4] text-sm font-semibold uppercase tracking-widest mb-3">
            What We Offer
          </span>
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-[#0d1b2a] mb-4"
            id="catalog-heading"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>

            Our Equipment Catalog
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From diagnostics to surgery, we provide certified, well-maintained
            equipment across all major clinical categories.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
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
              duration: 0.5,
              delay: 0.1
            }}
            whileHover={{
              y: -6,
              boxShadow: '0 20px 40px rgba(13,27,42,0.12)'
            }}
            className="bg-white rounded-2xl p-7 shadow-md border border-gray-100 flex flex-col gap-4 cursor-default">

            <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center">
              <ScanIcon className="text-[#06b6d4]" size={24} />
            </div>
            <div>
              <h3
                className="text-[#0d1b2a] font-bold text-lg mb-1"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}>

                Diagnostic Imaging
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                X-Ray machines, MRI scanners, and ultrasound systems for
                accurate clinical diagnosis.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-[#06b6d4] text-sm font-semibold hover:gap-2.5 transition-all duration-200 mt-auto">

              View Equipment <ArrowRightIcon size={15} />
            </a>
          </motion.div>

          {/* Card 2 */}
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
              duration: 0.5,
              delay: 0.15
            }}
            whileHover={{
              y: -6,
              boxShadow: '0 20px 40px rgba(13,27,42,0.12)'
            }}
            className="bg-white rounded-2xl p-7 shadow-md border border-gray-100 flex flex-col gap-4 cursor-default">

            <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center">
              <ActivityIcon className="text-[#06b6d4]" size={24} />
            </div>
            <div>
              <h3
                className="text-[#0d1b2a] font-bold text-lg mb-1"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}>

                Patient Monitoring
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                ICU monitors, vital signs trackers, and telemetry systems for
                continuous patient care.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-[#06b6d4] text-sm font-semibold hover:gap-2.5 transition-all duration-200 mt-auto">

              View Equipment <ArrowRightIcon size={15} />
            </a>
          </motion.div>

          {/* Card 3 */}
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
              duration: 0.5,
              delay: 0.2
            }}
            whileHover={{
              y: -6,
              boxShadow: '0 20px 40px rgba(13,27,42,0.12)'
            }}
            className="bg-white rounded-2xl p-7 shadow-md border border-gray-100 flex flex-col gap-4 cursor-default">

            <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center">
              <StethoscopeIcon className="text-[#06b6d4]" size={24} />
            </div>
            <div>
              <h3
                className="text-[#0d1b2a] font-bold text-lg mb-1"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}>

                Surgical Equipment
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Operating tables, surgical lights, electrosurgical units, and
                laparoscopic systems.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-[#06b6d4] text-sm font-semibold hover:gap-2.5 transition-all duration-200 mt-auto">

              View Equipment <ArrowRightIcon size={15} />
            </a>
          </motion.div>

          {/* Card 4 */}
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
              duration: 0.5,
              delay: 0.25
            }}
            whileHover={{
              y: -6,
              boxShadow: '0 20px 40px rgba(13,27,42,0.12)'
            }}
            className="bg-white rounded-2xl p-7 shadow-md border border-gray-100 flex flex-col gap-4 cursor-default">

            <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center">
              <FlaskConicalIcon className="text-[#06b6d4]" size={24} />
            </div>
            <div>
              <h3
                className="text-[#0d1b2a] font-bold text-lg mb-1"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}>

                Laboratory Equipment
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Hematology analyzers, centrifuges, PCR machines, and
                biochemistry analyzers.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-[#06b6d4] text-sm font-semibold hover:gap-2.5 transition-all duration-200 mt-auto">

              View Equipment <ArrowRightIcon size={15} />
            </a>
          </motion.div>

          {/* Card 5 */}
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
              duration: 0.5,
              delay: 0.3
            }}
            whileHover={{
              y: -6,
              boxShadow: '0 20px 40px rgba(13,27,42,0.12)'
            }}
            className="bg-white rounded-2xl p-7 shadow-md border border-gray-100 flex flex-col gap-4 cursor-default">

            <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center">
              <WindIcon className="text-[#06b6d4]" size={24} />
            </div>
            <div>
              <h3
                className="text-[#0d1b2a] font-bold text-lg mb-1"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}>

                Respiratory Care
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Mechanical ventilators, CPAP/BiPAP devices, oxygen
                concentrators, and nebulizers.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-[#06b6d4] text-sm font-semibold hover:gap-2.5 transition-all duration-200 mt-auto">

              View Equipment <ArrowRightIcon size={15} />
            </a>
          </motion.div>

          {/* Card 6 */}
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
              duration: 0.5,
              delay: 0.35
            }}
            whileHover={{
              y: -6,
              boxShadow: '0 20px 40px rgba(13,27,42,0.12)'
            }}
            className="bg-white rounded-2xl p-7 shadow-md border border-gray-100 flex flex-col gap-4 cursor-default">

            <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center">
              <ShieldIcon className="text-[#06b6d4]" size={24} />
            </div>
            <div>
              <h3
                className="text-[#0d1b2a] font-bold text-lg mb-1"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}>

                Sterilization
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Autoclaves, UV sterilization systems, and washer-disinfectors
                for infection control.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-[#06b6d4] text-sm font-semibold hover:gap-2.5 transition-all duration-200 mt-auto">

              View Equipment <ArrowRightIcon size={15} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>);

}