import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Datenschutz = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-serif font-bold mb-8">
        {t('privacy.title')}
      </h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>{t('privacy.intro')}</p>
        <p>{t('privacy.hosting')}</p>
        <p>{t('privacy.data')}</p>
        <p>{t('privacy.contact')}</p>
      </div>
    </div>
  );
};

export default Datenschutz;
