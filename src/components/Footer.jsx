import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gallery-50 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-2xl font-serif font-bold text-black">
            AGENCY
          </div>

          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} AGENCY. {t('footer.rights')}.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
