import React, { useState } from 'react';
import { PageView } from './types';
import { LenisScroll } from './components/LenisScroll';
import { HeaderNavigation } from './components/HeaderNavigation';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ServicesSection } from './components/ServicesSection';
import { DifferentiatorsSection } from './components/DifferentiatorsSection';
import { ProcessSection } from './components/ProcessSection';
import { StickyStackingCards } from './components/StickyStackingCards';
import { ExposureAuditCalculator } from './components/ExposureAuditCalculator';
import { ScopeOfWorkBuilder } from './components/ScopeOfWorkBuilder';
import { AboutSection } from './components/AboutSection';
import { InsightsSection } from './components/InsightsSection';
import { ContactSection } from './components/ContactSection';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [prefilledAudit, setPrefilledAudit] = useState<string>('');

  const handleOpenConsultation = (serviceTitle?: string, auditNotes?: string) => {
    if (serviceTitle) setPrefilledService(serviceTitle);
    else setPrefilledService('');

    if (auditNotes) setPrefilledAudit(auditNotes);
    else setPrefilledAudit('');

    setIsConsultationOpen(true);
  };

  const handleNavigate = (view: PageView) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToAudit = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const auditElem = document.getElementById('readiness-audit');
        if (auditElem) auditElem.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const auditElem = document.getElementById('readiness-audit');
      if (auditElem) auditElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LenisScroll>
      <div className="min-h-screen bg-[#F5F0E6] text-[#0A0A0A] selection:bg-[#B08D57]/20 selection:text-[#0A0A0A]">
        {/* Header Navigation Bar */}
        <HeaderNavigation
          currentView={currentView}
          onNavigate={handleNavigate}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Main View Router */}
        <main className="w-full">
          {currentView === 'home' && (
            <>
              <Hero
                onOpenConsultation={() => handleOpenConsultation()}
                onNavigate={handleNavigate}
                onOpenAudit={scrollToAudit}
              />
              <TrustBar />
              <ServicesSection
                onOpenConsultationWithService={(title) => handleOpenConsultation(title)}
                onNavigate={handleNavigate}
              />
              <StickyStackingCards onOpenConsultation={() => handleOpenConsultation()} />
              <DifferentiatorsSection />
              <ProcessSection onOpenConsultation={() => handleOpenConsultation()} />
              <ExposureAuditCalculator
                onOpenConsultationWithAudit={(auditText) => handleOpenConsultation(undefined, auditText)}
              />
              <ScopeOfWorkBuilder
                onOpenConsultationWithScope={(scopeText) => handleOpenConsultation(undefined, scopeText)}
              />
              <InsightsSection />
            </>
          )}

          {currentView === 'services' && (
            <div className="pt-24">
              <ServicesSection
                onOpenConsultationWithService={(title) => handleOpenConsultation(title)}
                onNavigate={handleNavigate}
              />
              <ScopeOfWorkBuilder
                onOpenConsultationWithScope={(scopeText) => handleOpenConsultation(undefined, scopeText)}
              />
            </div>
          )}

          {currentView === 'scope' && (
            <div className="pt-24">
              <ScopeOfWorkBuilder
                onOpenConsultationWithScope={(scopeText) => handleOpenConsultation(undefined, scopeText)}
              />
              <ProcessSection onOpenConsultation={() => handleOpenConsultation()} />
            </div>
          )}

          {currentView === 'about' && (
            <div className="pt-24">
              <AboutSection />
              <DifferentiatorsSection />
              <TrustBar />
            </div>
          )}

          {currentView === 'insights' && (
            <div className="pt-24">
              <InsightsSection />
            </div>
          )}

          {currentView === 'contact' && (
            <div className="pt-24">
              <ContactSection onOpenConsultation={() => handleOpenConsultation()} />
              <ExposureAuditCalculator
                onOpenConsultationWithAudit={(auditText) => handleOpenConsultation(undefined, auditText)}
              />
            </div>
          )}
        </main>

        {/* Footer */}
        <Footer
          onNavigate={handleNavigate}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Interactive Consultation Scheduler Modal */}
        <ContactModal
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
          prefilledService={prefilledService}
          prefilledAudit={prefilledAudit}
        />
      </div>
    </LenisScroll>
  );
}
