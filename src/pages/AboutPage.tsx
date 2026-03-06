import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  AwardIcon,
  UsersIcon,
  HeartIcon,
  GlobeIcon,
  TrendingUpIcon } from
'lucide-react';
import { type Page } from '../App';
import alekiImage from '../assets/aleki.jfif';
interface AboutPageProps {
  navigate: (page: Page) => void;
}
export function AboutPage({ navigate }: AboutPageProps) {
  const missionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const missionInView = useInView(missionRef, {
    once: true,
    margin: '-80px'
  });
  const valuesInView = useInView(valuesRef, {
    once: true,
    margin: '-80px'
  });
  const teamInView = useInView(teamRef, {
    once: true,
    margin: '-80px'
  });
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-[#0d1b2a] pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#06b6d4]/8 blur-3xl -translate-y-1/2 translate-x-1/4" />
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
              Our Story
            </span>
            <h1
              className="text-5xl sm:text-6xl font-extrabold text-white mb-6 leading-tight"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>

              Transforming Healthcare
              <br />
              <span className="text-[#06b6d4]">Across Rwanda</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              Founded in 2024, Kodiscan was built on a simple belief that every
              Rwandan patient deserves access to world-class diagnostic and
              treatment equipment, regardless of their facility's budget.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission + Image */}
      <section className="py-20 lg:py-28" ref={missionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -40
              }}
              animate={
              missionInView ?
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
                Our Mission
              </span>
              <h2
                className="text-4xl font-extrabold text-[#0d1b2a] mb-6 leading-tight"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}>

                Removing Financial Barriers to Quality Healthcare
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Rwanda's healthcare system has made extraordinary strides over
                the past two decades. But for many district hospitals and
                private clinics, acquiring modern diagnostic and surgical
                equipment remains out of reach due to capital constraints.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Kodiscan bridges this gap. By offering flexible, affordable
                renting plans, we enable facilities of all sizes to access the
                same equipment used in leading hospitals worldwide — without the
                upfront investment.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <CheckCircleIcon
                    className="text-[#06b6d4] flex-shrink-0"
                    size={20} />

                  <span className="text-gray-700 font-medium">
                    120+ partner facilities across all provinces
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircleIcon
                    className="text-[#06b6d4] flex-shrink-0"
                    size={20} />

                  <span className="text-gray-700 font-medium">
                    50+ equipment categories, all WHO & CE certified
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircleIcon
                    className="text-[#06b6d4] flex-shrink-0"
                    size={20} />

                  <span className="text-gray-700 font-medium">
                    Kigali-based support team, 48hr delivery guarantee
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 40
              }}
              animate={
              missionInView ?
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
              className="relative">

              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/6129203/pexels-photo-6129203.jpeg"
                  alt="Modern hospital facility in Rwanda"
                  className="w-full h-[480px] object-cover" />

              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                <p
                  className="text-4xl font-extrabold text-[#0d1b2a]"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>

                  2024
                </p>
                <p className="text-gray-500 text-sm mt-1">Founded in Kigali</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-[#06b6d4] rounded-2xl shadow-xl p-5">
                <p
                  className="text-4xl font-extrabold text-white"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>

                  120+
                </p>
                <p className="text-white/80 text-sm mt-1">Partner Clinics</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact & Vision Section */}
      <section className="bg-[#f8fafc] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-[#06b6d4] text-sm font-semibold uppercase tracking-widest mb-3">
              Impact & Vision
            </span>
            <h2
              className="text-4xl font-extrabold text-[#0d1b2a]"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>

              Our Impact on Healthcare
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg"
                alt="Impact & Vision"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#0d1b2a] mb-3">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To transform healthcare accessibility across East Africa by making essential medical equipment affordable and available to every clinic, health center, and hospital.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#0d1b2a] mb-3">Our Impact</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="text-[#06b6d4] flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-600">Over 100 healthcare facilities equipped with modern diagnostic imaging</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="text-[#06b6d4] flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-600">50,000+ patients served annually with improved diagnostic capabilities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="text-[#06b6d4] flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-600">Saving facilities $2M+ in capital expenditures through our flexible rental model</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28" ref={valuesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-[#06b6d4] text-sm font-semibold uppercase tracking-widest mb-3">
              What Drives Us
            </span>
            <h2
              className="text-4xl font-extrabold text-[#0d1b2a]"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>

              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
            {
              icon: HeartIcon,
              title: 'Patient-First',
              desc: 'Every decision we make is guided by one question: does this improve patient outcomes?'
            },
            {
              icon: AwardIcon,
              title: 'Uncompromising Quality',
              desc: 'We only lease equipment that meets WHO and CE international standards — no exceptions.'
            },
            {
              icon: UsersIcon,
              title: 'Local Expertise',
              desc: "Our Kigali-based team understands Rwanda's healthcare landscape and provides culturally relevant support."
            },
            {
              icon: GlobeIcon,
              title: 'Accessibility',
              desc: 'We believe geography and budget should never determine the quality of care a patient receives.'
            },
            {
              icon: TrendingUpIcon,
              title: 'Continuous Improvement',
              desc: 'We invest in the latest equipment and regularly upgrade our catalog to reflect medical advances.'
            },
            {
              icon: CheckCircleIcon,
              title: 'Transparency',
              desc: 'No hidden fees, no surprises. Our leasing terms are clear, fair, and designed around your needs.'
            }].
            map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{
                    opacity: 0,
                    y: 24
                  }}
                  animate={
                  valuesInView ?
                  {
                    opacity: 1,
                    y: 0
                  } :
                  {}
                  }
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08
                  }}
                  className="p-7 rounded-2xl border border-gray-100 bg-white">

                  <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center mb-4">
                    <Icon className="text-[#06b6d4]" size={22} />
                  </div>
                  <h3
                    className="text-[#0d1b2a] font-bold text-lg mb-2"
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}>

                    {value.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </motion.div>);

            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#0d1b2a] py-20 lg:py-28" ref={teamRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 24
            }}
            animate={
            teamInView ?
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
              The People Behind Kodiscan
            </span>
            <h2
              className="text-4xl font-extrabold text-white"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>

              Our Leadership Team
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
            {
              name: 'Alex Musyoka',
              role: 'CEO & Co-Founder',
              initials: 'AM',
              image: alekiImage,
              color: 'bg-[#06b6d4]',
              bio: 'Over 15 years of experience in healthcare technology and innovation. Previously founded Vieberg East Africa, Mitdash among others in Kenya.'
            },
            {
              name: 'Claudette Uwimana',
              role: 'COO',
              initials: 'CU',
              image: null,
              color: 'bg-[#2563eb]',
              bio: 'Operations expert with deep experience in medical supply chain management.'
            },
            {
              name: 'Dr. Patrick Habimana',
              role: 'Chief Medical Officer',
              initials: 'PH',
              image: null,
              color: 'bg-emerald-500',
              bio: 'Biomedical engineer and physician specializing in clinical equipment standards.'
            },
            {
              name: 'Aline Mukamana',
              role: 'Head of Partnerships',
              initials: 'AM',
              image: null,
              color: 'bg-purple-500',
              bio: "Builds and maintains relationships with Rwanda's leading healthcare facilities."
            }].
            map((member, i) =>
            <motion.div
              key={member.name}
              initial={{
                opacity: 0,
                y: 24
              }}
              animate={
              teamInView ?
              {
                opacity: 1,
                y: 0
              } :
              {}
              }
              transition={{
                duration: 0.5,
                delay: i * 0.1
              }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">

                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-16 h-16 rounded-2xl object-cover mx-auto mb-4"
                  />
                ) : (
                  <div
                  className={`w-16 h-16 rounded-2xl ${member.color} flex items-center justify-center text-white font-bold text-xl mx-auto mb-4`}
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>

                    {member.initials}
                  </div>
                )}
                <h3
                className="text-white font-bold text-base mb-1"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}>

                  {member.name}
                </h3>
                <p className="text-[#06b6d4] text-sm font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-extrabold text-[#0d1b2a] mb-4"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>

            Ready to partner with us?
          </h2>
          <p className="text-gray-500 mb-8">
            Join 120+ healthcare facilities already benefiting from Kodiscan's
            equipment renting program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#2563eb] text-white font-semibold hover:bg-blue-700 transition-colors duration-200">

              Request a Demo <ArrowRightIcon size={18} />
            </button>
            <button
              onClick={() => navigate('catalog')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-[#0d1b2a] text-[#0d1b2a] font-semibold hover:bg-gray-50 transition-colors duration-200">

              Browse Equipment
            </button>
          </div>
        </div>
      </section>
    </div>);

}