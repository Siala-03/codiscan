import React, { Children } from 'react';
import { motion } from 'framer-motion';
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 32
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center"
      aria-label="Hero section">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
          'url(https://images.pexels.com/photos/12104186/pexels-photo-12104186.jpeg)'
        }}
        role="img"
        aria-label="Modern hospital corridor" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0d1b2a]/65" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl">

          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white text-sm font-medium">
              <span
                className="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse"
                aria-hidden="true" />

              Elevating Rwandan Healthcare
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>

            <span className="text-white">Advanced Medical</span>
            <br />
            <span className="text-[#06b6d4]">Equipment Leasing</span>
            <br />
            <span className="text-white">for Clinical Facilities.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">

            Access state-of-the-art diagnostic, surgical, and monitoring
            equipment without the massive capital expenditure. Partner with
            Codiscan today.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a
              href="#catalog"
              className="inline-flex items-center px-7 py-3.5 rounded-full bg-[#06b6d4] text-white font-semibold text-base hover:bg-cyan-400 transition-colors duration-200 shadow-lg shadow-cyan-500/25">

              Browse Catalog
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-7 py-3.5 rounded-full border-2 border-white/60 text-white font-semibold text-base hover:bg-white/10 transition-colors duration-200">

              Schedule a Visit
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0d1b2a] to-transparent" />
    </section>);

}