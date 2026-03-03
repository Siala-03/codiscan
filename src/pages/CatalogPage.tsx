import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRightIcon,
  ScanIcon,
  ActivityIcon,
  StethoscopeIcon,
  FlaskConicalIcon,
  WindIcon,
  ShieldIcon,
  TagIcon } from
'lucide-react';
import { type Page } from '../App';
interface CatalogPageProps {
  navigate: (page: Page) => void;
}
type Category =
'all' |
'imaging' |
'monitoring' |
'surgical' |
'laboratory' |
'respiratory' |
'sterilization';
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
  id: 'xray-dr800',
  name: 'Digital X-Ray System DR-800',
  category: 'imaging',
  image:
  'https://images.pexels.com/photos/6501862/pexels-photo-6501862.jpeg',
  description:
  'High-resolution digital radiography system with flat-panel detector for rapid, clear diagnostic images.',
  specs: [
  '17×17" flat-panel detector',
  'DICOM 3.0 compatible',
  'Wireless image transfer',
  'CE & WHO certified'],

  badge: 'Popular'
},
{
  id: 'mri-3t',
  name: '3T MRI Scanner ProSeries',
  category: 'imaging',
  image:
  'https://images.pexels.com/photos/13176358/pexels-photo-13176358.jpeg',
  description:
  'High-field 3 Tesla MRI scanner delivering exceptional soft-tissue contrast for neurological and musculoskeletal imaging.',
  specs: [
  '3 Tesla field strength',
  '60cm bore diameter',
  'Advanced noise reduction',
  'Full-body imaging capability'],

  /* pricing hidden */
},
{
  id: 'ultrasound-pro',
  name: 'Portable Ultrasound ProScan',
  category: 'imaging',
  image:
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
  description:
  'Compact, cart-based ultrasound with multi-frequency probes for OB/GYN, cardiac, and abdominal imaging.',
  specs: [
  '15" HD touchscreen',
  'Color Doppler imaging',
  '4 probe ports',
  'Battery backup 2hrs'],

  badge: 'New'
},
{
  id: 'ct-64slice',
  name: '64-Slice CT Scanner',
  category: 'imaging',
  image:
  'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80',
  description:
  'Multi-detector CT scanner with 64-slice capability for rapid whole-body scanning with low radiation dose.',
  specs: [
  '64-slice acquisition',
  '0.35s rotation speed',
  'Low-dose technology',
  'Cardiac gating capable'],

  /* pricing hidden */
},
// Patient Monitoring
{
  id: 'monitor-pm12',
  name: 'Bedside Patient Monitor PM-12',
  category: 'monitoring',
  image:
  'https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg',
  description:
  'Comprehensive bedside monitor tracking ECG, SpO2, NIBP, temperature, and respiration with alarm management.',
  specs: [
  '12.1" color display',
  'ECG, SpO2, NIBP, Temp',
  '72-hour trend storage',
  'Central station connectivity'],

  badge: 'Popular'
},
{
  id: 'central-station',
  name: 'Central Monitoring Station',
  category: 'monitoring',
  image:
  'https://images.pexels.com/photos/13697732/pexels-photo-13697732.jpeg',
  description:
  'Centralized monitoring hub supporting up to 16 bedside monitors with real-time waveform display and alarm routing.',
  specs: [
  'Monitors up to 16 beds',
  '24" dual-screen display',
  'EMR integration',
  'Remote alarm notification'],

  /* pricing hidden */
},
{
  id: 'defibrillator-aed',
  name: 'AED Pro Defibrillator',
  category: 'monitoring',
  image:
  'https://images.pexels.com/photos/8943274/pexels-photo-8943274.jpeg',
  description:
  'Automated external defibrillator with real-time CPR feedback and 12-lead ECG capability for emergency response.',
  specs: [
  'Biphasic 200J max',
  'CPR feedback sensor',
  '12-lead ECG',
  'IP55 dust/water resistant'],

  badge: 'Essential'
},
// Surgical Equipment
{
  id: 'op-table-ot500',
  name: 'Electric Operating Table OT-500',
  category: 'surgical',
  image:
  'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&q=80',
  description:
  'Fully electric, multi-position operating table with carbon fiber tabletop for X-ray transparency and C-arm compatibility.',
  specs: [
  'Carbon fiber tabletop',
  'Max load 300kg',
  'Trendelenburg ±30°',
  'Wireless remote control'],

  /* pricing hidden */
},
{
  id: 'surgical-light',
  name: 'LED Surgical Light System',
  category: 'surgical',
  image:
  'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80',
  description:
  'Ceiling-mounted dual-head LED surgical light with 160,000 lux intensity and shadow-free illumination.',
  specs: [
  '160,000 lux intensity',
  'Color temperature 4,000K',
  'Shadow-free dual head',
  '50,000hr LED lifespan'],

  badge: 'Popular'
},
{
  id: 'laparoscopic-tower',
  name: 'Laparoscopic Tower System',
  category: 'surgical',
  image:
  'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80',
  description:
  'Complete 4K laparoscopic imaging tower with insufflator, light source, and HD monitor for minimally invasive surgery.',
  specs: [
  '4K UHD camera system',
  'CO2 insufflator 40L/min',
  '32" 4K surgical monitor',
  'Full HD recording'],

  /* pricing hidden */
},
// Laboratory Equipment
{
  id: 'hematology-ha5000',
  name: 'Hematology Analyzer HA-5000',
  category: 'laboratory',
  image:
  'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=600&q=80',
  description:
  'Automated 5-part differential hematology analyzer processing 80 samples/hour with comprehensive CBC reporting.',
  specs: [
  '80 samples/hour',
  '5-part differential',
  '26 parameters reported',
  'Auto-rerun capability'],

  badge: 'Popular'
},
{
  id: 'pcr-realtime',
  name: 'Real-Time PCR System',
  category: 'laboratory',
  image:
  'https://images.pexels.com/photos/8940510/pexels-photo-8940510.jpeg',
  description:
  'High-throughput real-time PCR platform for molecular diagnostics, pathogen detection, and genetic analysis.',
  specs: [
  '96-well plate format',
  '6-channel fluorescence',
  '45-min run time',
  'Cloud data management'],

  /* pricing hidden */
},
{
  id: 'centrifuge-hs',
  name: 'High-Speed Centrifuge',
  category: 'laboratory',
  image:
  'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80',
  description:
  'Refrigerated high-speed centrifuge with 24,000 RPM capacity for serum, plasma, and cell separation.',
  specs: [
  'Max 24,000 RPM',
  'Refrigerated -20°C to +40°C',
  '24-position rotor',
  'Imbalance auto-stop'],

  /* pricing hidden */
},
// Respiratory Care
{
  id: 'ventilator-vp3000',
  name: 'ICU Ventilator VentPro 3000',
  category: 'respiratory',
  image:
  'https://images.pexels.com/photos/939325/pexels-photo-939325.jpeg',
  description:
  'Advanced ICU ventilator supporting all major ventilation modes with integrated monitoring and lung protection algorithms.',
  specs: [
  'Volume & pressure modes',
  'SIMV, CPAP, BiPAP',
  'Integrated SpO2 monitoring',
  '4hr internal battery'],

  badge: 'Essential'
},
{
  id: 'cpap-bipap',
  name: 'CPAP/BiPAP System',
  category: 'respiratory',
  image:
  'https://images.pexels.com/photos/8460235/pexels-photo-8460235.jpeg',
  description:
  'Auto-titrating CPAP/BiPAP device for sleep apnea treatment and non-invasive respiratory support.',
  specs: [
  'Auto-CPAP 4–20 cmH2O',
  'Heated humidifier',
  'Compliance data tracking',
  'Quiet <26 dB operation'],

  /* pricing hidden */
},
{
  id: 'oxygen-10l',
  name: 'Oxygen Concentrator 10L',
  category: 'respiratory',
  image:
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
  description:
  'Medical-grade 10 LPM oxygen concentrator delivering 93% ±3% purity for continuous oxygen therapy.',
  specs: [
  '10 LPM flow rate',
  '93% ±3% O2 purity',
  'Low noise 48 dB',
  'Oxygen purity alarm'],

  /* pricing hidden */
},
// Sterilization
{
  id: 'autoclave-23l',
  name: 'Class B Autoclave 23L',
  category: 'sterilization',
  image:
  'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80',
  description:
  'Class B pre-vacuum autoclave with 23L chamber for sterilizing wrapped, hollow, and porous instruments.',
  specs: [
  '23L chamber volume',
  'Class B pre-vacuum',
  '134°C / 121°C cycles',
  'Printer & USB data log'],

  badge: 'Popular'
},
{
  id: 'uvc-cabinet',
  name: 'UV-C Sterilization Cabinet',
  category: 'sterilization',
  image:
  'https://images.pexels.com/photos/6502369/pexels-photo-6502369.jpeg',
  description:
  'Large-capacity UV-C sterilization cabinet for rapid surface decontamination of medical instruments and devices.',
  specs: [
  '60L storage capacity',
  '254nm UV-C wavelength',
  '15-min sterilization cycle',
  'Ozone-free operation'],

  /* pricing hidden */
}];

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
},
{
  id: 'monitoring',
  label: 'Patient Monitoring',
  icon: ActivityIcon
},
{
  id: 'surgical',
  label: 'Surgical',
  icon: StethoscopeIcon
},
{
  id: 'laboratory',
  label: 'Laboratory',
  icon: FlaskConicalIcon
},
{
  id: 'respiratory',
  label: 'Respiratory',
  icon: WindIcon
},
{
  id: 'sterilization',
  label: 'Sterilization',
  icon: ShieldIcon
}];

const badgeColors: Record<string, string> = {
  Popular: 'bg-[#06b6d4] text-white',
  New: 'bg-emerald-500 text-white',
  Essential: 'bg-[#2563eb] text-white'
};
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
              available for flexible leasing. All equipment includes
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
                <div className="relative h-52 overflow-hidden bg-gray-100">
                  <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />

                  {product.badge &&
                <span
                  className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${badgeColors[product.badge]}`}>

                      {product.badge}
                    </span>
                }
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