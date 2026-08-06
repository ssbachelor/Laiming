import React from 'react';
import { motion } from 'motion/react';
import { BRAND_INFO } from '../data/content';
import { ArrowUpRight, Shield, Award, CheckCircle2 } from 'lucide-react';
import { PageView } from '../types';
import { HeroScene } from './HeroScene';
import { GsapStagger } from './GsapReveal';

interface HeroProps {
  onOpenConsultation: () => void;
  onNavigate: (view: PageView) => void;
  onOpenAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onNavigate,
  onOpenAudit,
}) => {
  return (
    <section className="relative min-h-[92vh] pt-36 pb-20 px-6 md:px-12 flex flex-col justify-between overflow-hidden bg-[#F5F0E6]">
      {/* 3D WebGL Background Scene */}
      <HeroScene />

      {/* Radial Soft Overlay to ensure text legibility */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(245,240,230,0.85)_0%,rgba(245,240,230,0.5)_60%,rgba(245,240,230,0.2)_100%)]" />

      {/* Decorative Subtle Background Accents */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#B08D57]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-[#0A0A0A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col justify-center flex-1">
        


        {/* Main Kinetic Headline with Italic emphasis */}
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-normal leading-tight-plus tracking-tight text-[#0A0A0A]"
          >
            Equipping <span className="italic">Principled</span> Companies.
          </motion.h1>
        </div>

        {/* Positioning Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-2xl border-l-2 border-[#B08D57] pl-6 py-1"
        >
          <p className="text-base sm:text-lg text-[#0A0A0A]/80 font-light leading-relaxed">
            {BRAND_INFO.positioning}
          </p>
        </motion.div>

        {/* Primary CTA Buttons with Gold Dot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
        >
          <button
            onClick={onOpenConsultation}
            className="group px-8 py-5 bg-[#0A0A0A] text-[#F5F0E6] text-[10px] uppercase tracking-widest-plus font-bold flex items-center gap-4 rounded-[4px] hover:bg-zinc-800 transition-all duration-500 shadow-md"
            id="hero-schedule-btn"
          >
            <span>Schedule a Consultation</span>
            <div className="w-2 h-2 rounded-full bg-[#B08D57] group-hover:scale-125 transition-transform" />
          </button>

          <button
            onClick={onOpenAudit}
            className="group px-7 py-4 bg-transparent text-[#0A0A0A] text-xs uppercase tracking-widest-plus font-medium flex items-center gap-3 border border-[#0A0A0A]/20 hover:border-[#0A0A0A] transition-all duration-300 bg-[#F5F0E6]/80 hover:bg-[#EFE9DD] rounded-[4px]"
            id="hero-audit-btn"
          >
            <Shield className="w-4 h-4 text-[#B08D57]" />
            <span>Exposure & Capital Audit Tool</span>
          </button>
        </motion.div>

        {/* Feature Highlights Grid */}
        <GsapStagger
          effect="fade-up"
          stagger={0.12}
          className="mt-16 pt-8 border-t border-[#0A0A0A]/15 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-widest-plus font-mono text-[#B08D57]">Pillar 01</span>
            <span className="font-serif text-xl font-semibold text-[#0A0A0A]">Liability Navigation</span>
            <span className="text-xs text-[#0A0A0A]/60 font-light">Exposure review & mitigation</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-widest-plus font-mono text-[#B08D57]">Pillar 02</span>
            <span className="font-serif text-xl font-semibold text-[#0A0A0A]">Financing & Capital</span>
            <span className="text-xs text-[#0A0A0A]/60 font-light">Values-aligned capital structures</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-widest-plus font-mono text-[#B08D57]">Methodology</span>
            <span className="font-serif text-xl font-semibold text-[#0A0A0A]">Advisory + Execution</span>
            <span className="text-xs text-[#0A0A0A]/60 font-light">Embedded partner implementation</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-widest-plus font-mono text-[#B08D57]">Standard</span>
            <span className="font-serif text-xl font-semibold text-[#0A0A0A]">Faith-Grounded</span>
            <span className="text-xs text-[#0A0A0A]/60 font-light">Honesty, stewardship & service</span>
          </div>
        </GsapStagger>

      </div>
    </section>
  );
};
