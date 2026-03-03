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
import { WhyCodiscan } from '../components/WhyCodiscan';
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
              From diagnostics to surgery, we provide certified, well-maintained
              equipment across all major clinical categories.
            </p>
          </div>

          {/* 3 Preview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {/* Card 1 */}
            <motion.div
              whileHover={{
                y: -6,
                boxShadow: '0 20px 40px rgba(13,27,42,0.12)'
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col">

              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7088828/pexels-photo-7088828.jpeg"
                  alt="Digital X-Ray System"
                  loading="lazy"
                  className="w-full h-full object-cover" />

              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center">
                  <ScanIcon className="text-[#06b6d4]" size={20} />
                </div>
                <div>
                  <h3
                    className="text-[#0d1b2a] font-bold text-base mb-1"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}>

                    Diagnostic Imaging
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    X-Ray, MRI, CT scanners, and ultrasound systems.
                  </p>
                </div>
                <p className="text-[#06b6d4] text-sm font-semibold mt-auto">                  
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{
                y: -6,
                boxShadow: '0 20px 40px rgba(13,27,42,0.12)'
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col">

              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80"
                  alt="Patient Monitoring System"
                  loading="lazy"
                  className="w-full h-full object-cover" />

              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center">
                  <ActivityIcon className="text-[#06b6d4]" size={20} />
                </div>
                <div>
                  <h3
                    className="text-[#0d1b2a] font-bold text-base mb-1"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}>

                    Patient Monitoring
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    ICU monitors, vital signs, and telemetry systems.
                  </p>
                </div>
                <p className="text-[#06b6d4] text-sm font-semibold mt-auto">
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{
                y: -6,
                boxShadow: '0 20px 40px rgba(13,27,42,0.12)'
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col">

              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&q=80"
                  alt="Surgical Equipment"
                  className="w-full h-full object-cover" />

              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center">
                  <StethoscopeIcon className="text-[#06b6d4]" size={20} />
                </div>
                <div>
                  <h3
                    className="text-[#0d1b2a] font-bold text-base mb-1"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}>

                    Surgical Equipment
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Operating tables, surgical lights, and laparoscopic systems.
                  </p>
                </div>
                <p className="text-[#06b6d4] text-sm font-semibold mt-auto">                  
                </p>
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

      <WhyCodiscan />
      <Testimonials />
      <ContactCTA />
    </div>);

}