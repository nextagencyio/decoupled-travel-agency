/**
 * Typed client generated for the travel agency schema.
 *
 * Run `npx decoupled-cli schema sync` to regenerate after schema changes.
 */

import type { DecoupledClient } from 'decoupled-client'
import type { DrupalNode } from 'decoupled-client'
import type { QueryOptions } from 'decoupled-client'

// Placeholder types
export type ContentNode = DrupalNode
export type ContentTypeName = string

export interface ContentTypeMap {
  [key: string]: DrupalNode
}

export interface TypedClient {
  getEntries<K extends ContentTypeName>(type: K, options?: QueryOptions): Promise<DrupalNode[]>
  getEntry<K extends ContentTypeName>(type: K, id: string): Promise<DrupalNode | null>
  getEntryByPath(path: string): Promise<ContentNode | null>
  raw<T = any>(query: string, variables?: Record<string, any>): Promise<T>
}

const ROUTE_QUERY = `
  query ($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage { __typename id title path body { processed } }
          ... on NodeHomepage {
            __typename id title path
            heroTitle heroSubtitle
            heroDescription { processed }
            statsItems { ... on ParagraphStatItem { id number label } }
            featuredItemsTitle
            ctaTitle ctaDescription { processed }
            ctaPrimary ctaSecondary
          }
          ... on NodeDestination {
            __typename id title path
            body { processed }
            region { ... on TermInterface { id name } }
            country bestTimeToVisit highlights
            image { url alt width height variations(styles: [LARGE, MEDIUM]) { name url width height } }
            featured
          }
          ... on NodePackage {
            __typename id title path
            body { processed }
            packageType { ... on TermInterface { id name } }
            price duration inclusions
            image { url alt width height variations(styles: [LARGE, MEDIUM]) { name url width height } }
            featured
          }
          ... on NodeTestimonial {
            __typename id title path
            body { processed }
            travelerName tripDestination rating travelDate
            image { url alt width height variations(styles: [MEDIUM, THUMBNAIL]) { name url width height } }
          }
          ... on NodeBlogPost {
            __typename id title path
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

export function createTypedClient(client: DecoupledClient): TypedClient {
  return {
    async getEntries() { return [] },
    async getEntry() { return null },
    async getEntryByPath(path) {
      return client.queryByPath(path, ROUTE_QUERY)
    },
    async raw(query, variables) { return client.query(query, variables) },
  }
}
