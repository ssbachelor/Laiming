import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { INSIGHTS_ARTICLES } from '../data/content';
import { Article } from '../types';
import { Clock, ArrowRight, X } from 'lucide-react';
import { GsapReveal, GsapStagger } from './GsapReveal';

export const InsightsSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  return (
    <section className="py-24 px-6 md:px-12 bg-[#F5F0E6] text-[#0A0A0A] relative border-t border-[#0A0A0A]/10" id="insights">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <GsapReveal effect="fade-up" className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#0A0A0A]/10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#B08D57]" />
              <span className="text-[10px] uppercase tracking-widest-plus font-mono text-[#B08D57] font-bold">
                Thought Leadership & Briefings
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#0A0A0A]">
              Advisory Insights & Analysis
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#0A0A0A]/70 font-light max-w-md">
            Articles and whitepapers on risk protection, capital stewardship, and operational execution for Christian business leaders.
          </p>
        </GsapReveal>

        {/* Articles Grid */}
        <GsapStagger effect="scale-up" stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSIGHTS_ARTICLES.map((art) => (
            <article
              key={art.id}
              onClick={() => setActiveArticle(art)}
              className="group cursor-pointer p-8 bg-[#EFE9DD] border border-[#0A0A0A]/10 hover:border-[#0A0A0A] transition-all duration-300 flex flex-col justify-between rounded-[4px]"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#B08D57] mb-4">
                  <span className="uppercase font-semibold">{art.category}</span>
                  <div className="flex items-center gap-1 opacity-70">
                    <Clock className="w-3 h-3" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-normal text-[#0A0A0A] group-hover:text-[#B08D57] transition-colors mb-4">
                  {art.title}
                </h3>

                <p className="text-xs text-[#0A0A0A]/75 font-light leading-relaxed mb-6">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#0A0A0A]/10 flex items-center justify-between text-xs font-mono">
                <span className="text-[#0A0A0A]/50">{art.date}</span>
                <span className="flex items-center gap-1 text-[#0A0A0A] font-medium group-hover:translate-x-1 transition-transform">
                  Read Briefing <ArrowRight className="w-3.5 h-3.5 text-[#B08D57]" />
                </span>
              </div>
            </article>
          ))}
        </GsapStagger>

        {/* Modal Article Reader */}
        <AnimatePresence>
          {activeArticle && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-[#F5F0E6] text-[#0A0A0A] w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8 sm:p-12 border border-[#0A0A0A] relative shadow-2xl rounded-[4px]"
              >
                <button
                  onClick={() => setActiveArticle(null)}
                  className="absolute top-6 right-6 p-2 text-[#0A0A0A]/60 hover:text-[#0A0A0A] border border-[#0A0A0A]/10 rounded-[2px]"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 text-xs font-mono text-[#B08D57] mb-4">
                  <span className="uppercase font-bold">{activeArticle.category}</span>
                  <span>•</span>
                  <span>{activeArticle.date}</span>
                  <span>•</span>
                  <span>{activeArticle.readTime}</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0A0A0A] mb-6">
                  {activeArticle.title}
                </h2>

                <div className="prose prose-stone max-w-none space-y-4 text-sm sm:text-base font-light text-[#0A0A0A]/85 leading-relaxed mb-8">
                  {activeArticle.content.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <div className="p-6 bg-[#EFE9DD] border border-[#0A0A0A]/10 flex items-center justify-between rounded-[4px]">
                  <div className="text-xs font-mono text-[#0A0A0A]/70">
                    Laiming Strategies Advisory Briefing Series
                  </div>
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="px-5 py-2.5 bg-[#0A0A0A] text-[#F5F0E6] text-[10px] uppercase tracking-widest-plus font-bold rounded-[4px]"
                  >
                    Close Briefing
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
