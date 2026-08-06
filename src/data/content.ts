import { ServiceDetail, ScopePhase, ValueItem, Article } from '../types';

export const BRAND_INFO = {
  name: 'Laiming Strategies',
  tagline: 'Christian advisory and execution services',
  positioning: 'Laiming Strategies exists to help Christian companies operate with integrity and stability — primarily by navigating liability/insurance exposure and securing sound financing, alongside the broader operational groundwork businesses need to run well.',
  voice: 'Trustworthy, precise, quietly confident. Faith-informed but professional.',
  feel: 'Minimalist, sophisticated, restrained luxury.'
};

export const MISSION_STATEMENT = "To equip Christian businesses with the risk protection, capital access, and operational strategy they need to grow with confidence — guided by principles of honesty, diligence, and service to others.";

export const COMPANY_OVERVIEW = "Laiming Strategies is a Christian advisory and execution firm that helps Christian-owned and Christian-led companies navigate liability exposure, secure sound financing, and manage the essential operational functions a business needs to run well. We combine sharp business judgment with a faith-grounded commitment to integrity, stewardship, and service — delivering counsel our clients can trust and execution they can rely on.";

export const SERVICES_LIST: ServiceDetail[] = [
  {
    id: 'liability-insurance',
    title: 'Liability & Insurance Navigation',
    category: 'primary',
    tagline: 'Primary Pillar: Comprehensive protection & exposure management',
    description: 'Protecting corporate assets and leadership through rigorous risk evaluation, contract scrutiny, and coverage optimization.',
    items: [
      'Liability exposure assessment and mitigation planning',
      'Insurance coverage review and gap analysis (advisory, non-underwriting)',
      'Contract and agreement risk review',
      'Vendor/partner risk evaluation',
      'Crisis and dispute navigation support'
    ],
    iconName: 'ShieldCheck'
  },
  {
    id: 'financing-capital',
    title: 'Financing & Capital Strategy',
    category: 'primary',
    tagline: 'Primary Pillar: Value-aligned capital structuring & lender relations',
    description: 'Securing optimal capitalization structures that respect cash flow constraints and organizational values.',
    items: [
      'Financing needs assessment and capital structure guidance',
      'Preparation and positioning for loans, lines of credit, or investment',
      'Lender/investor relationship navigation',
      'Cash flow and capital planning support',
      'Evaluation of financing options aligned with the client\'s values and risk tolerance'
    ],
    iconName: 'TrendingUp'
  },
  {
    id: 'business-operations',
    title: 'Business Operations & Compliance',
    category: 'supporting',
    tagline: 'Supporting Pillar: Frameworks & execution for operational excellence',
    description: 'Building durable internal systems, compliance documentation, and workflows designed to scale cleanly.',
    items: [
      'Policy and procedure development',
      'Regulatory landscape orientation (industry-specific)',
      'Compliance workflow build-out and documentation systems',
      'Process design and hands-on implementation support'
    ],
    iconName: 'Layers'
  },
  {
    id: 'strategic-advisory',
    title: 'Strategic Advisory',
    category: 'supporting',
    tagline: 'Supporting Pillar: Navigating high-stakes business decisions',
    description: 'Providing objective, experienced counsel during critical junctures, expansion phases, and corporate restructuring.',
    items: [
      'Strategic planning and goal-setting facilitation',
      'Business structure and entity guidance',
      'Growth and scaling strategy',
      'Decision-support for high-stakes business choices'
    ],
    iconName: 'Compass'
  },
  {
    id: 'faith-leadership',
    title: 'Faith-Aligned Leadership Consulting',
    category: 'supporting',
    tagline: 'Supporting Pillar: Ethical frameworks & mission stewardship',
    description: 'Cultivating leadership cultures rooted in biblical principles of honesty, accountability, and servant-leadership.',
    items: [
      'Values-based leadership and culture development',
      'Ethical decision-making frameworks',
      'Team alignment around mission and integrity'
    ],
    iconName: 'HeartHandshake'
  }
];

export const DIFFERENTIATORS = [
  {
    title: 'Two-pillar core expertise',
    description: 'Deep, focused capability in both liability/insurance navigation and financing — the two areas most likely to make or break a growing business.'
  },
  {
    title: 'Advisory AND execution',
    description: 'We don\'t just hand over a report — we help implement the plan alongside your leadership team.'
  },
  {
    title: 'Integrity-first approach',
    description: 'Every recommendation, including financing options, is filtered through a standard of honesty and stewardship.'
  },
  {
    title: 'Built for Christian businesses',
    description: 'We understand the values, priorities, and pressures unique to Christian-owned companies.'
  },
  {
    title: 'Relationship-based engagement',
    description: 'We work as an embedded partner, not a one-time consultant.'
  }
];

export const CLIENT_PROFILE_ITEMS = [
  'Christian-owned or Christian-led small to mid-sized businesses ($2M – $50M revenue focus)',
  'Companies facing liability, insurance, or compliance complexity',
  'Companies seeking financing or capital strategy support',
  'Business owners seeking aligned, values-driven counsel with real execution'
];

export const SCOPE_PHASES: ScopePhase[] = [
  {
    phase: 1,
    title: 'DISCOVERY & ASSESSMENT',
    timeframe: 'Week 1–2',
    summary: 'Comprehensive evaluation of existing organizational exposure, capital positioning, and operational posture.',
    activities: [
      'Initial consultation and needs assessment',
      'Review of current liability exposure, insurance coverage, financing position, and business structure',
      'Identification of priority risk areas, financing needs, and strategic goals'
    ],
    deliverables: 'Findings summary and recommended engagement scope'
  },
  {
    phase: 2,
    title: 'STRATEGY & PLANNING',
    timeframe: 'Week 2–4',
    summary: 'Synthesizing discovery insights into actionable risk mitigation roadmaps and capital acquisition pathways.',
    activities: [
      'Development of liability mitigation plan and/or financing strategy',
      'Prioritization of action items across insurance, capital, and operations'
    ],
    deliverables: 'Written strategy/advisory report with clear recommendations'
  },
  {
    phase: 3,
    title: 'EXECUTION SUPPORT',
    timeframe: 'Ongoing / Defined Term',
    summary: 'Direct embedded participation in execution, lender positioning, contract adjustment, and operational rollout.',
    activities: [
      'Implementation of insurance/liability recommendations',
      'Support through financing applications, lender/investor conversations, and capital structuring',
      'Hands-on project management through completion',
      'Regular check-ins and progress reporting'
    ],
    deliverables: 'Implemented systems/processes, secured financing pathway, and supporting documentation'
  },
  {
    phase: 4,
    title: 'ONGOING ADVISORY',
    timeframe: 'Optional / Retainer',
    summary: 'Sustained strategic oversight to maintain structural resilience and guide emerging corporate opportunities.',
    activities: [
      'Continued liability and insurance monitoring',
      'Ongoing financing and capital strategy support',
      'Periodic strategy reviews',
      'On-call support for emerging issues'
    ],
    deliverables: 'Monthly/quarterly advisory sessions and updates'
  }
];

export const CORE_VALUES: ValueItem[] = [
  {
    name: 'Integrity',
    definition: 'Uncompromising adherence to truthfulness and moral uprightness in every transaction.',
    application: 'We provide transparent counsel, clear fee structures, and honest appraisals even when the answer is difficult.'
  },
  {
    name: 'Stewardship',
    definition: 'Managing resources, capital, and organizational trust as faithful custodians.',
    application: 'We treat our clients\' capital and corporate exposure with the same vigilance we would demand for our own enterprise.'
  },
  {
    name: 'Diligence',
    definition: 'Thorough, painstaking attention to detail in strategic review and operational execution.',
    application: 'We leave no contract unexamined, no coverage gap unanalyzed, and no financing term unverified.'
  },
  {
    name: 'Service',
    definition: 'Directing professional excellence toward the flourishing of our clients, their employees, and their communities.',
    application: 'We work as humble, embedded partners focused on empowering leadership rather than creating dependency.'
  }
];

export const INSIGHTS_ARTICLES: Article[] = [
  {
    id: 'christian-stewardship-capital',
    title: 'Biblical Stewardship in Corporate Debt & Capital Structuring',
    category: 'Financing & Capital',
    date: 'July 14, 2026',
    readTime: '6 min read',
    excerpt: 'Navigating leverage without compromising corporate integrity or liquidity resilience during volatile credit cycles.',
    content: [
      'When Christian business owners evaluate capital expansion, debt is often viewed through extreme lenses — either avoided entirely out of fear or adopted recklessly during growth spurts.',
      'Sound biblical stewardship demands a nuanced approach: evaluating debt coverage ratios, covenant structures, and lender alignment against long-term operational sustainability.',
      'In this advisory note, we unpack key risk metrics for commercial loans and lines of credit, ensuring Christian enterprise leaders secure financing that preserves governance freedom and operational stability.'
    ]
  },
  {
    id: 'liability-gap-analysis',
    title: 'The Unseen Liability: Where Mid-Market Insurance Policies Fail',
    category: 'Liability & Insurance',
    date: 'June 28, 2026',
    readTime: '8 min read',
    excerpt: 'A review of standard commercial general liability (CGL) exclusions and how embedded indemnification clauses leave Christian firms exposed.',
    content: [
      'Many growing Christian businesses carry standard CGL and Umbrella policies assuming comprehensive protection. However, fine-print exclusions regarding sub-contractor default, officer liability, and cyber-breach indemnification often create multi-million dollar vulnerabilities.',
      'By performing an objective, non-underwriting policy audit, organizations can identify coverage gaps before crisis strikes and negotiate tailored endorsements with carriers.',
      'We examine five critical contractual exclusions every Christian executive team must audit quarterly.'
    ]
  },
  {
    id: 'advisory-plus-execution',
    title: 'Why Traditional Consulting Fails Faith-Led Executive Teams',
    category: 'Business Operations',
    date: 'May 19, 2026',
    readTime: '5 min read',
    excerpt: 'The critical difference between receiving a static binder of recommendations and having an execution partner in the trenches.',
    content: [
      'Strategic advice without operational execution leads to organizational fatigue. Business leaders frequently pay steep consulting fees only to be handed a 100-page diagnostic document with no internal resources to implement it.',
      'At Laiming Strategies, our two-pillar paradigm combines high-level strategic counsel with hands-on execution. We work alongside founders to adjust contract templates, interface with commercial lenders, and build compliance workflows.'
    ]
  }
];

export const TESTIMONIALS = [
  {
    quote: "Laiming Strategies brought extraordinary clarity to our commercial debt refinancing. They identified hidden covenants that would have restricted our growth and guided us to a banking partner aligned with our values.",
    author: "Jonathan Miller",
    role: "CEO & Co-Founder",
    company: "Heritage Timber Co."
  },
  {
    quote: "As our manufacturing business scaled beyond $15M, our liability exposure multiplied. Laiming Strategies conducted a thorough contract and insurance audit that uncovered critical coverage gaps. Their execution support was flawless.",
    author: "David Vance",
    role: "President",
    company: "Apex Precision Engineering"
  },
  {
    quote: "Finding advisors who understand both complex business operations and our commitment to Christian stewardship is rare. Laiming Strategies is the counsel we trust with our most critical decisions.",
    author: "Rachel & Marcus Thorne",
    role: "Managing Directors",
    company: "Covenant Distribution Group"
  }
];
