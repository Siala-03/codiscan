import React, { useMemo } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { AboutPage } from './pages/AboutPage';
import { RentingProcessPage } from './pages/RentingProcessPage';
import { ContactPage } from './pages/ContactPage';

export type Page = 'home' | 'catalog' | 'about' | 'renting' | 'contact';

const pageToPath: Record<Page, string> = {
  home: '/',
  catalog: '/catalog',
  about: '/about',
  renting: '/renting',
  contact: '/contact'
};

const pathToPage: Record<string, Page> = {
  '/': 'home',
  '/catalog': 'catalog',
  '/about': 'about',
  '/renting': 'renting',
  '/contact': 'contact'
};

const metadata: Record<Page, { title: string; description: string }> = {
  home: {
    title: 'Kodiscan - Medical Equipment Rental & Leasing in Rwanda',
    description: 'Rent or lease certified medical equipment including X-Ray, CT Scan, MRI, and more from Kodiscan in Rwanda.'
  },
  catalog: {
    title: 'Kodiscan Equipment Catalog - Rent X-Ray, CT, MRI',
    description: 'Explore the Kodiscan medical equipment catalog and rent top diagnostic systems on flexible terms in Rwanda.'
  },
  about: {
    title: 'About Kodiscan - Rwanda Medical Equipment Leasing',
    description: 'Learn about Kodiscan, our mission to make medical diagnostics accessible, and our impact across Rwandan healthcare facilities.'
  },
  renting: {
    title: 'Kodiscan Renting Process - How to Rent Medical Equipment',
    description: 'Step-by-step renting process at Kodiscan for hospitals and clinics to access modern diagnostic equipment affordably.'
  },
  contact: {
    title: 'Contact Kodiscan - Request Medical Equipment Demo',
    description: 'Get in touch with Kodiscan for equipment leasing, rentals, and support across Rwanda.'
  }
};

function AppRoutes() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPage: Page = useMemo(() => pathToPage[location.pathname] ?? 'home', [location.pathname]);

  const pageMeta = metadata[currentPage];

  const go = (page: Page) => {
    navigate(pageToPath[page]);
  };

  return (
    <>
      <SEO
        title={pageMeta.title}
        description={pageMeta.description}
        canonical={`https://kodiscan.com${pageToPath[currentPage]}`}
        url={`https://kodiscan.com${pageToPath[currentPage]}`}
        image="https://kodiscan.com/src/assets/logo.png"
      />
      <div className="w-full min-h-screen bg-white">
        <Navbar currentPage={currentPage} navigate={go} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage navigate={go} />} />
            <Route path="/catalog" element={<CatalogPage navigate={go} />} />
            <Route path="/about" element={<AboutPage navigate={go} />} />
            <Route path="/renting" element={<RentingProcessPage navigate={go} />} />
            <Route path="/contact" element={<ContactPage navigate={go} />} />
            <Route path="*" element={<HomePage navigate={go} />} />
          </Routes>
        </main>
        <Footer navigate={go} />
      </div>
    </>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
