// Contact and communication type definitions

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  inquiryType: 'general' | 'product' | 'partnership' | 'support';
}

// Import types from company module
import type { Address, SocialLink } from './company';

export interface ContactInfo {
  email: string;
  phone: string;
  address: Address;
  businessHours: BusinessHours;
  socialMedia: SocialLink[];
}

export interface BusinessHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday?: string;
  sunday?: string;
}

// Re-export from company types for convenience
export type { Address, SocialLink } from './company';