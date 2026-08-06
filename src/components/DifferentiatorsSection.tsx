import React, { useState } from 'react';
import { DIFFERENTIATORS, CLIENT_PROFILE_ITEMS } from '../data/content';
import { ShieldCheck, Crosshair, Scale, Heart, Users, CheckCircle } from 'lucide-react';
import { GsapReveal, GsapStagger } from './GsapReveal';

export const DifferentiatorsSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0);

  const icons = [
    <ShieldCheck key="1" className="w-5 h-5 text-[#B08D57]" />,
    <Crosshair key="2" className="w-5 h-5 text-[#B08D57]" />,
    <Scale key="3" className="w-5 h-5 text-[#B08D57]" />,
    <Heart key="4" className="w-5 h-5 text-[#B08D57]" />,
    <Users key="5" className="w-5 h-5 text-[#B08D57]" />,
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#0A0A0A] text-[#F5F0E6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Eyebrow & Headline */}
        <GsapReveal effect="fade-up" className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#B08D57]" />
            <span className="text-[10px] uppercase tracking-widest-plus font-mono text-[#B08D57] font-semibold">
              The Advisory Advantage
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight text-[#F5F0E6]">
            Why Christian Founders & Executive Teams Choose Laiming Strategies
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#F5F0E6]/70 font-light leading-relaxed">
            Unlike traditional consulting firms that deliver theoretical binder reports or single-product underwriters, we provide integrated advisory and execution tailored specifically for faith-led enterprises.
          </p>
        </GsapReveal>

        {/* 5 Differentiators Grid */}
        <GsapStagger effect="scale-up" stagger={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {DIFFERENTIATORS.map((diff, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                className={`transition-all duration-300 p-8 border rounded-[4px] ${
                  isHovered
                    ? 'bg-[#141414] border-[#B08D57] shadow-2xl translate-y-[-2px]'
                    : 'bg-[#0E0E0E] border-[#F5F0E6]/10 hover:border-[#F5F0E6]/30'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-[#1A1A1A] border border-[#B08D57]/30 rounded-[4px]">
                    {icons[idx]}
                  </div>
                  <span className="text-xs font-mono text-[#B08D57] font-bold">0{idx + 1}</span>
                </div>

                <h3 className="font-serif text-xl font-normal text-[#F5F0E6] mb-3">
                  {diff.title}
                </h3>

                <p className="text-xs text-[#F5F0E6]/70 font-light leading-relaxed">
                  {diff.description}
                </p>
              </div>
            );
          })}

          {/* Special summary card */}
          <div className="p-8 bg-[#B08D57]/10 border border-[#B08D57]/40 flex flex-col justify-between rounded-[4px]">
            <div>
              <span className="text-[10px] uppercase tracking-widest-plus font-mono text-[#B08D57] font-semibold block mb-2">
                Core Promise
              </span>
              <h4 className="font-serif text-2xl text-[#F5F0E6] font-normal mb-3">
                Counsel You Trust, Execution You Rely On.
              </h4>
              <p className="text-xs text-[#F5F0E6]/80 font-light leading-relaxed">
                We bridge the gap between financial stewardship, legal exposure protection, and operational execution under one roof.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#B08D57]/30 text-xs font-mono text-[#B08D57]">
              Embedded Partner Model
            </div>
          </div>
        </GsapStagger>

        {/* Typical Client Profile Box */}
        <GsapReveal effect="fade-up" className="p-8 md:p-12 bg-[#141414] border border-[#F5F0E6]/10 relative rounded-[4px]">
          <div className="max-w-2xl mb-8">
            <span className="text-[10px] uppercase tracking-widest-plus font-mono text-[#B08D57] font-semibold block mb-2">
              Organizational Alignment
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F0E6] font-normal">
              Typical Client Profile
            </h3>
            <p className="text-xs sm:text-sm text-[#F5F0E6]/70 font-light mt-2">
              Our engagements are structured for Christian-owned or Christian-led small to mid-sized businesses with $2M to $50M in revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CLIENT_PROFILE_ITEMS.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-[#0A0A0A] border border-[#F5F0E6]/10 rounded-[4px]">
                <CheckCircle className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#F5F0E6]/90 font-light leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </GsapReveal>

      </div>
    </section>
  );
};
