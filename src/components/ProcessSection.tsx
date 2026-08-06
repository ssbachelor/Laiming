import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SCOPE_PHASES } from '../data/content';
import { Clock, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  onOpenConsultation: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenConsultation }) => {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);

  const activePhase = SCOPE_PHASES[activePhaseIndex];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#F5F0E6] text-[#0A0A0A] border-t border-[#0A0A0A]/10 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#B08D57]" />
            <span className="text-[10px] uppercase tracking-widest-plus font-mono text-[#B08D57] font-bold">
              Standard Engagement Framework
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#0A0A0A]">
            How Engagements Work
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#0A0A0A]/70 font-light leading-relaxed">
            A structured, 4-phase methodology ensuring thorough discovery, clear strategic planning, hands-on execution, and optional sustained advisory.
          </p>
        </div>

        {/* Phase Timeline Stepper Controls */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {SCOPE_PHASES.map((phase, idx) => {
            const isActive = idx === activePhaseIndex;
            return (
              <button
                key={phase.phase}
                onClick={() => setActivePhaseIndex(idx)}
                className={`p-5 text-left transition-all duration-300 border flex flex-col justify-between focus:outline-hidden rounded-[4px] ${
                  isActive
                    ? 'bg-[#0A0A0A] text-[#F5F0E6] border-[#0A0A0A] shadow-lg'
                    : 'bg-[#EFE9DD] text-[#0A0A0A] border-[#0A0A0A]/10 hover:border-[#B08D57]'
                }`}
                id={`phase-step-${phase.phase}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#B08D57]' : 'text-[#0A0A0A]/50'}`}>
                      PHASE 0{phase.phase}
                    </span>
                    <span className="text-[11px] font-mono opacity-60">
                      {phase.timeframe}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-medium leading-tight">
                    {phase.title}
                  </h3>
                </div>
                <div className="mt-4 pt-3 border-t border-current/10 text-[11px] font-mono flex items-center justify-between">
                  <span>{isActive ? 'Active Phase' : 'View Details'}</span>
                  <ArrowRight className={`w-3 h-3 ${isActive ? 'text-[#B08D57]' : 'opacity-40'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Phase Deep Dive Box */}
        <motion.div
          key={activePhase.phase}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-8 md:p-12 bg-[#0A0A0A] text-[#F5F0E6] border border-[#0A0A0A] relative shadow-2xl rounded-[4px]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Summary & Deliverables */}
            <div className="lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#F5F0E6]/10 pb-8 lg:pb-0 lg:pr-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[#B08D57] text-[#0A0A0A] text-xs font-mono uppercase font-bold tracking-wider rounded-[2px]">
                    Phase {activePhase.phase}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#F5F0E6]/60">
                    <Clock className="w-3.5 h-3.5 text-[#B08D57]" />
                    <span>{activePhase.timeframe}</span>
                  </div>
                </div>

                <h3 className="font-serif text-3xl font-normal text-[#F5F0E6] mb-4">
                  {activePhase.title}
                </h3>

                <p className="text-sm text-[#F5F0E6]/80 font-light leading-relaxed mb-6">
                  {activePhase.summary}
                </p>
              </div>

              {/* Deliverable Callout */}
              <div className="p-5 bg-[#141414] border border-[#B08D57]/40 rounded-[4px]">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#B08D57] font-bold mb-2">
                  <FileText className="w-4 h-4" />
                  <span>Phase Deliverable</span>
                </div>
                <p className="text-sm font-medium text-[#F5F0E6]">
                  {activePhase.deliverables}
                </p>
              </div>
            </div>

            {/* Right Column: Key Activities */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest-plus font-mono text-[#B08D57] font-semibold mb-6">
                  Key Scope Activities & Milestones
                </h4>

                <div className="space-y-4">
                  {activePhase.activities.map((activity, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 bg-[#141414] border border-[#F5F0E6]/10 rounded-[4px]">
                      <CheckCircle2 className="w-5 h-5 text-[#B08D57] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-mono text-[#F5F0E6]/40 block mb-0.5">
                          Activity 0{idx + 1}
                        </span>
                        <p className="text-sm text-[#F5F0E6]/90 font-light leading-relaxed">
                          {activity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#F5F0E6]/10 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-[#F5F0E6]/60 font-mono">
                  Standard Scope Template — Custom adjustments available
                </span>
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3 bg-[#B08D57] text-[#0A0A0A] text-[10px] uppercase tracking-widest-plus font-bold hover:bg-[#C6A46A] transition-colors rounded-[4px]"
                >
                  Discuss Engagement Schedule
                </button>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
