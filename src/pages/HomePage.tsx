import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRightIcon,
  ScanIcon } from
'lucide-react';
const mobileRImage = new URL('../assets/mobile_r.PNG', import.meta.url).href;
const cbctImage = new URL('../assets/cbct.jpg', import.meta.url).href;
const ctScanImage = new URL('../assets/ct_scan.png', import.meta.url).href;
const mriImage = new URL('../assets/mri.jpg', import.meta.url).href;
import { Hero } from '../components/Hero';
import { StatsBar } from '../components/StatsBar';
import { WhyKodiscan } from '../components/WhyKodiscan';
import { ContactCTA } from '../components/ContactCTA';
import { type Page } from '../App';
interface HomePageProps {
  navigate: (page: Page) => void;
}
export function HomePage({ navigate }: HomePageProps) {
  return (
    <div>
      <Hero navigate={() => navigate('catalog')} />
      <StatsBar />

      {/* Equipment Preview Section */}
      <section className="w-full bg-[#f8fafc] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="catalog" className="text-center mb-14">
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

          {/* 4 Preview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {/* Card 1 - Digital Radiography Mobile */}
            <motion.div
              whileHover={{
                y: -6,
                boxShadow: '0 20px 40px rgba(13,27,42,0.12)'
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col">

              <div className="h-60 overflow-hidden">
                <img
                  src={mobileRImage}
                  alt="Digital Radiography Mobile"
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
                    Mobile X-Ray systems
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Dental CBCT */}
            <motion.div
              whileHover={{
                y: -6,
                boxShadow: '0 20px 40px rgba(13,27,42,0.12)'
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col">

              <div className="h-60 overflow-hidden">
                <img
                  src={cbctImage}
                  alt="Dental CBCT"
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

                    Dental CBCT
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    3D dental imaging
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - CT Scanner */}
            <motion.div
              whileHover={{
                y: -6,
                boxShadow: '0 20px 40px rgba(13,27,42,0.12)'
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col">

              <div className="h-60 overflow-hidden">
                <img
                  src={ctScanImage}
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

            {/* Card 4 - MRI */}
            <motion.div
              whileHover={{
                y: -6,
                boxShadow: '0 20px 40px rgba(13,27,42,0.12)'
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col">

              <div className="h-60 overflow-hidden">
                <img
                  src={mriImage}
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
      <ContactCTA />
    </div>);

}