export interface Project {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  technicalDecisions: {
    title: string;
    description: string;
  }[];
  testing: {
    summary: string;
    details: string[];
  };
  improvements: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  images: {
    src: string;
    alt: string;
  }[];
  architecture: {
    description: string;
    layers: {
      name: string;
      details: string;
    }[];
  };
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ProcessStepData {
  number: number;
  title: string;
  description: string;
}

export interface ContactConfig {
  name: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
  whatsappNumber: string | null;
  location: string;
  timezone: string;
  title: string;
}
