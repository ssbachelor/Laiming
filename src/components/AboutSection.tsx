import React from 'react';
import { MISSION_STATEMENT, COMPANY_OVERVIEW, CORE_VALUES, TESTIMONIALS } from '../data/content';
import { Shield, Compass, Quote } from 'lucide-react';
import { GsapReveal, GsapStagger } from './GsapReveal';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#F5F0E6] text-[#0A0A0A] relative" id="about-firm">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <GsapReveal effect="fade-up" className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#B08D57]" />
            <span className="text-[10px] uppercase tracking-widest-plus font-mono text-[#B08D57] font-bold">
              Firm Story & Faith Foundation
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#0A0A0A]">
            Built on Integrity, Stewardship, Diligence & Service
          </h2>
        </GsapReveal>

        {/* Company Overview & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          <GsapReveal effect="slide-left" className="lg:col-span-7 space-y-6 text-sm sm:text-base text-[#0A0A0A]/85 font-light leading-relaxed">
            <h3 className="font-serif text-2xl font-normal text-[#0A0A0A]">
              Company Overview
            </h3>
            <p className="bg-[#EFE9DD] p-6 border-l-2 border-[#B08D57] rounded-[2px]">
              {COMPANY_OVERVIEW}
            </p>
            <p>
              Christian enterprise leaders face a unique dual responsibility: operating with commercial sharpness while upholding uncompromising ethical standards. When navigating complex commercial debt restructuring, multi-million dollar general liability coverage exclusions, or operational scaling hurdles, generic secular advice often overlooks values alignment, while traditional consultants lack execution depth.
            </p>
            <p>
              Laiming Strategies was formed to bridge this gap. We act as embedded partners, standing in the gap to protect assets, secure sound capital, and establish operational systems that honor your vision.
            </p>
          </GsapReveal>

          <GsapReveal effect="slide-right" className="lg:col-span-5 bg-[#0A0A0A] text-[#F5F0E6] p-8 md:p-10 border border-[#0A0A0A] flex flex-col justify-between shadow-xl rounded-[4px]">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest-plus text-[#B08D57] font-bold mb-4">
                <Compass className="w-4 h-4" />
                <span>Our Sole Mission</span>
              </div>

              <blockquote className="font-serif text-2xl sm:text-3xl font-light leading-snug text-[#F5F0E6] mb-6">
                "{MISSION_STATEMENT}"
              </blockquote>
            </div>

            <div className="pt-6 border-t border-[#F5F0E6]/10 flex items-center gap-4 text-xs font-mono text-[#F5F0E6]/60">
              <Shield className="w-4 h-4 text-[#B08D57]" />
              <span>Quiet confidence — counsel for high-stakes decisions.</span>
            </div>
          </GsapReveal>

        </div>

        {/* Core Values Section */}
        <div className="mb-24">
          <GsapReveal effect="fade-in" className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest-plus text-[#B08D57] font-semibold block mb-1">
                Ethical Pillars
              </span>
              <h3 className="font-serif text-3xl font-normal text-[#0A0A0A]">
                Our Four Core Values
              </h3>
            </div>
            <span className="text-xs font-mono text-[#0A0A0A]/40">Values Matrix</span>
          </GsapReveal>

          <GsapStagger effect="scale-up" stagger={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <div
                key={val.name}
                className="p-6 bg-[#EFE9DD] border border-[#0A0A0A]/10 flex flex-col justify-between hover:border-[#B08D57] transition-all rounded-[4px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#B08D57] font-bold">0{idx + 1}</span>
                    <span className="text-xs font-serif italic text-[#0A0A0A]/60">{val.name}</span>
                  </div>

                  <h4 className="font-serif text-2xl font-normal text-[#0A0A0A] mb-3">
                    {val.name}
                  </h4>

                  <p className="text-xs text-[#0A0A0A]/80 font-light leading-relaxed mb-4">
                    {val.definition}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#0A0A0A]/10">
                  <span className="text-[10px] font-mono uppercase text-[#B08D57] block mb-1">
                    Practice Application:
                  </span>
                  <p className="text-xs text-[#0A0A0A]/70 font-light">
                    {val.application}
                  </p>
                </div>
              </div>
            ))}
          </GsapStagger>
        </div>

        {/* Testimonials / Social Proof Section */}
        <GsapReveal effect="fade-up" className="p-8 md:p-12 bg-[#0A0A0A] text-[#F5F0E6] border border-[#0A0A0A] rounded-[4px]">
          <div className="flex items-center gap-3 mb-8">
            <Quote className="w-6 h-6 text-[#B08D57]" />
            <span className="text-[10px] uppercase tracking-widest-plus font-mono text-[#B08D57] font-bold">
              Client Perspectives & Experience
            </span>
          </div>

          <GsapStagger effect="fade-up" stagger={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((test, idx) => (
              <div key={idx} className="p-6 bg-[#141414] border border-[#F5F0E6]/10 flex flex-col justify-between rounded-[4px]">
                <p className="text-xs sm:text-sm text-[#F5F0E6]/80 font-light italic leading-relaxed mb-6">
                  "{test.quote}"
                </p>

                <div className="pt-4 border-t border-[#F5F0E6]/10">
                  <div className="font-serif text-base font-semibold text-[#F5F0E6]">
                    {test.author}
                  </div>
                  <div className="text-xs text-[#B08D57] font-mono">
                    {test.role}, {test.company}
                  </div>
                </div>
              </div>
            ))}
          </GsapStagger>
        </GsapReveal>

      </div>
    </section>
  );
};
