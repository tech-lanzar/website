// Product-related type definitions

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: Feature[];
  website: string;
  category: 'hr' | 'storytelling' | 'development';
  status: 'active' | 'beta' | 'coming-soon';
  images: ProductImage[];
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface ProductImage {
  url: string;
  alt: string;
  type: 'hero' | 'screenshot' | 'logo';
}