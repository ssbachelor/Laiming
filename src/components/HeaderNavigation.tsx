import React, { useState, useEffect } from 'react';
import { PageView } from '../types';
import { Menu, X, ArrowUpRight, Shield } from 'lucide-react';
import { LogoMark } from './LogoMark';

interface HeaderProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
  onOpenConsultation: () => void;
}

export const HeaderNavigation: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onOpenConsultation,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; view: PageView }[] = [
    { label: 'Overview', view: 'home' },
    { label: 'Services', view: 'services' },
    { label: 'Scope of Work', view: 'scope' },
    { label: 'About & Values', view: 'about' },
    { label: 'Insights', view: 'insights' },
  ];

  const handleNavClick = (view: PageView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F5F0E6]/95 backdrop-blur-md border-b border-[#0A0A0A]/10 py-4 shadow-xs'
          : 'bg-transparent py-6 border-b border-[#0A0A0A]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="group flex items-center gap-3 text-left focus:outline-hidden"
          id="brand-logo-btn"
        >
          <div className="w-9 h-9 border border-[#0A0A0A] flex items-center justify-center bg-[#0A0A0A] text-[#B08D57] transition-transform duration-300 group-hover:scale-105 rounded-[4px]">
            <LogoMark className="w-5 h-5 text-[#B08D57]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-tight text-[#0A0A0A] font-semibold leading-none group-hover:text-[#B08D57] transition-colors">
              LAIMING STRATEGIES
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#0A0A0A]/60 font-mono mt-0.5">
              Christian Advisory & Execution
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = currentView === item.view;
            return (
              <button
                key={item.view}
                onClick={() => handleNavClick(item.view)}
                className={`text-xs uppercase tracking-widest-plus font-medium transition-colors relative py-1 focus:outline-hidden ${
                  isActive ? 'text-[#0A0A0A]' : 'text-[#0A0A0A]/60 hover:text-[#0A0A0A]'
                }`}
                id={`nav-${item.view}`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#B08D57]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* CTA & Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => handleNavClick('contact')}
            className={`text-xs uppercase tracking-widest-plus font-medium transition-colors px-3 py-2 ${
              currentView === 'contact' ? 'text-[#B08D57]' : 'text-[#0A0A0A]/70 hover:text-[#0A0A0A]'
            }`}
            id="nav-contact"
          >
            Contact
          </button>
          
          <button
            onClick={onOpenConsultation}
            className="group relative inline-flex items-center gap-3 px-6 py-3 bg-[#0A0A0A] text-[#F5F0E6] text-[10px] uppercase tracking-widest-plus font-bold transition-all duration-300 hover:bg-zinc-800 rounded-[4px] border border-[#0A0A0A]"
            id="header-cta-btn"
          >
            <span>Schedule Consultation</span>
            <div className="w-2 h-2 rounded-full bg-[#B08D57] group-hover:scale-125 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#0A0A0A] focus:outline-hidden"
          aria-label="Toggle Navigation Menu"
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bg-[#F5F0E6] border-b border-[#0A0A0A]/10 shadow-2xl px-6 py-8 flex flex-col gap-6 animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => handleNavClick(item.view)}
                className={`text-left text-sm uppercase tracking-widest-plus font-medium py-2 border-b border-[#0A0A0A]/5 ${
                  currentView === item.view ? 'text-[#B08D57] font-semibold' : 'text-[#0A0A0A]/80'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className={`text-left text-sm uppercase tracking-widest-plus font-medium py-2 border-b border-[#0A0A0A]/5 ${
                currentView === 'contact' ? 'text-[#B08D57] font-semibold' : 'text-[#0A0A0A]/80'
              }`}
            >
              Contact Direct
            </button>
          </nav>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="w-full py-4 bg-[#0A0A0A] text-[#F5F0E6] text-[10px] uppercase tracking-widest-plus font-bold flex items-center justify-center gap-3 rounded-[4px] border border-[#0A0A0A]"
            id="mobile-consultation-btn"
          >
            <span>Schedule a Consultation</span>
            <div className="w-2 h-2 rounded-full bg-[#B08D57]" />
          </button>
        </div>
      )}
    </header>
  );
};
