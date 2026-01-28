import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import RevealOnScroll from '../components/RevealOnScroll';
import ServiceCard from '../components/ServiceCard';
import DynamicHeroBackground from '../components/DynamicHeroBackground';
import {
  Cloud,
  Code,
  Brain,
  LineChart,
  Megaphone,
  Palette,
  Camera,
  Server,
  Sparkles,
} from 'lucide-react';

const Home = () => {
  const { t } = useLanguage();

  const services = {
    solutions: [
      { key: 'saas', icon: Cloud, featured: true },
      { key: 'webdev', icon: Code, featured: true },
      { key: 'ai', icon: Brain, featured: false },
      { key: 'consulting', icon: LineChart, featured: false },
    ],
    creative: [
      { key: 'marketing', icon: Megaphone, featured: true },
      { key: 'design', icon: Palette, featured: false },
    ],
    infrastructure: [
      { key: 'storytelling', icon: Camera, featured: false },
      { key: 'infrastructure', icon: Server, featured: false },
    ],
  };

  return (
    <div>
      <DynamicHeroBackground variant="default" particles={true}>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <RevealOnScroll>
              <div className="flex items-center justify-center mb-6 space-x-2">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/30" />
                <Sparkles className="w-5 h-5 text-white/60" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/30" />
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-down">
                {t('hero.headline')}
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light leading-relaxed">
                {t('hero.subheadline')}
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={400}>
              <a
                href="#contact"
                className="inline-block px-10 py-4 bg-white text-charcoal-900 font-sans font-semibold text-sm uppercase tracking-wider rounded group relative overflow-hidden hover:shadow-2xl transition-all hover:transform hover:scale-105"
              >
                <span className="relative z-10">{t('hero.cta')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
              </a>
            </RevealOnScroll>
          </div>

          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white/50 rounded-full" />
            </div>
          </div>
        </section>
      </DynamicHeroBackground>

      <div className="h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <section id="solutions" className="relative py-32 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <RevealOnScroll>
            <div className="text-center mb-20">
              <div className="inline-flex items-center justify-center space-x-2 mb-4">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-white/30" />
                <span className="text-sm font-sans text-black uppercase tracking-wider">{t('nav.solutions')}</span>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-white/30" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-4">
                {t('nav.solutions')}
              </h2>
              <p className="text-xl text-gray-400 font-light">
                {t('services.subtitle')}
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.solutions.map((service, index) => (
              <RevealOnScroll key={service.key} delay={index * 100}>
                <ServiceCard
                  serviceKey={service.key}
                  icon={service.icon}
                  featured={service.featured}
                />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <section id="creative" className="relative py-32 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <RevealOnScroll>
            <div className="text-center mb-20">
              <div className="inline-flex items-center justify-center space-x-2 mb-4">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-white/30" />
                <span className="text-sm font-sans text-black uppercase tracking-wider">{t('nav.creative')}</span>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-white/30" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-4">
                {t('nav.creative')}
              </h2>
              <p className="text-xl text-gray-400 font-light">
                {t('services.subtitle')}
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.creative.map((service, index) => (
              <RevealOnScroll key={service.key} delay={index * 100}>
                <ServiceCard
                  serviceKey={service.key}
                  icon={service.icon}
                  featured={service.featured}
                />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <section id="infrastructure" className="relative py-32 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-0 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <RevealOnScroll>
            <div className="text-center mb-20">
              <div className="inline-flex items-center justify-center space-x-2 mb-4">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-white/30" />
                <span className="text-sm font-sans text-black/60 uppercase tracking-wider">{t('nav.infrastructure')}</span>
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-white/30" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-4">
                {t('nav.infrastructure')}
              </h2>
              <p className="text-xl text-gray-400 font-light">
                {t('services.subtitle')}
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.infrastructure.map((service, index) => (
              <RevealOnScroll key={service.key} delay={index * 100}>
                <ServiceCard
                  serviceKey={service.key}
                  icon={service.icon}
                  featured={service.featured}
                />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <section id="about" className="relative py-32 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <RevealOnScroll>
            <div className="inline-flex items-center justify-center space-x-2 mb-6">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-white/30" />
              <Sparkles className="w-5 h-5 text-black/60" />
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-white/30" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-6">
              {t('about.title')}
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t('about.description')}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <section id="contact" className="relative py-32 bg-charcoal-900 overflow-hidden">
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
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
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

export default Home;
