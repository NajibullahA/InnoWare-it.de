import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import RevealOnScroll from '../components/RevealOnScroll';
import DynamicHeroBackground from '../components/DynamicHeroBackground';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      <DynamicHeroBackground variant="default" particles={true}>
        <section className="relative min-h-[60vh] flex items-center justify-center">
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <RevealOnScroll>
              <Link
                to="/"
                className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8 text-sm uppercase tracking-wider group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>{t('nav.solutions')}</span>
              </Link>

              <div className="flex items-center justify-center mb-6 space-x-2">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/30" />
                <Sparkles className="w-5 h-5 text-white/60" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/30" />
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {t(`services.${serviceId}.hero`)}
              </h1>

              <p className="text-xl text-gray-300 font-light leading-relaxed">
                {t(`services.${serviceId}.description`)}
              </p>
            </RevealOnScroll>
          </div>
        </section>
      </DynamicHeroBackground>

      <div className="h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <section className="relative py-24 bg-charcoal-900 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative">
          <RevealOnScroll>
            <div className="inline-flex items-center justify-center space-x-2 mb-8 w-full">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20" />
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
                Features & Capabilities
              </h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20" />
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {t(`services.${serviceId}.features`).map((feature, index) => (
              <RevealOnScroll key={index} delay={index * 50}>
                <div className="group flex items-start space-x-4 p-6 bg-charcoal-800 rounded-lg border border-white/5 hover:border-white/30 transition-all hover:bg-charcoal-700 hover:transform hover:translate-y-[-4px]">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mt-1 group-hover:bg-white/20 transition-all">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">{feature}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <section className="relative py-24 bg-charcoal-800 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <RevealOnScroll>
            <div className="inline-flex items-center justify-center space-x-2 mb-8">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-white/30" />
              <Sparkles className="w-5 h-5 text-white/60" />
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-white/30" />
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-8">
              {t(`services.${serviceId}.process`)}
            </h2>

            <div className="bg-charcoal-900 rounded-lg p-12 border border-white/10 hover:border-white/20 transition-all hover:shadow-lg hover:shadow-white/5">
              <p className="text-gray-400 text-lg">
                Detailed process infographics coming soon...
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <section className="relative py-24 bg-charcoal-900 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <RevealOnScroll>
            <div className="inline-flex items-center justify-center space-x-2 mb-6">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-white/30" />
              <Sparkles className="w-5 h-5 text-white/60" />
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-white/30" />
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              {t('contact.description')}
            </p>
            <button className="relative px-10 py-4 bg-white text-charcoal-900 font-sans font-semibold text-sm uppercase tracking-wider rounded group overflow-hidden hover:shadow-2xl transition-all hover:transform hover:scale-105">
              <span className="relative z-10">{t('contact.cta')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
            </button>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
