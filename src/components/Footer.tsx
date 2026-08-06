import React from 'react';
import { PageView } from '../types';
import { BRAND_INFO, MISSION_STATEMENT } from '../data/content';
import { ArrowUpRight, Shield, Mail, Phone, MapPin } from 'lucide-react';
import { LogoMark } from './LogoMark';

interface FooterProps {
  onNavigate: (view: PageView) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <footer className="bg-[#0A0A0A] text-[#F5F0E6] pt-20 pb-12 border-t border-[#F5F0E6]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#F5F0E6]/10">
          
          {/* Brand Info & Mission */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-[#B08D57] flex items-center justify-center bg-[#0A0A0A] rounded-[4px]">
                <LogoMark className="w-4 h-4 text-[#B08D57]" />
              </div>
              <span className="font-serif text-2xl font-medium tracking-tight text-[#F5F0E6]">
                LAIMING STRATEGIES
              </span>
            </div>

            <p className="text-sm text-[#F5F0E6]/70 leading-relaxed max-w-md font-light">
              {BRAND_INFO.positioning}
            </p>

            <div className="p-4 bg-[#141414] border border-[#F5F0E6]/10 text-xs text-[#F5F0E6]/80 leading-relaxed font-mono rounded-[4px]">
              <span className="text-[#B08D57] font-bold block mb-1 uppercase tracking-wider">Mission Statement</span>
              "{MISSION_STATEMENT}"
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-[10px] font-mono uppercase tracking-widest-plus text-[#B08D57] font-semibold">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-[#F5F0E6]/70 font-light">
              <li>
                <button
                  onClick={() => { onNavigate('home'); window.scrollTo(0,0); }}
                  className="hover:text-[#F5F0E6] transition-colors focus:outline-hidden"
                >
                  Overview & Differentiators
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('services'); window.scrollTo(0,0); }}
                  className="hover:text-[#F5F0E6] transition-colors focus:outline-hidden"
                >
                  Services & Core Competencies
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('scope'); window.scrollTo(0,0); }}
                  className="hover:text-[#F5F0E6] transition-colors focus:outline-hidden"
                >
                  Scope of Work (4-Phase Model)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('about'); window.scrollTo(0,0); }}
                  className="hover:text-[#F5F0E6] transition-colors focus:outline-hidden"
                >
                  About & Core Values
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('insights'); window.scrollTo(0,0); }}
                  className="hover:text-[#F5F0E6] transition-colors focus:outline-hidden"
                >
                  Advisory Insights
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('contact'); window.scrollTo(0,0); }}
                  className="hover:text-[#F5F0E6] transition-colors focus:outline-hidden"
                >
                  Contact & Direct Booking
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Engagement */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h4 className="text-[10px] font-mono uppercase tracking-widest-plus text-[#B08D57] font-semibold">
              Engage Advisory Counsel
            </h4>
            <p className="text-sm text-[#F5F0E6]/70 leading-relaxed font-light">
              Ready to evaluate liability exposure, structure capital financing, or align operations with biblical stewardship?
            </p>
            <button
              onClick={onOpenConsultation}
              className="group inline-flex items-center justify-between px-6 py-4 bg-[#B08D57] text-[#0A0A0A] text-[10px] uppercase tracking-widest-plus font-bold transition-all duration-300 hover:bg-[#C6A46A] rounded-[4px]"
              id="footer-consult-btn"
            >
              <span>Schedule Initial Consultation</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
            <div className="flex flex-col gap-2 text-xs text-[#F5F0E6]/50 font-mono pt-2">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B08D57]" />
                <span>counsel@laimingstrategies.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[#B08D57]" />
                <span>Strict Client Confidentiality & Values Alignment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#F5F0E6]/40 font-mono">
          <p>© {new Date().getFullYear()} Laiming Strategies. All rights reserved.</p>
          <p className="text-center md:text-right">
            Guided by principles of honesty, diligence, and service to others.
          </p>
        </div>
      </div>
    </footer>
  );
};
