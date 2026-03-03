import React from 'react';
import {
  TwitterIcon,
  LinkedinIcon,
  FacebookIcon,
  MapPinIcon,
  MailIcon,
  PhoneIcon } from
'lucide-react';
import { type Page } from '../App';
interface FooterProps {
  navigate: (page: Page) => void;
}
export function Footer({ navigate }: FooterProps) {
  return (
    <footer className="w-full bg-[#0a1628] pt-16 pb-8" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Logo + Tagline */}
          <div className="lg:col-span-1">
            <button
              onClick={() => navigate('home')}
              className="flex items-center gap-2.5 mb-4">

              {/* logo image - use file placed in dist/assets */}
            <img
              src="/assets/logo.png"
              alt="Codiscan"
              loading="lazy"
              className="w-9 h-9 rounded-lg" />
              <span
                className="text-white font-bold text-xl tracking-tight"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}>

                Codiscan
              </span>
            </button>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Advancing Rwanda's healthcare infrastructure through accessible,
              certified medical equipment leasing.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3
              className="text-white font-bold text-sm uppercase tracking-wider mb-5"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>

              Quick Links
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              <li>
                <button
                  onClick={() => navigate('home')}
                  className="text-gray-400 text-sm hover:text-[#06b6d4] transition-colors text-left">

                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('about')}
                  className="text-gray-400 text-sm hover:text-[#06b6d4] transition-colors text-left">

                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('catalog')}
                  className="text-gray-400 text-sm hover:text-[#06b6d4] transition-colors text-left">

                  Equipment Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('leasing')}
                  className="text-gray-400 text-sm hover:text-[#06b6d4] transition-colors text-left">

                  Leasing Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('contact')}
                  className="text-gray-400 text-sm hover:text-[#06b6d4] transition-colors text-left">

                  Request Demo
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Equipment */}
          <div>
            <h3
              className="text-white font-bold text-sm uppercase tracking-wider mb-5"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>

              Equipment
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              <li>
                <button
                  onClick={() => navigate('catalog')}
                  className="text-gray-400 text-sm hover:text-[#06b6d4] transition-colors text-left">

                  Diagnostic Imaging
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('catalog')}
                  className="text-gray-400 text-sm hover:text-[#06b6d4] transition-colors text-left">

                  Patient Monitoring
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('catalog')}
                  className="text-gray-400 text-sm hover:text-[#06b6d4] transition-colors text-left">

                  Surgical Equipment
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('catalog')}
                  className="text-gray-400 text-sm hover:text-[#06b6d4] transition-colors text-left">

                  Laboratory Equipment
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('catalog')}
                  className="text-gray-400 text-sm hover:text-[#06b6d4] transition-colors text-left">

                  Respiratory Care
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3
              className="text-white font-bold text-sm uppercase tracking-wider mb-5"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif"
              }}>

              Contact
            </h3>
            <ul className="flex flex-col gap-4" role="list">
              <li className="flex items-start gap-3">
                <MapPinIcon
                  size={16}
                  className="text-[#06b6d4] mt-0.5 flex-shrink-0"
                  aria-hidden="true" />

                <span className="text-gray-400 text-sm">
                  KG 7 Ave, Kigali, Rwanda
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon
                  size={16}
                  className="text-[#06b6d4] flex-shrink-0"
                  aria-hidden="true" />

                <a
                  href="mailto:info@codiscan.rw"
                  className="text-gray-400 text-sm hover:text-[#06b6d4] transition-colors">

                  info@codiscan.rw
                </a>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon
                  size={16}
                  className="text-[#06b6d4] flex-shrink-0"
                  aria-hidden="true" />

                <a
                  href="tel:+250787104894"
                  className="text-gray-400 text-sm hover:text-[#06b6d4] transition-colors">

                  +250 787 104 894
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Codiscan. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Codiscan on Twitter"
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#06b6d4] hover:bg-white/10 transition-colors">

              <TwitterIcon size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Codiscan on LinkedIn"
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#06b6d4] hover:bg-white/10 transition-colors">

              <LinkedinIcon size={16} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Codiscan on Facebook"
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#06b6d4] hover:bg-white/10 transition-colors">

              <FacebookIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>);

}