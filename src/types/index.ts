export interface MachineCategory {
  slug: string;
  name: string;
  short: string;
  image: string;
}

export interface Machine {
  slug: string;
  name: string;
  model: string;
  category: string;
  condition: 'New' | 'Used';
  available: boolean;
  capacity: string;
  capacityValue: number;
  price: number | null;
  power: string;
  dimensions: string;
  description: string;
  images: string[];
  specs: [string, string][];
  support: string;
}

export interface ServiceItem {
  title: string;
  desc: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  hours: string;
  facebook: string;
}
