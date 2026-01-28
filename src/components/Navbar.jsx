import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'solutions', path: '/#solutions' },
    { key: 'creative', path: '/#creative' },
    { key: 'infrastructure', path: '/#infrastructure' },
    { key: 'about', path: '/#about' },
    { key: 'contact', path: '/#contact' },
  ];

  const handleNavClick = (key) => {
    setActiveNav(key);
    setTimeout(() => setActiveNav(null), 600);
  };

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
          <Link
            to="/"
            className="relative text-2xl font-serif font-bold text-white tracking-tight group"
          >
            <span className="relative inline-block transition-all duration-300 group-hover:tracking-widest">
              AGENCY
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-transparent group-hover:w-full transition-all duration-500" />
          </Link>

          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <a
                key={item.key}
                href={item.path}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                onClick={() => handleNavClick(item.key)}
                className="relative px-3 py-2 text-sm font-sans text-gray-300 uppercase tracking-wider group"
              >
                <span
                  className={`relative inline-block transition-all duration-300 ${
                    hoverIndex === index ? 'text-white' : ''
                  } ${activeNav === item.key ? 'text-white' : ''}`}
                >
                  {t(`nav.${item.key}`)}
                </span>
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white via-white to-transparent transition-all duration-500 ${
                    hoverIndex === index ? 'w-full' : ''
                  } ${activeNav === item.key ? 'w-full' : ''}`}
                />
                {hoverIndex === index && (
                  <span className="absolute -inset-2 bg-white/5 rounded-lg -z-10 animate-pulse" />
                )}
              </a>
            ))}

            <button
              onClick={toggleLanguage}
              className="ml-6 relative px-4 py-2 text-sm font-sans font-medium text-white uppercase tracking-wider overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center">
                {language === 'de' ? 'EN' : 'DE'}
              </span>
              <div className="absolute inset-0 border border-white/5 rounded transition-all duration-300 group-hover:border-white/5 group-hover:shadow-lg group-hover:shadow-white/5" />
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-300 rounded" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 animate-shimmer" />
              </div>
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 relative group"
          >
            <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-charcoal-900 border-t border-white/10 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="px-6 py-6 space-y-3">
            {navItems.map((item, index) => (
              <a
                key={item.key}
                href={item.path}
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick(item.key);
                }}
                className="block px-4 py-3 text-sm font-sans text-gray-300 hover:text-white uppercase tracking-wider rounded-lg hover:bg-white/5 transition-all duration-300 relative group overflow-hidden"
              >
                <span className="relative z-10">{t(`nav.${item.key}`)}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ))}
            <button
              onClick={() => {
                toggleLanguage();
                setMobileMenuOpen(false);
              }}
              className="w-full px-4 py-3 text-sm font-sans font-medium text-white uppercase tracking-wider rounded-lg border border-white/30 hover:border-white/60 hover:bg-white/5 transition-all duration-300"
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
