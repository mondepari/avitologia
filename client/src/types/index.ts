export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export interface CaseStudyProps {
  image: string;
  category: string;
  title: string;
  description: string;
  results: {
    conversion: string;
    costReduction: string;
    roi: string;
  };
}

export interface TestimonialProps {
  quote: string;
  author: {
    image: string;
    name: string;
    position: string;
  };
}

export interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
