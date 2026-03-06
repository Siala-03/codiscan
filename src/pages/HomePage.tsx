import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRightIcon,
  ScanIcon,
  ActivityIcon,
  StethoscopeIcon } from
'lucide-react';
import { Hero } from '../components/Hero';
import { StatsBar } from '../components/StatsBar';
import { WhyKodiscan } from '../components/WhyKodiscan';
import { Testimonials } from '../components/Testimonials';
import { ContactCTA } from '../components/ContactCTA';
import { type Page } from '../App';
interface HomePageProps {
  navigate: (page: Page) => void;
}
export function HomePage({ navigate }: HomePageProps) {
  return (
    <div>
      <Hero />
      <StatsBar />

      {/* Equipment Preview Section */}
      <section className="w-full bg-[#f8fafc] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-[#06b6d4] text-sm font-semibold uppercase tracking-widest mb-3">
              What We Offer
            </span>
            <h2
              className="text-4xl sm:text-5xl font-extrabold text-[#0d1b2a] mb-4"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>

              Our Equipment Catalog
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Certified diagnostic imaging equipment available on flexible rental terms.
            </p>
          </div>

          {/* 5 Preview Cards - 2 rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
            {/* Card 1 */}
            <motion.div
              whileHover={{
                y: -6,
                boxShadow: '0 20px 40px rgba(13,27,42,0.12)'
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col">

              <div className="h-40 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7088828/pexels-photo-7088828.jpeg"
                  alt="Digital Radiography"
                  loading="lazy"
                  className="w-full h-full object-cover" />

              </div>
              <div className="p-4 flex flex-col gap-2 flex-1">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center">
                  <ScanIcon className="text-[#06b6d4]" size={18} />
                </div>
                <div>
                  <h3
                    className="text-[#0d1b2a] font-bold text-sm mb-1"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}>

                    Digital Radiography
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Mobile & Fixed X-Ray systems
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{
                y: -6,
                boxShadow: '0 20px 40px rgba(13,27,42,0.12)'
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col">

              <div className="h-40 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg"
                  alt="Dental Imaging"
                  loading="lazy"
                  className="w-full h-full object-cover" />

              </div>
              <div className="p-4 flex flex-col gap-2 flex-1">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center">
                  <ScanIcon className="text-[#06b6d4]" size={18} />
                </div>
                <div>
                  <h3
                    className="text-[#0d1b2a] font-bold text-sm mb-1"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}>

                    Dental Imaging
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    2D OPG & CBCT systems
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{
                y: -6,
                boxShadow: '0 20px 40px rgba(13,27,42,0.12)'
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col">

              <div className="h-40 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5632400/pexels-photo-5632400.jpeg"
                  alt="CT Scanner"
                  loading="lazy"
                  className="w-full h-full object-cover" />

              </div>
              <div className="p-4 flex flex-col gap-2 flex-1">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center">
                  <ScanIcon className="text-[#06b6d4]" size={18} />
                </div>
                <div>
                  <h3
                    className="text-[#0d1b2a] font-bold text-sm mb-1"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}>

                    CT Scanners
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    32/64/128 slice systems
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              whileHover={{
                y: -6,
                boxShadow: '0 20px 40px rgba(13,27,42,0.12)'
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col">

              <div className="h-40 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg"
                  alt="MRI System"
                  loading="lazy"
                  className="w-full h-full object-cover" />

              </div>
              <div className="p-4 flex flex-col gap-2 flex-1">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center">
                  <ScanIcon className="text-[#06b6d4]" size={18} />
                </div>
                <div>
                  <h3
                    className="text-[#0d1b2a] font-bold text-sm mb-1"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}>

                    MRI Systems
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    1.5T & 3T magnetic resonance
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 5 */}
            <motion.div
              whileHover={{
                y: -6,
                boxShadow: '0 20px 40px rgba(13,27,42,0.12)'
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col">

              <div className="h-40 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7974369/pexels-photo-7974369.jpeg"
                  alt="Ultrasound System"
                  loading="lazy"
                  className="w-full h-full object-cover" />

              </div>
              <div className="p-4 flex flex-col gap-2 flex-1">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center">
                  <ScanIcon className="text-[#06b6d4]" size={18} />
                </div>
                <div>
                  <h3
                    className="text-[#0d1b2a] font-bold text-sm mb-1"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}>

                    Ultrasound
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Diagnostic ultrasound machines
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* View All CTA */}
          <div className="text-center">
            <button
              onClick={() => navigate('catalog')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0d1b2a] text-white font-semibold text-base hover:bg-[#1a2f45] transition-colors duration-200">

              View All Equipment <ArrowRightIcon size={18} />
            </button>
          </div>
        </div>
      </section>

      <WhyKodiscan />
      <Testimonials />
      <ContactCTA />
    </div>);

}