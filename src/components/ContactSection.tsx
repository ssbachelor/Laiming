import React from 'react';
import { Mail, Shield, Calendar, ArrowUpRight } from 'lucide-react';
import { GsapReveal } from './GsapReveal';

interface ContactSectionProps {
  onOpenConsultation: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#F5F0E6] text-[#0A0A0A] relative" id="contact-us">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <GsapReveal effect="fade-up" className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#B08D57]" />
            <span className="text-[10px] uppercase tracking-widest-plus font-mono text-[#B08D57] font-bold">
              Direct Advisory Engagement
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#0A0A0A]">
            Initiate a Confidential Discussion
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#0A0A0A]/70 font-light leading-relaxed">
            Whether evaluating immediate liability concerns, preparing commercial loan positioning, or aligning operational workflows, our senior advisors are at your service.
          </p>
        </GsapReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Contact Details Box */}
          <GsapReveal effect="slide-left" className="lg:col-span-6 bg-[#0A0A0A] text-[#F5F0E6] p-8 md:p-12 border border-[#0A0A0A] flex flex-col justify-between shadow-2xl rounded-[4px]">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest-plus text-[#B08D57] font-semibold block mb-4">
                Counsel & Representation
              </span>
              <h3 className="font-serif text-3xl font-normal text-[#F5F0E6] mb-6">
                Laiming Strategies Headquarters
              </h3>
              <p className="text-sm text-[#F5F0E6]/80 font-light leading-relaxed mb-8">
                We work as embedded partners with leadership teams across North America, bringing quiet confidence and rigorous execution to every engagement.
              </p>

              <div className="space-y-4 text-xs sm:text-sm font-mono text-[#F5F0E6]/90">
                <div className="flex items-center gap-3 p-3 bg-[#141414] border border-[#F5F0E6]/10 rounded-[2px]">
                  <Mail className="w-4 h-4 text-[#B08D57]" />
                  <span>counsel@laimingstrategies.com</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#141414] border border-[#F5F0E6]/10 rounded-[2px]">
                  <Shield className="w-4 h-4 text-[#B08D57]" />
                  <span>Strict NDA & Integrity Guarantee</span>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-[#F5F0E6]/10 flex items-center justify-between text-xs font-mono text-[#F5F0E6]/50">
              <span>Response Horizon: &lt; 24 Hours</span>
              <span>Faith-Aligned Practice</span>
            </div>
          </GsapReveal>

          {/* Schedule Calendar CTA Card */}
          <GsapReveal effect="slide-right" className="lg:col-span-6 bg-[#EFE9DD] border border-[#0A0A0A]/10 p-8 md:p-12 flex flex-col justify-between rounded-[4px]">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest-plus text-[#B08D57] font-semibold mb-4">
                <Calendar className="w-4 h-4" />
                <span>Executive Calendar Booking</span>
              </div>
              <h3 className="font-serif text-3xl font-normal text-[#0A0A0A] mb-4">
                Schedule Your 45-Minute Consultation
              </h3>
              <p className="text-sm text-[#0A0A0A]/75 font-light leading-relaxed mb-8">
                Reserve a dedicated video or telephone session with our practice leadership. We will review your current risk posture and outline a recommended engagement scope.
              </p>

              <div className="p-4 bg-[#F5F0E6] border-l-2 border-[#B08D57] text-xs font-mono text-[#0A0A0A]/85 mb-8 rounded-[2px]">
                <span className="text-[#B08D57] font-bold block mb-1">WHAT TO EXPECT:</span>
                • Preliminary review of liability exposure or capital needs<br />
                • Assessment of organizational readiness & values alignment<br />
                • Recommended Phase 1 engagement outline
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full py-4 bg-[#0A0A0A] text-[#F5F0E6] text-[10px] uppercase tracking-widest-plus font-bold flex items-center justify-center gap-3 border border-[#0A0A0A] hover:border-[#B08D57] transition-all hover:bg-[#1A1A1A] shadow-lg rounded-[4px]"
              id="contact-page-consult-btn"
            >
              <span>Launch Calendar Scheduler</span>
              <ArrowUpRight className="w-4 h-4 text-[#B08D57]" />
            </button>
          </GsapReveal>

        </div>

      </div>
    </section>
  );
};
