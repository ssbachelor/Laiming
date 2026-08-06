import React, { useState } from 'react';
import { AuditAnswers } from '../types';
import { CheckCircle, ArrowRight, Shield } from 'lucide-react';
import { GsapReveal } from './GsapReveal';

interface ExposureAuditCalculatorProps {
  onOpenConsultationWithAudit?: (summary: string) => void;
}

export const ExposureAuditCalculator: React.FC<ExposureAuditCalculatorProps> = ({
  onOpenConsultationWithAudit,
}) => {
  const [answers, setAnswers] = useState<AuditAnswers>({
    companyType: 'Christian-led Business ($2M - $10M)',
    annualRevenue: '$5M - $15M',
    hasInsuranceReview: 'No formal gap audit in past 12 months',
    facingFinancingNeed: 'Seeking capital / line of credit in next 6-12 months',
    primaryConcern: 'Contract liability & coverage gap exposure',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const calculateScore = () => {
    let riskPoints = 0;
    if (answers.hasInsuranceReview.includes('No formal') || answers.hasInsuranceReview.includes('Never')) {
      riskPoints += 35;
    }
    if (answers.facingFinancingNeed.includes('Seeking capital')) {
      riskPoints += 25;
    }
    if (answers.primaryConcern.includes('liability')) {
      riskPoints += 20;
    }
    if (answers.primaryConcern.includes('operations')) {
      riskPoints += 20;
    }
    return Math.min(95, Math.max(40, riskPoints + 30));
  };

  const score = calculateScore();

  const getRecommendation = () => {
    if (score >= 70) {
      return {
        level: 'High Priority Advisory Alignment Suggested',
        summary: 'Your organization shows active exposure in liability coverage review and imminent financing needs. Immediate Phase 1 Discovery & Risk Assessment recommended.',
        primaryPillar: 'Liability & Insurance Navigation',
        secondaryPillar: 'Financing & Capital Positioning',
      };
    } else {
      return {
        level: 'Moderate Risk Posture — Proactive Review Recommended',
        summary: 'Your business has moderate exposure. Establishing clean contract indemnifications and lender positioning will safeguard future scaling.',
        primaryPillar: 'Strategic Operations & Compliance',
        secondaryPillar: 'Liability Gap Review',
      };
    }
  };

  const rec = getRecommendation();

  return (
    <section className="py-24 px-6 md:px-12 bg-[#0A0A0A] text-[#F5F0E6] relative border-y border-[#F5F0E6]/10" id="readiness-audit">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <GsapReveal effect="fade-up" className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-4 h-4 text-[#B08D57]" />
            <span className="text-[10px] uppercase tracking-widest-plus font-mono text-[#B08D57] font-bold">
              Interactive Strategic Diagnostic
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#F5F0E6]">
            Exposure & Capital Readiness Audit
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#F5F0E6]/75 font-light leading-relaxed">
            Evaluate your Christian organization's liability posture, coverage readiness, and financing positioning in under two minutes.
          </p>
        </GsapReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Diagnostic Controls Form */}
          <GsapReveal effect="slide-left" className="lg:col-span-7 bg-[#141414] border border-[#F5F0E6]/10 p-8 rounded-[4px]">
            <h3 className="text-[10px] font-mono uppercase tracking-widest-plus text-[#B08D57] font-semibold mb-6">
              Step 1: Organizational Inputs
            </h3>

            <div className="space-y-6">
              
              {/* Question 1: Revenue & Company Posture */}
              <div>
                <label className="block text-xs font-mono uppercase text-[#F5F0E6]/70 mb-2">
                  1. Annual Revenue & Enterprise Structure
                </label>
                <select
                  value={answers.annualRevenue}
                  onChange={(e) => setAnswers({ ...answers, annualRevenue: e.target.value })}
                  className="w-full bg-[#0A0A0A] border border-[#F5F0E6]/20 text-sm text-[#F5F0E6] p-3 focus:border-[#B08D57] focus:outline-hidden rounded-[4px]"
                >
                  <option value="Under $2M">Under $2M annual revenue</option>
                  <option value="$2M - $5M">$2M – $5M annual revenue</option>
                  <option value="$5M - $15M">$5M – $15M annual revenue</option>
                  <option value="$15M - $50M">$15M – $50M annual revenue</option>
                  <option value="$50M+">$50M+ enterprise scale</option>
                </select>
              </div>

              {/* Question 2: Insurance & Liability Review */}
              <div>
                <label className="block text-xs font-mono uppercase text-[#F5F0E6]/70 mb-2">
                  2. Insurance & Contract Policy Audit Status
                </label>
                <select
                  value={answers.hasInsuranceReview}
                  onChange={(e) => setAnswers({ ...answers, hasInsuranceReview: e.target.value })}
                  className="w-full bg-[#0A0A0A] border border-[#F5F0E6]/20 text-sm text-[#F5F0E6] p-3 focus:border-[#B08D57] focus:outline-hidden rounded-[4px]"
                >
                  <option value="No formal gap audit in past 12 months">No formal coverage audit in past 12 months</option>
                  <option value="Standard broker review only">Standard broker renewal only (no independent review)</option>
                  <option value="Recent contract or dispute issues">Recent vendor disputes / policy exclusions flagged</option>
                  <option value="Comprehensive independent audit complete">Independent non-underwriting audit complete</option>
                </select>
              </div>

              {/* Question 3: Capital & Financing Needs */}
              <div>
                <label className="block text-xs font-mono uppercase text-[#F5F0E6]/70 mb-2">
                  3. Financing & Capital Horizon
                </label>
                <select
                  value={answers.facingFinancingNeed}
                  onChange={(e) => setAnswers({ ...answers, facingFinancingNeed: e.target.value })}
                  className="w-full bg-[#0A0A0A] border border-[#F5F0E6]/20 text-sm text-[#F5F0E6] p-3 focus:border-[#B08D57] focus:outline-hidden rounded-[4px]"
                >
                  <option value="Seeking capital / line of credit in next 6-12 months">Seeking capital or bank line of credit within 6–12 months</option>
                  <option value="Refinancing existing debt / commercial loan">Refinancing existing commercial mortgage or debt</option>
                  <option value="Evaluating equity / investor capital alignment">Evaluating investor capital aligned with Christian values</option>
                  <option value="No immediate capital needs">No immediate capital required</option>
                </select>
              </div>

              {/* Question 4: Primary Concern */}
              <div>
                <label className="block text-xs font-mono uppercase text-[#F5F0E6]/70 mb-2">
                  4. Primary Advisory Priority
                </label>
                <select
                  value={answers.primaryConcern}
                  onChange={(e) => setAnswers({ ...answers, primaryConcern: e.target.value })}
                  className="w-full bg-[#0A0A0A] border border-[#F5F0E6]/20 text-sm text-[#F5F0E6] p-3 focus:border-[#B08D57] focus:outline-hidden rounded-[4px]"
                >
                  <option value="Contract liability & coverage gap exposure">Contract liability & coverage gap exposure</option>
                  <option value="Securing favorable commercial loan terms">Securing favorable commercial loan & debt terms</option>
                  <option value="Operational compliance & internal workflow build-out">Operational compliance & internal workflow build-out</option>
                  <option value="Faith-aligned leadership & ethical governance">Faith-aligned leadership & ethical governance</option>
                </select>
              </div>

            </div>

            <div className="mt-8 pt-6 border-t border-[#F5F0E6]/10 flex items-center justify-between">
              <span className="text-xs text-[#F5F0E6]/50 font-mono">
                Updates dynamically in real time
              </span>
              <button
                onClick={() => setSubmitted(true)}
                className="px-6 py-3 bg-[#B08D57] text-[#0A0A0A] text-[10px] uppercase tracking-widest-plus font-bold hover:bg-[#C6A46A] transition-colors flex items-center gap-2 rounded-[4px]"
              >
                <span>Generate Audit Summary</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </GsapReveal>

          {/* Diagnostic Scorecard Output */}
          <GsapReveal effect="slide-right" className="lg:col-span-5 bg-[#0E0E0E] border border-[#B08D57]/40 p-8 flex flex-col justify-between rounded-[4px]">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#F5F0E6]/10 mb-6">
                <span className="text-[10px] font-mono uppercase tracking-widest-plus text-[#B08D57] font-semibold">
                  Step 2: Diagnostic Scorecard
                </span>
                <span className="text-xs font-mono text-[#F5F0E6]/40">Scorecard #LS-2026</span>
              </div>

              {/* Exposure Score Meter */}
              <div className="mb-6 p-6 bg-[#141414] border border-[#F5F0E6]/10 text-center relative overflow-hidden rounded-[4px]">
                <span className="text-xs uppercase tracking-widest text-[#F5F0E6]/60 font-mono block mb-1">
                  Estimated Risk & Readiness Need
                </span>
                <div className="font-serif text-6xl font-normal text-[#B08D57] my-2">
                  {score}<span className="text-2xl text-[#F5F0E6]/40">/100</span>
                </div>
                <span className="text-xs font-mono text-[#F5F0E6]/80 uppercase font-semibold tracking-wider">
                  {rec.level}
                </span>
              </div>

              {/* Key Recommendation */}
              <div className="space-y-4">
                <div className="p-4 bg-[#0A0A0A] border-l-2 border-[#B08D57] rounded-[2px]">
                  <h4 className="text-xs font-mono uppercase text-[#B08D57] font-semibold mb-1">
                    Advisory Recommendation
                  </h4>
                  <p className="text-xs text-[#F5F0E6]/85 font-light leading-relaxed">
                    {rec.summary}
                  </p>
                </div>

                <div className="p-4 bg-[#0A0A0A] border border-[#F5F0E6]/10 rounded-[4px]">
                  <h4 className="text-xs font-mono uppercase text-[#F5F0E6]/60 mb-2">
                    Recommended Core Focus
                  </h4>
                  <div className="flex flex-col gap-1 text-xs text-[#F5F0E6]">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#B08D57]" />
                      <span className="font-medium">{rec.primaryPillar}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#B08D57]" />
                      <span className="font-light text-[#F5F0E6]/80">{rec.secondaryPillar}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Audit for Consultation */}
            <div className="mt-8 pt-6 border-t border-[#F5F0E6]/10">
              <button
                onClick={() => {
                  const auditText = `Diagnostic Score: ${score}/100 | Revenue: ${answers.annualRevenue} | Insurance Status: ${answers.hasInsuranceReview} | Financing Horizon: ${answers.facingFinancingNeed} | Priority: ${answers.primaryConcern}`;
                  if (onOpenConsultationWithAudit) {
                    onOpenConsultationWithAudit(auditText);
                  }
                }}
                className="w-full py-4 bg-[#B08D57] text-[#0A0A0A] text-[10px] uppercase tracking-widest-plus font-bold flex items-center justify-center gap-2 hover:bg-[#C6A46A] transition-colors rounded-[4px]"
                id="audit-schedule-btn"
              >
                <span>Schedule Review of This Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </GsapReveal>

        </div>
      </div>
    </section>
  );
};
