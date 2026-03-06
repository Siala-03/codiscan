import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  MapPinIcon,
  MailIcon,
  PhoneIcon,
  ClockIcon,
  SendIcon,
  CheckCircleIcon } from
'lucide-react';
import { type Page } from '../App';
interface ContactPageProps {
  navigate: (page: Page) => void;
}
interface FormState {
  name: string;
  email: string;
  phone: string;
  facility: string;
  facilityType: string;
  interest: string;
  message: string;
}
export function ContactPage({ navigate }: ContactPageProps) {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    facility: '',
    facilityType: '',
    interest: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const formInView = useInView(formRef, {
    once: true,
    margin: '-80px'
  });
  const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>

  {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-[#0d1b2a] pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#06b6d4]/8 blur-3xl" />
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
              Get In Touch
            </span>
            <h1
              className="text-5xl sm:text-6xl font-extrabold text-white mb-6 leading-tight"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>

              Request a Demo
              <br />
              <span className="text-[#06b6d4]">or Contact Us</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              Our team responds within 24 hours. Whether you're ready to apply
              or just exploring options, we're here to help.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="bg-[#f8fafc] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-cyan-50 flex items-center justify-center flex-shrink-0">
                <MapPinIcon className="text-[#06b6d4]" size={20} />
              </div>
              <div>
                <p
                  className="font-bold text-[#0d1b2a] text-sm mb-1"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>

                  Our Office
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  KG 7 Ave, Kacyiru
                  <br />
                  Kigali, Rwanda
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-cyan-50 flex items-center justify-center flex-shrink-0">
                <MailIcon className="text-[#06b6d4]" size={20} />
              </div>
              <div>
                <p
                  className="font-bold text-[#0d1b2a] text-sm mb-1"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>

                  Email Us
                </p>
                <a
                  href="mailto:info@kodiscan.rw"
                  className="text-gray-500 text-sm hover:text-[#06b6d4] transition-colors">

                  info@kodiscan.rw
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-cyan-50 flex items-center justify-center flex-shrink-0">
                <PhoneIcon className="text-[#06b6d4]" size={20} />
              </div>
              <div>
                <p
                  className="font-bold text-[#0d1b2a] text-sm mb-1"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>

                  Call Us
                </p>
                <a
                  href="tel:+250787104894"
                  className="text-gray-500 text-sm hover:text-[#06b6d4] transition-colors">

                  +250 787 104 894
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-cyan-50 flex items-center justify-center flex-shrink-0">
                <ClockIcon className="text-[#06b6d4]" size={20} />
              </div>
              <div>
                <p
                  className="font-bold text-[#0d1b2a] text-sm mb-1"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>

                  Office Hours
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Mon–Fri: 8am–6pm
                  <br />
                  Sat: 9am–1pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form + Side Info */}
      <section className="py-20 lg:py-28" ref={formRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <motion.div
              initial={{
                opacity: 0,
                x: -32
              }}
              animate={
              formInView ?
              {
                opacity: 1,
                x: 0
              } :
              {}
              }
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="lg:col-span-3">

              {submitted ?
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95
                }}
                animate={{
                  opacity: 1,
                  scale: 1
                }}
                className="flex flex-col items-center justify-center text-center py-20">

                  <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                    <CheckCircleIcon className="text-emerald-500" size={40} />
                  </div>
                  <h2
                  className="text-3xl font-extrabold text-[#0d1b2a] mb-4"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>

                    Message Sent!
                  </h2>
                  <p className="text-gray-500 text-lg mb-8 max-w-md">
                    Thank you for reaching out. Our team will get back to you
                    within 24 hours.
                  </p>
                  <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: '',
                      email: '',
                      phone: '',
                      facility: '',
                      facilityType: '',
                      interest: '',
                      message: ''
                    });
                  }}
                  className="px-6 py-3 rounded-full border-2 border-[#0d1b2a] text-[#0d1b2a] font-semibold hover:bg-gray-50 transition-colors">

                    Send Another Message
                  </button>
                </motion.div> :

              <>
                  <h2
                  className="text-3xl font-extrabold text-[#0d1b2a] mb-2"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>

                    Send Us a Message
                  </h2>
                  <p className="text-gray-500 mb-8">
                    Fill out the form below and we'll be in touch within 24
                    hours.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-[#0d1b2a] mb-2">

                          Full Name *
                        </label>
                        <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Dr. Jean Habimana"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#0d1b2a] text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:border-transparent transition-all" />

                      </div>
                      <div>
                        <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-[#0d1b2a] mb-2">

                          Email Address *
                        </label>
                        <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="dr.habimana@hospital.rw"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#0d1b2a] text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:border-transparent transition-all" />

                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-[#0d1b2a] mb-2">

                          Phone Number
                        </label>
                        <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+250 787 104 894"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#0d1b2a] text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:border-transparent transition-all" />

                      </div>
                      <div>
                        <label
                        htmlFor="facility"
                        className="block text-sm font-semibold text-[#0d1b2a] mb-2">

                          Facility Name *
                        </label>
                        <input
                        id="facility"
                        name="facility"
                        type="text"
                        required
                        value={form.facility}
                        onChange={handleChange}
                        placeholder="Kigali Central Hospital"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#0d1b2a] text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:border-transparent transition-all" />

                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                        htmlFor="facilityType"
                        className="block text-sm font-semibold text-[#0d1b2a] mb-2">

                          Facility Type
                        </label>
                        <select
                        id="facilityType"
                        name="facilityType"
                        value={form.facilityType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#0d1b2a] text-sm focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:border-transparent transition-all bg-white">

                          <option value="">Select type...</option>
                          <option value="public-hospital">
                            Public Hospital
                          </option>
                          <option value="private-clinic">Private Clinic</option>
                          <option value="district-hospital">
                            District Hospital
                          </option>
                          <option value="health-center">Health Center</option>
                          <option value="ngo">NGO / Faith-Based</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label
                        htmlFor="interest"
                        className="block text-sm font-semibold text-[#0d1b2a] mb-2">

                          Equipment Interest
                        </label>
                        <select
                        id="interest"
                        name="interest"
                        value={form.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#0d1b2a] text-sm focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:border-transparent transition-all bg-white">

                          <option value="">Select category...</option>
                          <option value="imaging">Diagnostic Imaging</option>
                          <option value="monitoring">Patient Monitoring</option>
                          <option value="surgical">Surgical Equipment</option>
                          <option value="laboratory">
                            Laboratory Equipment
                          </option>
                          <option value="respiratory">Respiratory Care</option>
                          <option value="sterilization">Sterilization</option>
                          <option value="multiple">Multiple Categories</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-[#0d1b2a] mb-2">

                        Message
                      </label>
                      <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your facility's needs, patient volume, or any specific equipment requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#0d1b2a] text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#06b6d4] focus:border-transparent transition-all resize-none" />

                    </div>

                    <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#2563eb] text-white font-semibold text-base hover:bg-blue-700 transition-colors duration-200 shadow-lg shadow-blue-500/20">

                      Send Message <SendIcon size={18} />
                    </button>
                  </form>
                </>
              }
            </motion.div>

            {/* Side Info */}
            <motion.div
              initial={{
                opacity: 0,
                x: 32
              }}
              animate={
              formInView ?
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
              className="lg:col-span-2 flex flex-col gap-6">

              {/* Why Contact */}
              <div className="bg-[#0d1b2a] rounded-2xl p-8">
                <h3
                  className="text-white font-bold text-xl mb-6"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>

                  What happens next?
                </h3>
                <div className="flex flex-col gap-5">
                  {[
                  {
                    step: '1',
                    text: 'We review your inquiry within 24 hours'
                  },
                  {
                    step: '2',
                    text: 'A specialist calls to discuss your needs'
                  },
                  {
                    step: '3',
                    text: 'We prepare a custom equipment proposal'
                  },
                  {
                    step: '4',
                    text: 'Equipment delivered within 48hrs of signing'
                  }].
                  map((item) =>
                  <div key={item.step} className="flex items-start gap-4">
                      <span className="w-7 h-7 rounded-full bg-[#06b6d4] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                        {item.step}
                      </span>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Hospital Image */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80"
                  alt="Healthcare professionals"
                  loading="lazy"
                  className="w-full h-48 object-cover" />

              </div>

              {/* Trust Badges */}
              <div className="bg-[#f8fafc] rounded-2xl p-6 border border-gray-100">
                <p
                  className="text-[#0d1b2a] font-bold text-sm mb-4"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif"
                  }}>

                  Why facilities trust Kodiscan
                </p>
                <div className="flex flex-col gap-3">
                  {[
                  'WHO & CE certified equipment only',
                  'No hidden fees or surprise charges',
                  'Lifetime support through equipment lifecycle',
                  '48-hour delivery guarantee',
                  'Kodiscan-based support team'].
                  map((item) =>
                  <div key={item} className="flex items-center gap-2.5">
                      <CheckCircleIcon
                      size={15}
                      className="text-[#06b6d4] flex-shrink-0" />

                      <span className="text-gray-600 text-sm">{item}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>);

}