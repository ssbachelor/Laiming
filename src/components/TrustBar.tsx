import React from 'react';
import { COMPANY_OVERVIEW } from '../data/content';
import { ShieldAlert, Landmark, Settings } from 'lucide-react';
import { GsapReveal, GsapStagger } from './GsapReveal';

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-[#0A0A0A] text-[#F5F0E6] py-20 px-6 md:px-12 border-y border-[#0A0A0A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Company Overview Statement */}
          <GsapReveal effect="fade-up" className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-[#B08D57]" />
              <span className="text-[10px] uppercase tracking-widest-plus font-mono text-[#B08D57] font-semibold">
                Company Overview & Core Commitment
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#F5F0E6]">
              Equipping Christian businesses with risk protection, capital access, and operational stability.
            </h2>

            <p className="text-base text-[#F5F0E6]/80 font-light leading-relaxed">
              {COMPANY_OVERVIEW}
            </p>
          </GsapReveal>

          {/* 3 Core Trust Pillars Callout */}
          <GsapStagger effect="slide-right" stagger={0.15} className="lg:col-span-5 flex flex-col gap-4 border-l lg:border-l border-[#F5F0E6]/10 lg:pl-10">
            <div className="p-5 bg-[#141414] border border-[#F5F0E6]/10 flex items-start gap-4 rounded-[4px] hover:border-[#B08D57]/40 transition-colors">
              <ShieldAlert className="w-6 h-6 text-[#B08D57] shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-lg font-medium text-[#F5F0E6]">Liability & Risk Exposure</h4>
                <p className="text-xs text-[#F5F0E6]/70 font-light mt-1">
                  Mitigating corporate vulnerabilities, contractual liabilities, and insurance coverage gaps.
                </p>
              </div>
            </div>

            <div className="p-5 bg-[#141414] border border-[#F5F0E6]/10 flex items-start gap-4 rounded-[4px] hover:border-[#B08D57]/40 transition-colors">
              <Landmark className="w-6 h-6 text-[#B08D57] shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-lg font-medium text-[#F5F0E6]">Financing & Capital Positioning</h4>
                <p className="text-xs text-[#F5F0E6]/70 font-light mt-1">
                  Structuring debt and credit lines aligned with values and risk tolerance.
                </p>
              </div>
            </div>

            <div className="p-5 bg-[#141414] border border-[#F5F0E6]/10 flex items-start gap-4 rounded-[4px] hover:border-[#B08D57]/40 transition-colors">
              <Settings className="w-6 h-6 text-[#B08D57] shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-lg font-medium text-[#F5F0E6]">Operational & Compliance Execution</h4>
                <p className="text-xs text-[#F5F0E6]/70 font-light mt-1">
                  Hands-on rollout of policies, governance, and workflow documentation.
                </p>
              </div>
            </div>
          </GsapStagger>

        </div>
      </div>
    </section>
  );
};
