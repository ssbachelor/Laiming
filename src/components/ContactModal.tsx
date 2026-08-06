import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ConsultationBooking } from '../types';
import { X, Calendar, Clock, CheckCircle2, Shield, ArrowRight, Phone, Mail } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
  prefilledAudit?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  prefilledService,
  prefilledAudit,
}) => {
  const [step, setStep] = useState<'details' | 'calendar' | 'confirmation'>('details');
  const [formData, setFormData] = useState<ConsultationBooking>({
    serviceType: prefilledService || 'Liability & Insurance Navigation',
    date: '2026-08-04',
    timeSlot: '10:00 AM EST',
    name: '',
    companyName: '',
    email: '',
    phone: '',
    revenueRange: '$5M - $15M',
    notes: prefilledAudit || '',
  });

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, serviceType: prefilledService }));
    }
    if (prefilledAudit) {
      setFormData((prev) => ({ ...prev, notes: prefilledAudit }));
    }
  }, [prefilledService, prefilledAudit]);

  const timeSlots = [
    '09:00 AM EST',
    '10:30 AM EST',
    '01:00 PM EST',
    '02:30 PM EST',
    '04:00 PM EST',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('confirmation');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#F5F0E6] text-[#0A0A0A] w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 sm:p-10 border border-[#0A0A0A] relative shadow-2xl rounded-[4px]"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#0A0A0A]/60 hover:text-[#0A0A0A] border border-[#0A0A0A]/10 rounded-[2px]"
        >
          <X className="w-5 h-5" />
        </button>

        {step !== 'confirmation' ? (
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-4 h-4 text-[#B08D57]" />
              <span className="text-[10px] uppercase tracking-widest-plus font-mono text-[#B08D57] font-bold">
                Client Advisory Scheduler
              </span>
            </div>

            <h2 className="font-serif text-3xl font-normal text-[#0A0A0A] mb-2">
              Schedule Initial Consultation
            </h2>

            <p className="text-xs text-[#0A0A0A]/70 font-light mb-6">
              Connect directly with an executive advisor to discuss your company's liability, financing, or operational posture.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#0A0A0A]/70 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#EFE9DD] border border-[#0A0A0A]/20 p-2.5 text-sm text-[#0A0A0A] focus:border-[#B08D57] focus:outline-hidden rounded-[4px]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#0A0A0A]/70 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Heritage Enterprises"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full bg-[#EFE9DD] border border-[#0A0A0A]/20 p-2.5 text-sm text-[#0A0A0A] focus:border-[#B08D57] focus:outline-hidden rounded-[4px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#0A0A0A]/70 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="david@heritage.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#EFE9DD] border border-[#0A0A0A]/20 p-2.5 text-sm text-[#0A0A0A] focus:border-[#B08D57] focus:outline-hidden rounded-[4px]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#0A0A0A]/70 mb-1">
                    Direct Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 234-5678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#EFE9DD] border border-[#0A0A0A]/20 p-2.5 text-sm text-[#0A0A0A] focus:border-[#B08D57] focus:outline-hidden rounded-[4px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#0A0A0A]/70 mb-1">
                    Primary Service Focus
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-[#EFE9DD] border border-[#0A0A0A]/20 p-2.5 text-sm text-[#0A0A0A] focus:border-[#B08D57] focus:outline-hidden rounded-[4px]"
                  >
                    <option value="Liability & Insurance Navigation">Liability & Insurance Navigation</option>
                    <option value="Financing & Capital Strategy">Financing & Capital Strategy</option>
                    <option value="Business Operations & Compliance">Business Operations & Compliance</option>
                    <option value="Strategic Advisory">Strategic Advisory</option>
                    <option value="Faith-Aligned Leadership Consulting">Faith-Aligned Leadership Consulting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#0A0A0A]/70 mb-1">
                    Annual Revenue Range
                  </label>
                  <select
                    value={formData.revenueRange}
                    onChange={(e) => setFormData({ ...formData, revenueRange: e.target.value })}
                    className="w-full bg-[#EFE9DD] border border-[#0A0A0A]/20 p-2.5 text-sm text-[#0A0A0A] focus:border-[#B08D57] focus:outline-hidden rounded-[4px]"
                  >
                    <option value="Under $2M">Under $2M</option>
                    <option value="$2M - $5M">$2M – $5M</option>
                    <option value="$5M - $15M">$5M – $15M</option>
                    <option value="$15M - $50M">$15M – $50M</option>
                    <option value="$50M+">$50M+</option>
                  </select>
                </div>
              </div>

              {/* Date & Time Slot Selection */}
              <div className="pt-2">
                <label className="block text-xs font-mono uppercase text-[#0A0A0A]/70 mb-2">
                  Select Preferred Date & Time Slot
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div className="flex items-center gap-2 p-2.5 bg-[#EFE9DD] border border-[#0A0A0A]/20 rounded-[4px]">
                    <Calendar className="w-4 h-4 text-[#B08D57]" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="bg-transparent text-xs text-[#0A0A0A] focus:outline-hidden w-full"
                    />
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-[#EFE9DD] border border-[#0A0A0A]/20 rounded-[4px]">
                    <Clock className="w-4 h-4 text-[#B08D57]" />
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="bg-transparent text-xs text-[#0A0A0A] focus:outline-hidden w-full"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#0A0A0A]/70 mb-1">
                  Brief Overview / Specific Questions (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Share any key context or current challenges..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#EFE9DD] border border-[#0A0A0A]/20 p-2.5 text-xs text-[#0A0A0A] focus:border-[#B08D57] focus:outline-hidden rounded-[4px]"
                />
              </div>

              <div className="pt-4 border-t border-[#0A0A0A]/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#0A0A0A]/50">
                  Strict Client Confidentiality Guaranteed
                </span>
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#0A0A0A] text-[#F5F0E6] text-[10px] uppercase tracking-widest-plus font-bold flex items-center gap-2 border border-[#0A0A0A] hover:border-[#B08D57] transition-colors rounded-[4px]"
                  id="confirm-booking-btn"
                >
                  <span>Confirm Consultation Request</span>
                  <ArrowRight className="w-4 h-4 text-[#B08D57]" />
                </button>
              </div>

            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-[#0A0A0A] border border-[#B08D57] mx-auto flex items-center justify-center mb-6 rounded-[4px]">
              <CheckCircle2 className="w-8 h-8 text-[#B08D57]" />
            </div>

            <h3 className="font-serif text-3xl font-normal text-[#0A0A0A] mb-3">
              Consultation Scheduled
            </h3>

            <p className="text-sm text-[#0A0A0A]/80 font-light max-w-md mx-auto leading-relaxed mb-6">
              Thank you, <strong className="font-semibold text-[#0A0A0A]">{formData.name}</strong>. Your initial consultation request for <strong className="text-[#B08D57]">{formData.serviceType}</strong> on <strong className="font-mono text-[#0A0A0A]">{formData.date} at {formData.timeSlot}</strong> has been logged.
            </p>

            <div className="p-4 bg-[#EFE9DD] border border-[#0A0A0A]/10 max-w-sm mx-auto text-left text-xs font-mono text-[#0A0A0A]/80 mb-8 space-y-1 rounded-[4px]">
              <div><span className="text-[#B08D57]">Company:</span> {formData.companyName}</div>
              <div><span className="text-[#B08D57]">Contact Email:</span> {formData.email}</div>
              <div><span className="text-[#B08D57]">Confidentiality:</span> Protected</div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3.5 bg-[#0A0A0A] text-[#F5F0E6] text-[10px] uppercase tracking-widest-plus font-bold rounded-[4px]"
            >
              Return to Website
            </button>
          </div>
        )}

      </motion.div>
    </div>
  );
};
