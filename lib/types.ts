// Base node type
export interface DrupalNode {
  id: string
  title: string
  path: string
  created: { timestamp: number }
  changed: { timestamp: number }
}

// Paragraph types
export interface DrupalStatItem {
  id: string
  number: string
  label: string
}

// Homepage
export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: { processed: string }
  statsItems?: DrupalStatItem[]
  featuredItemsTitle?: string
  ctaTitle?: string
  ctaDescription?: { processed: string }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: { nodes: DrupalHomepage[] }
}

// Destination
export interface DrupalDestination extends DrupalNode {
  body?: { processed: string; summary?: string }
  region?: DrupalTerm[]
  country?: string
  bestTimeToVisit?: string
  highlights?: string[]
  image?: DrupalImage
  featured?: boolean
}

export interface DestinationsData {
  nodeDestinations: { nodes: DrupalDestination[] }
}

// Package
export interface DrupalPackage extends DrupalNode {
  body?: { processed: string; summary?: string }
  packageType?: DrupalTerm[]
  price?: string
  duration?: string
  inclusions?: string[]
  image?: DrupalImage
  featured?: boolean
}

export interface PackagesData {
  nodePackages: { nodes: DrupalPackage[] }
}

// Testimonial
export interface DrupalTestimonial extends DrupalNode {
  body?: { processed: string }
  travelerName?: string
  tripDestination?: string
  rating?: string
  travelDate?: string
  image?: DrupalImage
}

export interface TestimonialsData {
  nodeTestimonials: { nodes: DrupalTestimonial[] }
}

// Blog Post
export interface DrupalBlogPost extends DrupalNode {
  body?: { processed: string; summary?: string }
  authorName?: string
  category?: DrupalTerm[]
  image?: DrupalImage
}

export interface BlogPostsData {
  nodeBlogPosts: { nodes: DrupalBlogPost[] }
}

// Basic Page
export interface DrupalPage extends DrupalNode {
  body?: { processed: string }
}

// Shared types
export interface DrupalImage {
  url: string
  alt?: string
  width?: number
  height?: number
  variations?: Array<{ name: string; url: string; width: number; height: number }>
}

export interface DrupalTerm {
  id: string
  name: string
  path?: string
}

export interface DrupalArticle extends DrupalNode {
  body?: { processed: string; summary?: string }
  image?: DrupalImage
  tags?: DrupalTerm[]
}

export interface ArticleTeaserData {
  nodeArticles: { nodes: DrupalArticle[] }
}

export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
