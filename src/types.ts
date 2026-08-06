export type PageView = 'home' | 'about' | 'services' | 'scope' | 'insights' | 'contact';

export interface ServiceDetail {
  id: string;
  title: string;
  category: 'primary' | 'supporting';
  tagline: string;
  description: string;
  items: string[];
  iconName: string;
}

export interface ScopePhase {
  phase: number;
  title: string;
  timeframe: string;
  summary: string;
  activities: string[];
  deliverables: string;
}

export interface ValueItem {
  name: string;
  scriptureReference?: string;
  definition: string;
  application: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
}

export interface ConsultationBooking {
  serviceType: string;
  date: string;
  timeSlot: string;
  name: string;
  companyName: string;
  email: string;
  phone: string;
  revenueRange: string;
  notes: string;
}

export interface AuditAnswers {
  companyType: string;
  annualRevenue: string;
  hasInsuranceReview: string;
  facingFinancingNeed: string;
  primaryConcern: string;
}
