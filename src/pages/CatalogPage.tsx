import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRightIcon,
  ScanIcon,
  TagIcon } from
'lucide-react';
const xrayFixedImage = new URL('../assets/digital-xray-fixed.webp', import.meta.url).href;
const xrayMobileImage = new URL('../assets/digital-xray-mobile.webp', import.meta.url).href;
const xrayPortableImage = new URL('../assets/portable-digital-xray.webp', import.meta.url).href;
const ctScanImage = new URL('../assets/ct-scan.webp', import.meta.url).href;
const mriImage = new URL('../assets/mri.webp', import.meta.url).href;
const cArmImage = new URL('../assets/mobile-surgical-c-arm.webp', import.meta.url).href;
const dynamicXrayImage = new URL('../assets/dynamic-xray.webp', import.meta.url).href;
import { type Page } from '../App';
interface CatalogPageProps {
  navigate: (page: Page) => void;
}
type Category =
'all' |
'imaging';
interface Product {
  id: string;
  name: string;
  category: Category;
  image: string;
  description: string;
  specs: string[];
  price?: string; // pricing removed from public catalog
  badge?: string;
}
const products: Product[] = [
// Diagnostic Imaging
{
  id: 'digital-xray-fixed',
  name: 'Digital X-Ray (Fixed)',
  category: 'imaging',
  image: xrayFixedImage,
  description:
  'Fixed-installation digital X-ray system with advanced imaging capabilities for comprehensive diagnostic radiography.',
  specs: [
  'Fixed installation',
  'High-resolution detector',
  'PACS compatible',
  'WHO certified'],

  badge: 'Popular'
},
{
  id: 'digital-xray-mobile',
  name: 'Digital X-Ray (Mobile)',
  category: 'imaging',
  image: xrayMobileImage,
  description:
  'Mobile digital X-ray system for bedside and ward imaging with high-resolution flat-panel detection.',
  specs: [
  'Mobile platform design',
  'Digital flat-panel detector',
  'DICOM 3.0 compatible',
  'CE & WHO certified'],

  badge: 'Popular'
},
{
  id: 'portable-digital-xray',
  name: 'Portable Digital X-Ray',
  category: 'imaging',
  image: xrayPortableImage,
  description:
  'Lightweight portable digital X-ray unit for point-of-care, field and emergency imaging.',
  specs: [
  'Lightweight, portable design',
  'Wireless flat-panel detector',
  'Fast image preview',
  'DICOM compatible'],

  badge: 'New'
},
{
  id: 'ct-multi-slice',
  name: 'CT SCAN 32,64,128',
  category: 'imaging',
  image: ctScanImage,
  description:
  'Multi-detector CT scanner available in 32, 64, or 128 slice configurations for rapid whole-body scanning with exceptional image quality.',
  specs: [
  'Multi-slice acquisition',
  'Fast rotation speed',
  'Advanced reconstruction algorithms',
  'Cardiac gating capable'],

  badge: 'Popular'
},
{
  id: 'mri-scanner',
  name: 'MRI',
  category: 'imaging',
  image: mriImage,
  description:
  'High-field MRI scanner delivering exceptional soft-tissue contrast and detailed imaging for comprehensive diagnostic evaluation.',
  specs: [
  '3 Tesla field strength',
  '60cm bore diameter',
  'Advanced noise reduction',
  'Full-body imaging capability'],

  badge: 'Essential'
},
{
  id: 'c-arm',
  name: 'Mobile Surgical C-Arm',
  category: 'imaging',
  image: cArmImage,
  description:
  'Mobile surgical C-Arm system with real-time fluoroscopy for intraoperative imaging guidance and surgical navigation.',
  specs: [
  'Real-time fluoroscopy',
  'Mobile C-arm design',
  'Image intensifier or flat-panel option',
  'Surgical suite compatible'],

  badge: 'Popular'
},
{
  id: 'dynamic-xray',
  name: 'Dynamic X-Ray',
  category: 'imaging',
  image: dynamicXrayImage,
  description:
  'Dynamic X-ray (fluoroscopy) system for real-time imaging of internal structures during diagnostic and interventional procedures.',
  specs: [
  'Real-time dynamic imaging',
  'Continuous fluoroscopy capability',
  'High-sensitivity detector',
  'Cinematic recording option'],

  badge: 'Essential'
},
];

const categories: {
  id: Category;
  label: string;
  icon: React.ElementType;
}[] = [
{
  id: 'all',
  label: 'All Equipment',
  icon: TagIcon
},
{
  id: 'imaging',
  label: 'Diagnostic Imaging',
  icon: ScanIcon
}];


export function CatalogPage({ navigate }: CatalogPageProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const filtered =
  activeCategory === 'all' ?
  products :
  products.filter((p) => p.category === activeCategory);
  return (
    <div className="w-full min-h-screen bg-[#f8fafc]">
      {/* Page Header */}
      <div className="bg-[#0d1b2a] pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 24
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}>

            <span className="inline-block text-[#06b6d4] text-sm font-semibold uppercase tracking-widest mb-3">
              Full Product Range
            </span>
            <h1
              className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>

              Equipment Catalog
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Browse our complete range of WHO & CE certified medical equipment
              available for flexible renting. All equipment includes
              installation, training, and ongoing support.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0 ${isActive ? 'bg-[#0d1b2a] text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-[#0d1b2a]'}`}>

                  <Icon size={15} />
                  {cat.label}
                  {activeCategory === cat.id && cat.id !== 'all' &&
                  <span className="ml-1 text-xs bg-white/20 px-1.5 py-0.5 rounded-full">
                      {products.filter((p) => p.category === cat.id).length}
                    </span>
                  }
                </button>);

            })}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <p className="text-gray-500 text-sm">
            Showing{' '}
            <span className="font-semibold text-[#0d1b2a]">
              {filtered.length}
            </span>{' '}
            products
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{
              opacity: 0,
              y: 16
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: -8
            }}
            transition={{
              duration: 0.3
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {filtered.map((product, index) =>
            <motion.div
              key={product.id}
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.05
              }}
              whileHover={{
                y: -4,
                boxShadow: '0 16px 40px rgba(13,27,42,0.10)'
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">

                {/* Product Image */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  {product.price && (
                    <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-[#06b6d4] text-sm font-bold">
                        {product.price}
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      {categories.find((c) => c.id === product.category)?.label}
                    </span>
                    <h3
                    className="text-[#0d1b2a] font-bold text-lg mt-1 leading-snug"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}>

                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mt-2">
                      {product.description}
                    </p>
                  </div>

                  {/* Specs */}
                  <ul className="flex flex-col gap-1.5">
                    {product.specs.map((spec) =>
                  <li
                    key={spec}
                    className="flex items-center gap-2 text-xs text-gray-500">

                        <span
                      className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] flex-shrink-0"
                      aria-hidden="true" />

                        {spec}
                      </li>
                  )}
                  </ul>

                  {/* CTA */}
                  <button
                  onClick={() => navigate('contact')}
                  className="mt-auto w-full py-3 rounded-xl bg-[#0d1b2a] text-white text-sm font-semibold hover:bg-[#1a2f45] transition-colors duration-200 flex items-center justify-center gap-2">

                    Request Quote <ArrowRightIcon size={15} />
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom CTA Banner */}
      <div className="bg-[#0d1b2a] py-16 mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-extrabold text-white mb-4"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>

            Don't see what you need?
          </h2>
          <p className="text-gray-400 mb-8">
            We source custom equipment on request. Contact our team to discuss
            your specific clinical requirements.
          </p>
          <button
            onClick={() => navigate('contact')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#06b6d4] text-white font-semibold hover:bg-cyan-400 transition-colors duration-200">

            Talk to Our Team <ArrowRightIcon size={18} />
          </button>
        </div>
      </div>
    </div>);

}