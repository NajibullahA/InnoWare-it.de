import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { key: 'solutions', id: 'solutions' },
    { key: 'creative', id: 'creative' },
    { key: 'infrastructure', id: 'infrastructure' },
    { key: 'about', id: 'about' },
    { key: 'contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-charcoal-900/95 backdrop-blur-md shadow-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollTo('top')}
            className="text-2xl font-serif font-bold text-white"
          >
            AGENCY
          </button>

          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollTo(item.id)}
                className="px-3 py-2 text-sm text-gray-300 uppercase tracking-wider hover:text-white transition"
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}

            <button
              onClick={toggleLanguage}
              className="ml-6 px-4 py-2 text-sm text-white border border-white/30 rounded"
            >
              {language === 'de' ? 'EN' : 'DE'}
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-charcoal-900 border-t border-white/10">
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left text-gray-300 hover:text-white uppercase tracking-wider"
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
            <button
              onClick={() => {
                toggleLanguage();
                setMobileMenuOpen(false);
              }}
              className="w-full mt-4 px-4 py-2 text-white border border-white/30 rounded"
            >
              {language === 'de' ? 'EN' : 'DE'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
