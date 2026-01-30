import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gallery-50 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

          {/* Company name */}
          <div className="text-2xl font-serif font-bold text-black">
            InnoWare IT Services
          </div>

          {/* Footer links */}
          <div className="flex space-x-6 text-sm text-gray-500">
            <Link
              to="/impressum"
              className="hover:text-black transition-colors"
            >
              {t('footer.impressum')}
            </Link>

            <Link
              to="/privacy"
              className="hover:text-black transition-colors"
            >
              {t('footer.privacy')}
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} InnoWare IT Services. {t('footer.rights')}.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
