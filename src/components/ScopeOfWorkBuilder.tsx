import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SCOPE_PHASES } from '../data/content';
import { FileText, Check, ArrowRight, Layers, ShieldCheck, Landmark, Settings } from 'lucide-react';

interface ScopeOfWorkBuilderProps {
  onOpenConsultationWithScope?: (scopeDetails: string) => void;
}

export const ScopeOfWorkBuilder: React.FC<ScopeOfWorkBuilderProps> = ({
  onOpenConsultationWithScope,
}) => {
  const [selectedModules, setSelectedModules] = useState<{ [key: string]: boolean }>({
    liability: true,
    financing: true,
    compliance: true,
    ongoingRetainer: false,
  });

  const toggleModule = (key: string) => {
    setSelectedModules((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const getEstimatedDuration = () => {
    let weeks = 4;
    if (selectedModules.liability && selectedModules.financing) weeks += 2;
    if (selectedModules.compliance) weeks += 2;
    return `${weeks} Weeks ${selectedModules.ongoingRetainer ? '+ Ongoing Advisory' : ''}`;
  };

  const handleConsultWithScope = () => {
    const chosen = [];
    if (selectedModules.liability) chosen.push('Liability & Insurance Review');
    if (selectedModules.financing) chosen.push('Financing & Capital Strategy');
    if (selectedModules.compliance) chosen.push('Operations & Compliance Build-out');
    if (selectedModules.ongoingRetainer) chosen.push('Phase 4 Ongoing Advisory Retainer');

    const scopeDetails = `Custom Scope Selection: ${chosen.join(', ')} | Estimated Timeline: ${getEstimatedDuration()}`;
    if (onOpenConsultationWithScope) {
      onOpenConsultationWithScope(scopeDetails);
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-[#F5F0E6] text-[#0A0A0A] relative" id="scope-of-work">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#B08D57]" />
            <span className="text-[10px] uppercase tracking-widest-plus font-mono text-[#B08D57] font-bold">
              Standard Engagement Template
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#0A0A0A]">
            Scope of Work Architecture
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#0A0A0A]/70 font-light leading-relaxed">
            Every engagement follows a clear, disciplined structure from initial discovery through execution and sustained advisory.
          </p>
        </div>

        {/* Detailed 4-Phase Grid Display */}
        <div className="space-y-8 mb-20">
          {SCOPE_PHASES.map((phase) => (
            <div
              key={phase.phase}
              className="p-8 md:p-10 bg-[#EFE9DD] border border-[#0A0A0A]/10 hover:border-[#0A0A0A]/30 transition-all rounded-[4px]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Phase Number & Title */}
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2.5 py-1 bg-[#0A0A0A] text-[#F5F0E6] text-xs font-mono uppercase font-bold rounded-[2px]">
                      PHASE {phase.phase}
                    </span>
                    <span className="text-xs font-mono text-[#B08D57] font-bold">
                      {phase.timeframe}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-[#0A0A0A] mb-3">
                    {phase.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#0A0A0A]/75 font-light leading-relaxed mb-6">
                    {phase.summary}
                  </p>

                  <div className="p-4 bg-[#F5F0E6] border-l-2 border-[#B08D57] text-xs font-mono rounded-[2px]">
                    <span className="text-[#0A0A0A] font-bold block mb-1 uppercase tracking-wider">
                      Phase Deliverable:
                    </span>
                    <span className="text-[#0A0A0A]/80">{phase.deliverables}</span>
                  </div>
                </div>

                {/* Phase Scope Activities List */}
                <div className="lg:col-span-8 bg-[#F5F0E6] p-6 border border-[#0A0A0A]/10 rounded-[4px]">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest-plus text-[#B08D57] font-semibold mb-4">
                    Core Action Items & Activities
                  </h4>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {phase.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start gap-3 p-3 bg-[#EFE9DD] border border-[#0A0A0A]/5 text-xs font-light text-[#0A0A0A]/85 rounded-[2px]">
                        <Check className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Interactive Scope Configurator */}
        <div className="p-8 md:p-12 bg-[#0A0A0A] text-[#F5F0E6] border border-[#0A0A0A] relative shadow-2xl rounded-[4px]">
          <div className="max-w-2xl mb-8">
            <span className="text-[10px] uppercase tracking-widest-plus font-mono text-[#B08D57] font-semibold block mb-2">
              Interactive Engagement Planner
            </span>
            <h3 className="font-serif text-3xl font-normal text-[#F5F0E6]">
              Customize Your Scope of Work
            </h3>
            <p className="text-xs sm:text-sm text-[#F5F0E6]/70 font-light mt-2">
              Select the practice modules required for your business to calculate an estimated engagement timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            
            {/* Module 1: Liability & Insurance */}
            <div
              onClick={() => toggleModule('liability')}
              className={`cursor-pointer p-5 border transition-all rounded-[4px] ${
                selectedModules.liability
                  ? 'bg-[#1A1A1A] border-[#B08D57]'
                  : 'bg-[#141414] border-[#F5F0E6]/10 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <ShieldCheck className="w-5 h-5 text-[#B08D57]" />
                <input
                  type="checkbox"
                  checked={selectedModules.liability}
                  onChange={() => {}}
                  className="accent-[#B08D57]"
                />
              </div>
              <h4 className="font-serif text-base font-medium text-[#F5F0E6]">
                Liability & Insurance Navigation
              </h4>
              <p className="text-[11px] text-[#F5F0E6]/60 font-light mt-1">
                Risk assessment, contract review, coverage gap mitigation.
              </p>
            </div>

            {/* Module 2: Financing */}
            <div
              onClick={() => toggleModule('financing')}
              className={`cursor-pointer p-5 border transition-all rounded-[4px] ${
                selectedModules.financing
                  ? 'bg-[#1A1A1A] border-[#B08D57]'
                  : 'bg-[#141414] border-[#F5F0E6]/10 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <Landmark className="w-5 h-5 text-[#B08D57]" />
                <input
                  type="checkbox"
                  checked={selectedModules.financing}
                  onChange={() => {}}
                  className="accent-[#B08D57]"
                />
              </div>
              <h4 className="font-serif text-base font-medium text-[#F5F0E6]">
                Financing & Capital Positioning
              </h4>
              <p className="text-[11px] text-[#F5F0E6]/60 font-light mt-1">
                Loan prep, lender relation navigation, cash flow planning.
              </p>
            </div>

            {/* Module 3: Operations & Compliance */}
            <div
              onClick={() => toggleModule('compliance')}
              className={`cursor-pointer p-5 border transition-all rounded-[4px] ${
                selectedModules.compliance
                  ? 'bg-[#1A1A1A] border-[#B08D57]'
                  : 'bg-[#141414] border-[#F5F0E6]/10 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <Settings className="w-5 h-5 text-[#B08D57]" />
                <input
                  type="checkbox"
                  checked={selectedModules.compliance}
                  onChange={() => {}}
                  className="accent-[#B08D57]"
                />
              </div>
              <h4 className="font-serif text-base font-medium text-[#F5F0E6]">
                Business Operations & Compliance
              </h4>
              <p className="text-[11px] text-[#F5F0E6]/60 font-light mt-1">
                Policy build-out, regulatory orientation, workflow systems.
              </p>
            </div>

            {/* Module 4: Ongoing Retainer */}
            <div
              onClick={() => toggleModule('ongoingRetainer')}
              className={`cursor-pointer p-5 border transition-all rounded-[4px] ${
                selectedModules.ongoingRetainer
                  ? 'bg-[#1A1A1A] border-[#B08D57]'
                  : 'bg-[#141414] border-[#F5F0E6]/10 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <FileText className="w-5 h-5 text-[#B08D57]" />
                <input
                  type="checkbox"
                  checked={selectedModules.ongoingRetainer}
                  onChange={() => {}}
                  className="accent-[#B08D57]"
                />
              </div>
              <h4 className="font-serif text-base font-medium text-[#F5F0E6]">
                Phase 4 Retainer Advisory
              </h4>
              <p className="text-[11px] text-[#F5F0E6]/60 font-light mt-1">
                Ongoing quarterly monitoring, on-call risk & capital support.
              </p>
            </div>

          </div>

          <div className="pt-6 border-t border-[#F5F0E6]/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#B08D57] block mb-1">
                Estimated Scope Duration
              </span>
              <span className="font-serif text-2xl text-[#F5F0E6]">
                {getEstimatedDuration()}
              </span>
            </div>

            <button
              onClick={handleConsultWithScope}
              className="w-full md:w-auto px-8 py-4 bg-[#B08D57] text-[#0A0A0A] text-[10px] uppercase tracking-widest-plus font-bold flex items-center justify-center gap-2 hover:bg-[#C6A46A] transition-colors rounded-[4px]"
              id="request-proposal-btn"
            >
              <span>Request Custom Scope Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
