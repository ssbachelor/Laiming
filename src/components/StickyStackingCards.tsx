import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ShieldCheck, Scale, TrendingUp, Compass } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface StackingCard {
  id: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  bullets: string[];
  bg: string;
  border: string;
  textColor: string;
  accentColor: string;
  icon: React.ReactNode;
}

const STACK_CARDS: StackingCard[] = [
  {
    id: 'pillar-1',
    number: '01',
    category: 'PILLAR I',
    title: 'Liability & Underwriting Navigation',
    subtitle: 'Protective structures preventing institutional over-exposure',
    bullets: [
      'Comprehensive liability policy audit & fine-print review',
      'Underwriting representation during carrier policy renewals',
      'Asset isolation & entity indemnification frameworks',
    ],
    bg: 'bg-[#141414]',
    border: 'border-[#B08D57]/40',
    textColor: 'text-[#F5F0E6]',
    accentColor: '#B08D57',
    icon: <ShieldCheck className="w-6 h-6 text-[#B08D57]" />,
  },
  {
    id: 'pillar-2',
    number: '02',
    category: 'PILLAR II',
    title: 'Financing & Capital Strategy',
    subtitle: 'Structuring non-dilutive and aligned capital facilities',
    bullets: [
      'Bank facility renegotiation & covenant optimization',
      'Faith-aligned private capital matching & syndication',
      'Cash flow liquidity buffers & debt service coverage prep',
    ],
    bg: 'bg-[#1A1A1A]',
    border: 'border-[#B08D57]/60',
    textColor: 'text-[#F5F0E6]',
    accentColor: '#B08D57',
    icon: <TrendingUp className="w-6 h-6 text-[#B08D57]" />,
  },
  {
    id: 'pillar-3',
    number: '03',
    category: 'PILLAR III',
    title: 'Executive Risk Governance',
    subtitle: 'Board advisory and operational exposure mitigation',
    bullets: [
      'Board & founder alignment on enterprise risk appetite',
      'Key-person contingency planning & leadership protection',
      'Crisis response protocols & reputation safeguarding',
    ],
    bg: 'bg-[#0E0E0E]',
    border: 'border-[#B08D57]/80',
    textColor: 'text-[#F5F0E6]',
    accentColor: '#B08D57',
    icon: <Scale className="w-6 h-6 text-[#B08D57]" />,
  },
  {
    id: 'pillar-4',
    number: '04',
    category: 'PILLAR IV',
    title: 'Biblical Stewardship Integration',
    subtitle: 'Aligning enterprise growth with timeless kingdom principles',
    bullets: [
      'Executive ethics & integrity charter design',
      'Employee care, generous compensation, & culture models',
      'Long-term generational wealth transfer & legacy mapping',
    ],
    bg: 'bg-[#181818]',
    border: 'border-[#B08D57]',
    textColor: 'text-[#F5F0E6]',
    accentColor: '#B08D57',
    icon: <Compass className="w-6 h-6 text-[#B08D57]" />,
  },
];

interface StickyStackingCardsProps {
  onOpenConsultation?: () => void;
}

export const StickyStackingCards: React.FC<StickyStackingCardsProps> = ({ onOpenConsultation }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length === 0) return;

    // Set initial sticky position offsets and scale/opacity triggers
    const ctx = gsap.context(() => {
      cards.forEach((card, index) => {
        if (index < cards.length - 1) {
          const nextCard = cards[index + 1];
          gsap.to(card, {
            scale: 0.95 - index * 0.015,
            opacity: 0.45,
            force3D: true,
            ease: 'none',
            scrollTrigger: {
              trigger: nextCard,
              start: 'top 75%',
              end: 'top 25%',
              scrub: true,
              fastScrollEnd: true,
            },
          });
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 px-6 md:px-12 bg-[#0A0A0A] text-[#F5F0E6] relative border-t border-[#F5F0E6]/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#B08D57]" />
            <span className="text-[10px] uppercase tracking-widest-plus font-mono text-[#B08D57] font-semibold">
              Interactive Stacked Pillars
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight text-[#F5F0E6]">
            Four Core Advisory Pillars Stacked for Total Defense
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#F5F0E6]/70 font-light leading-relaxed">
            Scroll down to explore how each practice area stacks systematically to protect your enterprise, optimize capital, and maintain biblical integrity.
          </p>
        </div>

        {/* Stacked Cards Container */}
        <div ref={containerRef} className="space-y-8 relative">
          {STACK_CARDS.map((card, idx) => (
            <div
              key={card.id}
              ref={(el) => { cardsRef.current[idx] = el; }}
              className={`sticky top-28 p-8 md:p-12 ${card.bg} border ${card.border} rounded-[4px] shadow-2xl transition-all duration-300 transform-gpu`}
              style={{ top: `${100 + idx * 24}px` }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#F5F0E6]/10 mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#0A0A0A] border border-[#B08D57]/40 rounded-[4px]">
                    {card.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest-plus text-[#B08D57] font-bold">
                        {card.category}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-[#F5F0E6] font-normal">
                      {card.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-mono text-3xl text-[#B08D57] font-light opacity-80">
                    {card.number}
                  </span>
                </div>
              </div>

              <p className="text-sm md:text-base text-[#F5F0E6]/80 font-light mb-8 max-w-2xl leading-relaxed">
                {card.subtitle}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {card.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="p-4 bg-[#0A0A0A] border border-[#F5F0E6]/10 rounded-[4px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B08D57] shrink-0 mt-2" />
                    <span className="text-xs text-[#F5F0E6]/90 font-light leading-relaxed">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#F5F0E6]/10 text-xs font-mono">
                <span className="text-[#F5F0E6]/50">Laiming Integrated Advisory Model</span>
                {onOpenConsultation && (
                  <button
                    onClick={onOpenConsultation}
                    className="flex items-center gap-2 text-[#B08D57] font-bold hover:underline focus:outline-hidden"
                  >
                    <span>Request Pillar Briefing</span>
                    <ArrowRight className="w-4 h-4 text-[#B08D57]" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
