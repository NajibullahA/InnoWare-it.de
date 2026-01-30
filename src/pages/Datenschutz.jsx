import React from 'react';
import { useLanguage } from 'react-i18next';

const Datenschutz = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">
        {t('privacy.title')}
      </h1>

      <div className="space-y-4 text-gray-700">
        <p>{t('privacy.intro')}</p>
        <p>{t('privacy.hosting')}</p>
        <p>{t('privacy.contact')}</p>
      </div>
    </div>
  );
};

export default Datenschutz;
