// Auto-generated TypeScript types from Drupal GraphQL schema.
// Run `decoupled-cli schema sync` to regenerate.

export interface NodeBlogPost {
  id: string;
  authorName: string;
  body: { value: string; summary?: string };
  category: any[];
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  title: string;
}

export interface NodeDestination {
  id: string;
  bestTimeToVisit: string;
  body: { value: string; summary?: string };
  country: string;
  featured: boolean;
  highlights: string[];
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  region: any[];
  title: string;
}

export interface NodeHomepage {
  id: string;
  ctaDescription: { value: string };
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTitle: string;
  featuredItemsTitle: string;
  heroDescription: { value: string };
  heroSubtitle: string;
  heroTitle: string;
  path: string;
  statsItems: any[];
  title: string;
}

export interface ParagraphStatItem {
  id: string;
  label: string;
  number: string;
}

export interface NodePackage {
  id: string;
  body: { value: string; summary?: string };
  duration: string;
  featured: boolean;
  image: { url: string; alt: string; width: number; height: number };
  inclusions: string[];
  packageType: any[];
  path: string;
  price: string;
  title: string;
}

export interface NodePage {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  title: string;
}

export interface NodeTestimonial {
  id: string;
  body: { value: string; summary?: string };
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  rating: string;
  title: string;
  travelDate: string;
  travelerName: string;
  tripDestination: string;
}
