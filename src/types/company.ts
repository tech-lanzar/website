// Company-related type definitions

export interface Company {
  name: string;
  tagline: string;
  description: string;
  founded: Date;
  headquarters: Address;
  leadership: Leader[];
  values: string[];
  phone: string;
  cin: string;
  email: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

export interface Leader {
  name: string;
  position: string;
  bio: string;
  image: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}