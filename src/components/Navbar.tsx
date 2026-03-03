import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { type Page } from '../App';
interface NavbarProps {
  currentPage: Page;
  navigate: (page: Page) => void;
}
const navLinks: {
  label: string;
  page: Page;
}[] = [
{
  label: 'Home',
  page: 'home'
},
{
  label: 'About Us',
  page: 'about'
},
{
  label: 'Equipment Catalog',
  page: 'catalog'
},
{
  label: 'Leasing Process',
  page: 'leasing'
}];

export function Navbar({ currentPage, navigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Close mobile menu on page change
  useEffect(() => {
    setMobileOpen(false);
  }, [currentPage]);
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white"
      animate={{
        boxShadow: scrolled ?
        '0 4px 24px rgba(13, 27, 42, 0.12)' :
        '0 0px 0px rgba(0,0,0,0)'
      }}
      transition={{
        duration: 0.3
      }}>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => navigate('home')}
          className="flex items-center gap-2.5 flex-shrink-0"
          aria-label="Codiscan home">

          {/* logo image - place logo.png in public/assets and it will be served at /assets/logo.png */}
          <img
            src="/assets/logo.png"
            alt="Codiscan"
            className="w-32 h-32 rounded-lg" />

        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) =>
          <li key={link.label}>
              <button
              onClick={() => navigate(link.page)}
              className={`text-sm font-medium transition-colors duration-200 pb-0.5 ${currentPage === link.page ? 'text-[#2563eb] border-b-2 border-[#2563eb]' : 'text-gray-600 hover:text-[#0d1b2a]'}`}>

                {link.label}
              </button>
            </li>
          )}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => navigate('contact')}
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#2563eb] text-white text-sm font-semibold hover:bg-blue-700 transition-colors duration-200">

            Request Demo
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-600 hover:text-[#0d1b2a] hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}>

          {mobileOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          transition={{
            duration: 0.25
          }}
          className="md:hidden bg-white border-t border-gray-100 overflow-hidden">

            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) =>
            <button
              key={link.label}
              onClick={() => navigate(link.page)}
              className={`text-left font-medium py-2 transition-colors ${currentPage === link.page ? 'text-[#2563eb]' : 'text-gray-700 hover:text-[#2563eb]'}`}>

                  {link.label}
                </button>
            )}
              <button
              onClick={() => navigate('contact')}
              className="mt-2 inline-flex justify-center items-center px-5 py-2.5 rounded-full bg-[#2563eb] text-white text-sm font-semibold">

                Request Demo
              </button>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.header>);

}