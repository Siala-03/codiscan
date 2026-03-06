import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  ArrowRightIcon,
  ClipboardListIcon,
  SearchIcon,
  FileSignatureIcon,
  HeadphonesIcon,
  ChevronDownIcon,
  CheckCircleIcon } from
'lucide-react';
import { type Page } from '../App';
interface LeasingProcessPageProps {
  navigate: (page: Page) => void;
}
const steps = [
{
  number: '01',
  icon: ClipboardListIcon,
  title: 'Submit Application',
  description:
  'Fill out our simple facility needs assessment form online or by phone. Tell us about your clinical requirements, patient volume, and preferred lease term.',
  details: [
  'Takes less than 10 minutes',
  'No financial documents required initially',
  'Our team reviews within 24 hours',
  'Available in English, French & Kinyarwanda']

},
{
  number: '02',
  icon: SearchIcon,
  title: 'Equipment Selection',
  description:
  'Our clinical specialists work with your team to identify the best equipment for your specific needs. Browse our full catalog or let us recommend based on your requirements.',
  details: [
  'Free consultation with biomedical specialist',
  'Equipment demo available on request',
  'Compare models and specifications',
  'Custom sourcing for specialized needs']

},
{
  number: '03',
  icon: FileSignatureIcon,
  title: 'Agreement & Delivery',
  description:
  'Sign your flexible lease agreement with transparent terms — no hidden fees. Equipment is delivered, installed, and tested within 48 hours of signing.',
  details: [
  '12–60 month flexible terms',
  'Fixed monthly payments',
  'Professional installation included',
  'Staff training on day of delivery']

},
{
  number: '04',
  icon: HeadphonesIcon,
  title: 'Ongoing Support',
  description:
  'Your lease includes comprehensive support throughout the entire term. Our Codiscan-based technicians are available 24/7 for emergencies.',
  details: [
  '5-year warranty on all equipment',
  'Scheduled preventive maintenance',
  '24/7 emergency technical support',
  'Free equipment upgrades available']

}];

const faqs = [
{
  q: 'What is the minimum lease term?',
  a: "Our minimum lease term is 12 months. We offer flexible terms from 12 to 60 months, allowing you to choose a plan that fits your facility's budget and operational planning cycle."
},
{
  q: 'Is there a down payment required?',
  a: 'No upfront capital is required for most equipment categories. Some high-value equipment (e.g., MRI scanners) may require a small security deposit, which is fully refundable at the end of the lease term.'
},
{
  q: 'What happens if equipment breaks down?',
  a: 'All leased equipment is covered by our lifetime support program. In the event of a breakdown, our Kigali-based technicians will respond within 24 hours. We provide a replacement unit if repairs take longer than 48 hours.'
},
{
  q: 'Can I upgrade equipment during the lease?',
  a: 'Yes. We offer equipment upgrade options at any point during your lease term. If newer technology becomes available, you can upgrade with a simple lease amendment — no penalties for early upgrades.'
},
{
  q: 'Who handles installation and training?',
  a: 'Codiscan handles all installation at no additional cost. Our certified biomedical technicians install and commission the equipment, and provide hands-on training for your clinical staff on the day of delivery.'
},
{
  q: 'What certifications does your equipment carry?',
  a: 'All equipment in our catalog is WHO pre-qualified and CE marked, meeting international safety and performance standards. We provide full documentation including certificates of conformity and calibration records.'
},
{
  q: 'Can government hospitals and NGO-funded facilities apply?',
  a: 'Absolutely. We work with public district hospitals, private clinics, NGO-funded health centers, and faith-based health facilities. We have experience navigating government procurement processes and can assist with documentation.'
},
{
  q: 'What happens at the end of the lease?',
  a: "At lease end, you have three options: return the equipment, renew the lease (often at a reduced rate), or purchase the equipment at its residual value. We'll contact you 90 days before expiry to discuss your preference."
}];

export function LeasingProcessPage({ navigate }: LeasingProcessPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const stepsInView = useInView(stepsRef, {
    once: true,
    margin: '-80px'
  });
  const faqInView = useInView(faqRef, {
    once: true,
    margin: '-80px'
  });
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-[#0d1b2a] pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#06b6d4]/10 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            }}
            className="max-w-3xl">

            <span className="inline-block text-[#06b6d4] text-sm font-semibold uppercase tracking-widest mb-4">
              Simple & Transparent
            </span>
            <h1
              className="text-5xl sm:text-6xl font-extrabold text-white mb-6 leading-tight"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>

              How Our Leasing
              <br />
              <span className="text-[#06b6d4]">Process Works</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              From application to delivery in as little as 72 hours. Our
              streamlined process is designed to get your facility equipped and
              operational as quickly as possible.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Steps */}
      <section className="py-20 lg:py-28" ref={stepsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 1;
              return (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 32
                  }}
                  animate={
                  stepsInView ?
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
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>

                  {/* Content */}
                  <div className={isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#0d1b2a] flex items-center justify-center">
                        <Icon className="text-[#06b6d4]" size={26} />
                      </div>
                      <span
                        className="text-6xl font-extrabold text-gray-100"
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif"
                        }}>

                        {step.number}
                      </span>
                    </div>
                    <h2
                      className="text-3xl font-extrabold text-[#0d1b2a] mb-4"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif"
                      }}>

                      {step.title}
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed mb-6">
                      {step.description}
                    </p>
                    <ul className="flex flex-col gap-3">
                      {step.details.map((detail) =>
                      <li key={detail} className="flex items-center gap-3">
                          <CheckCircleIcon
                          className="text-[#06b6d4] flex-shrink-0"
                          size={18} />

                          <span className="text-gray-700 text-sm font-medium">
                            {detail}
                          </span>
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Visual */}
                  <div className={`${isEven ? 'lg:order-1' : ''}`}>
                    <div
                      className={`rounded-3xl p-10 flex items-center justify-center min-h-[280px] ${index === 0 ? 'bg-cyan-50' : index === 1 ? 'bg-blue-50' : index === 2 ? 'bg-emerald-50' : 'bg-purple-50'}`}>

                      <div className="text-center">
                        <div
                          className={`w-24 h-24 rounded-3xl mx-auto mb-6 flex items-center justify-center ${index === 0 ? 'bg-[#06b6d4]' : index === 1 ? 'bg-[#2563eb]' : index === 2 ? 'bg-emerald-500' : 'bg-purple-500'}`}>

                          <Icon className="text-white" size={40} />
                        </div>
                        <p
                          className="text-2xl font-extrabold text-[#0d1b2a]"
                          style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif"
                          }}>

                          Step {index + 1}
                        </p>
                        <p className="text-gray-500 mt-1">{step.title}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>);

            })}
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="bg-[#f8fafc] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-[#06b6d4] text-sm font-semibold uppercase tracking-widest mb-3">
              Lease Terms
            </span>
            <h2
              className="text-4xl font-extrabold text-[#0d1b2a]"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>

              Flexible Plans for Every Facility
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
              <p className="text-[#06b6d4] text-sm font-semibold uppercase tracking-wider mb-3">
                Short Term
              </p>
              <p
                className="text-5xl font-extrabold text-[#0d1b2a] mb-2"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}>

                12
              </p>
              <p className="text-gray-500 mb-6">months</p>
              <ul className="text-left flex flex-col gap-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon size={15} className="text-[#06b6d4]" />
                  Ideal for pilot programs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon size={15} className="text-[#06b6d4]" />
                  Higher monthly rate
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon size={15} className="text-[#06b6d4]" />
                  Full support included
                </li>
              </ul>
            </div>
            <div className="bg-[#0d1b2a] rounded-2xl p-8 border border-[#06b6d4]/30 shadow-xl text-center relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#06b6d4] text-white text-xs font-bold px-3 py-1 rounded-full">
                Most Popular
              </span>
              <p className="text-[#06b6d4] text-sm font-semibold uppercase tracking-wider mb-3">
                Standard
              </p>
              <p
                className="text-5xl font-extrabold text-white mb-2"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}>

                36
              </p>
              <p className="text-gray-400 mb-6">months</p>
              <ul className="text-left flex flex-col gap-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon size={15} className="text-[#06b6d4]" />
                  Best value balance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon size={15} className="text-[#06b6d4]" />
                  Reduced monthly rate
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon size={15} className="text-[#06b6d4]" />
                  Priority support
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
              <p className="text-[#06b6d4] text-sm font-semibold uppercase tracking-wider mb-3">
                Long Term
              </p>
              <p
                className="text-5xl font-extrabold text-[#0d1b2a] mb-2"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}>

                60
              </p>
              <p className="text-gray-500 mb-6">months</p>
              <ul className="text-left flex flex-col gap-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon size={15} className="text-[#06b6d4]" />
                  Lowest monthly rate
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon size={15} className="text-[#06b6d4]" />
                  Purchase option at end
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon size={15} className="text-[#06b6d4]" />
                  Dedicated account manager
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28" ref={faqRef}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 24
            }}
            animate={
            faqInView ?
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
              Common Questions
            </span>
            <h2
              className="text-4xl font-extrabold text-[#0d1b2a]"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>

              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 16
              }}
              animate={
              faqInView ?
              {
                opacity: 1,
                y: 0
              } :
              {}
              }
              transition={{
                duration: 0.4,
                delay: i * 0.06
              }}
              className="border border-gray-200 rounded-2xl overflow-hidden">

                <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openFaq === i}>

                  <span
                  className="font-semibold text-[#0d1b2a] pr-4"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>

                    {faq.q}
                  </span>
                  <motion.div
                  animate={{
                    rotate: openFaq === i ? 180 : 0
                  }}
                  transition={{
                    duration: 0.2
                  }}
                  className="flex-shrink-0">

                    <ChevronDownIcon size={20} className="text-gray-400" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i &&
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0
                  }}
                  animate={{
                    height: 'auto',
                    opacity: 1
                  }}
                  exit={{
                    height: 0,
                    opacity: 0
                  }}
                  transition={{
                    duration: 0.25
                  }}
                  className="overflow-hidden">

                      <p className="px-6 pb-6 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                }
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-[#0d1b2a] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-extrabold text-white mb-4"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>

            Ready to get started?
          </h2>
          <p className="text-gray-400 mb-8">
            Submit your application today and get equipped within 72 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#06b6d4] text-white font-semibold hover:bg-cyan-400 transition-colors duration-200">

              Start Application <ArrowRightIcon size={18} />
            </button>
            <button
              onClick={() => navigate('catalog')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors duration-200">

              Browse Equipment
            </button>
          </div>
        </div>
      </div>
    </div>);

}