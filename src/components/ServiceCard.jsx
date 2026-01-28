import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ServiceCard = ({ serviceKey, icon: Icon, featured = false }) => {
  const { t } = useLanguage();
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className={`group relative rounded-lg p-8 transition-all duration-500 cursor-pointer overflow-visible ${
        featured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Soft 3D LED edge glow (no rotation) */}
      <div className="pointer-events-none absolute -inset-[3px] rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        {/* Outer bloom (soft, wide) */}
        <div
          className="
            absolute inset-0 rounded-lg blur-2xl opacity-60
            bg-[radial-gradient(120%_140%_at_20%_10%,rgba(255,0,140,0.55)_0%,rgba(255,0,140,0)_55%),
               radial-gradient(120%_140%_at_80%_20%,rgba(255,230,0,0.45)_0%,rgba(255,230,0,0)_55%),
               radial-gradient(130%_150%_at_85%_85%,rgba(0,180,255,0.55)_0%,rgba(0,180,255,0)_60%),
               radial-gradient(120%_140%_at_15%_85%,rgba(0,255,160,0.45)_0%,rgba(0,255,160,0)_60%)]
          "
        />
        {/* Inner edge (tighter, sharper) */}
        <div
          className="
            absolute inset-0 rounded-lg blur-lg opacity-70
            bg-[linear-gradient(135deg,
              rgba(255,0,140,0.55),
              rgba(255,230,0,0.45),
              rgba(0,255,160,0.45),
              rgba(0,180,255,0.55),
              rgba(122,92,255,0.55),
              rgba(255,0,140,0.55))]
          "
        />
      </div>

      {/* Card surface (sits above glow, keeps interior clean) */}
      <div
        className={`
          absolute inset-0 rounded-lg bg-charcoal-800 border border-white/5
          transition-all duration-500
          group-hover:-translate-y-0.5 group-hover:shadow-2xl group-hover:shadow-black/40
        `}
      />

      {/* Subtle 3D rim highlight on hover (edge definition) */}
      <div className="pointer-events-none absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-lg ring-1 ring-white/15" />
        <div className="absolute inset-[1px] rounded-[7px] ring-1 ring-white/5" />
      </div>

      {/* Existing subtle sheen (optional, kept) */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />

      <div className="relative z-10">
        <div className="mb-6 inline-block p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-all duration-300">
          <Icon
            className={`w-12 h-12 text-white transition-all duration-300 ${
              isHovering ? 'transform scale-110' : ''
            }`}
            strokeWidth={1.5}
          />
        </div>

        <h3
          className={`font-serif mb-4 text-white transition-all duration-300 ${
            featured
              ? `text-3xl lg:text-4xl font-extrabold`
              : `text-2xl font-bold ${isHovering ? 'tracking-wider' : ''}`
          }`}
        >
          {t(`services.${serviceKey}.name`)}
        </h3>

        <p
          className={`mb-6 leading-relaxed transition-all duration-300 ${
            isHovering ? 'text-gray-200' : 'text-gray-400'
          }`}
        >
          {t(`services.${serviceKey}.summary`)}
        </p>

        <Link
          to={`/services/${serviceKey}`}
          className="inline-flex items-center space-x-2 text-white font-sans text-sm uppercase tracking-wider group-hover:translate-x-2 transition-all duration-300 hover:space-x-4"
        >
          <span className="relative">
            {t('services.viewDetails')}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
          </span>
          <ArrowRight
            className={`w-4 h-4 transition-transform duration-300 ${
              isHovering ? 'translate-x-1' : ''
            }`}
          />
        </Link>
      </div>

      {/* Keep shimmer if you want; remove if it competes with the LED glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer rounded-lg" />
      </div>
    </div>
  );
};

export default ServiceCard;
