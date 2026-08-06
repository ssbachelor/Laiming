import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/content';
import { PageView } from '../types';
import { ShieldCheck, TrendingUp, Layers, Compass, HeartHandshake, Check, ArrowRight, ChevronRight } from 'lucide-react';
import { GsapReveal, GsapStagger } from './GsapReveal';

interface ServicesSectionProps {
  onOpenConsultationWithService?: (serviceTitle: string) => void;
  onNavigate?: (view: PageView) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#B08D57]" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-[#B08D57]" />,
  Layers: <Layers className="w-6 h-6 text-[#B08D57]" />,
  Compass: <Compass className="w-6 h-6 text-[#B08D57]" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#B08D57]" />,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenConsultationWithService,
  onNavigate,
}) => {
  const [activeServiceId, setActiveServiceId] = useState<string>('liability-insurance');

  const primaryServices = SERVICES_LIST.filter((s) => s.category === 'primary');
  const supportingServices = SERVICES_LIST.filter((s) => s.category === 'supporting');

  return (
    <section className="py-24 px-6 md:px-12 bg-[#F5F0E6] text-[#0A0A0A] relative" id="services">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <GsapReveal effect="fade-up" className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#0A0A0A]/10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#B08D57]" />
              <span className="text-[10px] uppercase tracking-widest-plus font-mono text-[#B08D57] font-bold">
                Core Competencies & Capabilities
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#0A0A0A]">
              Services & Practice Areas
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#0A0A0A]/70 font-light max-w-md leading-relaxed">
            Lead with deep capability in liability navigation and financing, backed by comprehensive operational & leadership counsel.
          </p>
        </GsapReveal>

        {/* Two Primary Pillars Highlight Cards */}
        <div className="mb-20">
          <GsapReveal effect="fade-in" className="flex items-center justify-between mb-6">
            <span className="text-[10px] font-mono uppercase tracking-widest-plus text-[#B08D57] font-semibold">
              Primary Service Pillars (Core Focus)
            </span>
            <span className="text-xs text-[#0A0A0A]/50 font-mono">01 — 02</span>
          </GsapReveal>

          <GsapStagger effect="scale-up" stagger={0.15} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {primaryServices.map((service) => {
              const isSelected = service.id === activeServiceId;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`cursor-pointer transition-all duration-300 p-8 border rounded-[4px] ${
                    isSelected
                      ? 'bg-[#0A0A0A] text-[#F5F0E6] border-[#0A0A0A] shadow-xl'
                      : 'bg-[#EFE9DD] text-[#0A0A0A] border-[#0A0A0A]/10 hover:border-[#B08D57]'
                  }`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-white/5 border border-[#B08D57]/30 rounded-[4px]">
                      {iconMap[service.iconName]}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest-plus text-[#B08D57]">
                      {service.category === 'primary' ? 'PRIMARY PILLAR' : 'SUPPORTING'}
                    </span>
                  </div>

                  <h3 className={`font-serif text-2xl md:text-3xl font-normal mb-3 ${isSelected ? 'text-[#F5F0E6]' : 'text-[#0A0A0A]'}`}>
                    {service.title}
                  </h3>

                  <p className={`text-sm mb-6 font-light leading-relaxed ${isSelected ? 'text-[#F5F0E6]/80' : 'text-[#0A0A0A]/70'}`}>
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-light">
                        <Check className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                        <span className={isSelected ? 'text-[#F5F0E6]/90' : 'text-[#0A0A0A]/80'}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onOpenConsultationWithService) {
                        onOpenConsultationWithService(service.title);
                      }
                    }}
                    className={`w-full py-4 px-5 text-[10px] uppercase tracking-widest-plus font-bold flex items-center justify-between border rounded-[4px] transition-all ${
                      isSelected
                        ? 'bg-[#B08D57] text-[#0A0A0A] border-[#B08D57] hover:bg-[#C6A46A]'
                        : 'bg-[#0A0A0A] text-[#F5F0E6] border-[#0A0A0A] hover:border-[#B08D57]'
                    }`}
                  >
                    <span>Engage {service.title} Counsel</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </GsapStagger>
        </div>

        {/* Supporting Service Pillars */}
        <div>
          <GsapReveal effect="fade-in" className="flex items-center justify-between mb-6">
            <span className="text-[10px] font-mono uppercase tracking-widest-plus text-[#B08D57] font-semibold">
              Supporting Practice Pillars
            </span>
            <span className="text-xs text-[#0A0A0A]/50 font-mono">03 — 05</span>
          </GsapReveal>

          <GsapStagger effect="fade-up" stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportingServices.map((service) => {
              const isSelected = service.id === activeServiceId;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`cursor-pointer transition-all duration-300 p-6 border rounded-[4px] flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#0A0A0A] text-[#F5F0E6] border-[#0A0A0A]'
                      : 'bg-[#EFE9DD] text-[#0A0A0A] border-[#0A0A0A]/10 hover:border-[#B08D57]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 bg-white/5 border border-[#B08D57]/30 rounded-[4px]">
                        {iconMap[service.iconName]}
                      </div>
                      <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-[#B08D57]' : 'text-[#0A0A0A]/30'}`} />
                    </div>

                    <h4 className={`font-serif text-xl font-normal mb-2 ${isSelected ? 'text-[#F5F0E6]' : 'text-[#0A0A0A]'}`}>
                      {service.title}
                    </h4>

                    <p className={`text-xs font-light leading-relaxed mb-4 ${isSelected ? 'text-[#F5F0E6]/75' : 'text-[#0A0A0A]/70'}`}>
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs font-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B08D57] shrink-0 mt-1.5" />
                          <span className={isSelected ? 'text-[#F5F0E6]/80' : 'text-[#0A0A0A]/80'}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onOpenConsultationWithService) {
                        onOpenConsultationWithService(service.title);
                      }
                    }}
                    className={`mt-4 py-3 px-4 text-[10px] uppercase tracking-widest-plus font-medium flex items-center justify-between border rounded-[4px] transition-all ${
                      isSelected
                        ? 'border-[#B08D57] text-[#B08D57] hover:bg-[#B08D57] hover:text-[#0A0A0A]'
                        : 'border-[#0A0A0A]/20 text-[#0A0A0A] hover:border-[#0A0A0A]'
                    }`}
                  >
                    <span>Request Counsel</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </GsapStagger>
        </div>

      </div>
    </section>
  );
};
