import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Impressum = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">
        {t('impressum.title')}
      </h1>

      <div className="space-y-4 text-gray-700">
        <p>{t('impressum.company')}</p>
        <p>{t('impressum.address')}</p>
        <p>{t('impressum.contact')}</p>
        <p>{t('impressum.vat')}</p>
      </div>
    </div>
  );
};

export default Impressum;
