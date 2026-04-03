import { gql as apolloGql } from '@apollo/client'

// Tagged template that returns the query string (for server-side client.raw() calls)
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription { processed }
        statsItems {
          ... on ParagraphStatItem { id number label }
        }
        featuredItemsTitle
        ctaTitle
        ctaDescription { processed }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

export const GET_DESTINATIONS = gql`
  query GetDestinations($first: Int = 20) {
    nodeDestinations(first: $first, sortKey: TITLE) {
      nodes {
        id title path
        ... on NodeDestination {
          body { processed summary }
          region { ... on TermInterface { id name } }
          country
          bestTimeToVisit
          highlights
          image { url alt width height variations(styles: [LARGE, MEDIUM]) { name url width height } }
          featured
        }
      }
    }
  }
`

export const GET_DESTINATION_BY_PATH = gql`
  query GetDestinationByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeDestination {
            id title path
            body { processed }
            region { ... on TermInterface { id name } }
            country
            bestTimeToVisit
            highlights
            image { url alt width height variations(styles: [LARGE, MEDIUM]) { name url width height } }
            featured
          }
        }
      }
    }
  }
`

export const GET_PACKAGES = gql`
  query GetPackages($first: Int = 20) {
    nodePackages(first: $first, sortKey: TITLE) {
      nodes {
        id title path
        ... on NodePackage {
          body { processed summary }
          packageType { ... on TermInterface { id name } }
          price
          duration
          inclusions
          image { url alt width height variations(styles: [LARGE, MEDIUM]) { name url width height } }
          featured
        }
      }
    }
  }
`

export const GET_PACKAGE_BY_PATH = gql`
  query GetPackageByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePackage {
            id title path
            body { processed }
            packageType { ... on TermInterface { id name } }
            price
            duration
            inclusions
            image { url alt width height variations(styles: [LARGE, MEDIUM]) { name url width height } }
            featured
          }
        }
      }
    }
  }
`

export const GET_TESTIMONIALS = gql`
  query GetTestimonials($first: Int = 20) {
    nodeTestimonials(first: $first, sortKey: CREATED_AT) {
      nodes {
        id title path
        ... on NodeTestimonial {
          body { processed }
          travelerName
          tripDestination
          rating
          image { url alt width height variations(styles: [MEDIUM, THUMBNAIL]) { name url width height } }
        }
      }
    }
  }
`

export const GET_TESTIMONIAL_BY_PATH = gql`
  query GetTestimonialByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeTestimonial {
            id title path
            body { processed }
            travelerName
            tripDestination
            rating
            travelDate
            image { url alt width height variations(styles: [LARGE, MEDIUM]) { name url width height } }
          }
        }
      }
    }
  }
`

export const GET_BLOG_POSTS = gql`
  query GetBlogPosts($first: Int = 20) {
    nodeBlogPosts(first: $first, sortKey: CREATED_AT) {
      nodes {
        id title path
        created { timestamp }
        ... on NodeBlogPost {
          body { processed summary }
          authorName
          category { ... on TermInterface { id name } }
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
        }
      }
    }
  }
`

export const GET_BLOG_POST_BY_PATH = gql`
  query GetBlogPostByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeBlogPost {
            id title path
            created { timestamp }
            body { processed }
            authorName
            category { ... on TermInterface { id name } }
            image { url alt width height variations(styles: [LARGE, MEDIUM]) { name url width height } }
          }
        }
      }
    }
  }
`

export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage { id title body { processed } }
          ... on NodeDestination {
            id title path body { processed }
            region { ... on TermInterface { id name } }
            country
            bestTimeToVisit
            highlights
            image { url alt width height }
            featured
          }
          ... on NodePackage {
            id title path body { processed }
            packageType { ... on TermInterface { id name } }
            price duration
            inclusions
            image { url alt width height }
            featured
          }
          ... on NodeTestimonial {
            id title path body { processed }
            travelerName tripDestination rating
            image { url alt width height }
          }
          ... on NodeBlogPost {
            id title path body { processed }
            created { timestamp }
            authorName
            category { ... on TermInterface { id name } }
            image { url alt width height }
          }
          ... on NodeHomepage {
            id title heroTitle heroSubtitle
            heroDescription { processed }
            statsItems { ... on ParagraphStatItem { id number label } }
            featuredItemsTitle
            ctaTitle ctaDescription { processed }
            ctaPrimary ctaSecondary
          }
        }
      }
    }
  }
`

// Apollo DocumentNode queries for client-side useQuery() hooks
export const GET_FEATURED_DESTINATIONS = apolloGql`
  query GetFeaturedDestinations {
    nodeDestinations(first: 3, sortKey: TITLE) {
      nodes {
        id title path
        ... on NodeDestination {
          region { ... on TermInterface { id name } }
          bestTimeToVisit
          image { url alt variations(styles: [MEDIUM]) { name url width height } }
          featured
        }
      }
    }
  }
`

export const GET_FEATURED_BLOG_POSTS = apolloGql`
  query GetFeaturedBlogPosts {
    nodeBlogPosts(first: 3, sortKey: CREATED_AT) {
      nodes {
        id title path
        created { timestamp }
        ... on NodeBlogPost {
          body { summary }
          image { url alt variations(styles: [MEDIUM, THUMBNAIL]) { name url width height } }
          category { ... on TermInterface { id name } }
        }
      }
    }
  }
`

export const GET_FEATURED_TESTIMONIALS = apolloGql`
  query GetFeaturedTestimonials {
    nodeTestimonials(first: 3, sortKey: CREATED_AT) {
      nodes {
        id title path
        ... on NodeTestimonial {
          body { processed }
          travelerName tripDestination rating
          image { url alt variations(styles: [THUMBNAIL]) { name url width height } }
        }
      }
    }
  }
`
