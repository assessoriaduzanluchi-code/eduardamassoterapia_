export interface Stat {
  num: string;
  label: string;
}

export interface ProtocolStep {
  num: string;
  title: string;
  desc: string;
}

export interface Protocol {
  id: string;
  name: string;
  tag: string;
  sub: string;
  description: string;
  expectedResult: string;
  duration: string;
  indicatedFor: string;
  benefits: string[];
  stepsTitle?: string;
  steps?: ProtocolStep[];
  highlight?: string;
  priceNote: string;
  buttonText: string;
  whatsappLink?: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export interface ExperienceFeature {
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export interface BeforeAfterItem {
  tag: string;
  description: string;
  beforeLabel: string;
  afterLabel: string;
  beforeImageUrl?: string;
  afterImageUrl?: string;
}

export interface Testimonial {
  authorName: string;
  authorDetail: string;
  text: string;
  stars: number;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface SiteContent {
  header: {
    logoText: string;
    whatsappLink: string;
  };
  hero: {
    eyebrow: string;
    titleNormal1: string;
    titleItalic: string;
    titleNormal2: string;
    subtitle: string;
    buttonPrimaryText: string;
    buttonPrimaryLink: string;
    buttonSecondaryText: string;
    badge1: string;
    badge2: string;
    badge3: string;
  };
  sobre: {
    eyebrow: string;
    titleName: string;
    subtitle: string;
    paragraphs: string[];
    stats: Stat[];
    tags: string[];
  };
  protocolos: {
    headerEyebrow: string;
    headerTitleNormal: string;
    headerTitleItalic: string;
    headerDescription: string;
    list: Protocol[];
  };
  beneficios: {
    eyebrow: string;
    titleNormal: string;
    titleItalic: string;
    description: string;
    list: Benefit[];
  };
  experiencia: {
    eyebrow: string;
    titleNormal: string;
    titleItalic: string;
    description: string;
    features: ExperienceFeature[];
  };
  antesDepois: {
    eyebrow: string;
    titleNormal: string;
    description: string;
    list: BeforeAfterItem[];
  };
  depoimentos: {
    eyebrow: string;
    titleNormal: string;
    titleItalic: string;
    list: Testimonial[];
    googleReviewText: string;
    googleReviewLink: string;
  };
  faq: {
    eyebrow: string;
    titleNormal: string;
    list: FaqItem[];
  };
  cta: {
    eyebrow: string;
    titleNormal: string;
    description: string;
    buttonText: string;
    whatsappLink: string;
    address: string;
    mapLink: string;
  };
  footer: {
    desc: string;
    socialInstagram: string;
    socialWhatsApp: string;
    socialMaps: string;
  };
}
