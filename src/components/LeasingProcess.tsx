import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ClipboardListIcon,
  SearchIcon,
  FileSignatureIcon,
  HeadphonesIcon } from
'lucide-react';
const steps = [
{
  number: '01',
  icon: ClipboardListIcon,
  title: 'Submit Application',
  description:
  'Fill out our simple facility needs assessment form. Tell us about your clinical requirements and patient volume.'
},
{
  number: '02',
  icon: SearchIcon,
  title: 'Equipment Selection',
  description:
  'Browse our certified catalog and work with our specialists to select the right equipment for your facility.'
},
{
  number: '03',
  icon: FileSignatureIcon,
  title: 'Agreement & Delivery',
  description:
  'Sign your flexible lease agreement and receive your equipment within 48 hours, fully installed and tested.'
},
{
  number: '04',
  icon: HeadphonesIcon,
  title: 'Ongoing Support',
  description:
  'Benefit from our 5-year warranty, scheduled maintenance visits, and 24/7 technical support throughout your lease.'
}];

export function LeasingProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px'
  });
  return (
    <section
      id="process"
      className="w-full bg-[#0d1b2a] py-20 lg:py-28"
      aria-labelledby="process-heading"
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
          className="text-center mb-16">

          <span className="inline-block text-[#06b6d4] text-sm font-semibold uppercase tracking-widest mb-3">
            Simple & Transparent
          </span>
          <h2
            id="process-heading"
            className="text-4xl sm:text-5xl font-extrabold text-white"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>

            How Our Leasing Process Works
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#06b6d4]/40 to-transparent"
            aria-hidden="true" />


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
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
                    duration: 0.6,
                    delay: index * 0.15
                  }}
                  className="flex flex-col items-center text-center">

                  {/* Number + Icon Badge */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#06b6d4]/15 border border-[#06b6d4]/30 flex items-center justify-center">
                      <Icon className="text-[#06b6d4]" size={28} />
                    </div>
                    <span
                      className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-[#06b6d4] text-white text-xs font-bold flex items-center justify-center"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif"
                      }}>

                      {index + 1}
                    </span>
                  </div>

                  <h3
                    className="text-white font-bold text-lg mb-3"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}>

                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </motion.div>);

            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
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
            duration: 0.6,
            delay: 0.7
          }}
          className="text-center mt-14">

          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-[#06b6d4] text-white font-semibold text-base hover:bg-cyan-400 transition-colors duration-200 shadow-lg shadow-cyan-500/20">

            Start Your Application
          </a>
        </motion.div>
      </div>
    </section>);

}