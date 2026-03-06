import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { AboutPage } from './pages/AboutPage';
import { RentingProcessPage } from './pages/RentingProcessPage';
import { ContactPage } from './pages/ContactPage';
export type Page = 'home' | 'catalog' | 'about' | 'renting' | 'contact';
export function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, [currentPage]);
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar currentPage={currentPage} navigate={navigate} />
      <main>
        {currentPage === 'home' && <HomePage navigate={navigate} />}
        {currentPage === 'catalog' && <CatalogPage navigate={navigate} />}
        {currentPage === 'about' && <AboutPage navigate={navigate} />}
        {currentPage === 'renting' &&
        <RentingProcessPage navigate={navigate} />
        }
        {currentPage === 'contact' && <ContactPage navigate={navigate} />}
      </main>
      <Footer navigate={navigate} />
    </div>);

}