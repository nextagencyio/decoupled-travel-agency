'use client'

import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { GET_FEATURED_DESTINATIONS } from '@/lib/queries'
import { DrupalHomepage, DrupalDestination } from '@/lib/types'
import { MapPin, ArrowRight } from 'lucide-react'
import ResponsiveImage from './ResponsiveImage'

interface DestinationsPreviewProps { homepageContent?: DrupalHomepage | null }
interface FeaturedDestinationsData { nodeDestinations: { nodes: DrupalDestination[] } }

export default function DestinationsPreview({ homepageContent }: DestinationsPreviewProps) {
  const { data, loading, error } = useQuery<FeaturedDestinationsData>(GET_FEATURED_DESTINATIONS)
  const destinations = data?.nodeDestinations?.nodes || []
  const sectionTitle = homepageContent?.featuredDestinationsTitle || 'Popular Destinations'

  if (loading) return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{sectionTitle}</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1,2,3].map(i => (<div key={i} className="bg-white rounded-xl shadow-sm animate-pulse"><div className="h-48 bg-gray-200 rounded-t-xl" /><div className="p-6"><div className="h-4 bg-gray-200 rounded w-1/4 mb-3" /><div className="h-6 bg-gray-200 rounded w-3/4 mb-3" /><div className="h-4 bg-gray-200 rounded w-full" /></div></div>))}
        </div>
      </div>
    </section>
  )

  if (error || destinations.length === 0) return null

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{sectionTitle}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Explore our hand-picked destinations that offer unforgettable experiences.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map(dest => (
            <Link key={dest.id} href={dest.path || `/destinations/${dest.id}`} className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-cyan-600 to-teal-700">
                {dest.image?.url ? <ResponsiveImage src={dest.image.url} alt={dest.image.alt || dest.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" variations={dest.image.variations} targetWidth={400} /> : <div className="absolute inset-0 flex items-center justify-center"><MapPin className="w-16 h-16 text-white/50" /></div>}
                {dest.featured && <div className="absolute top-4 right-4 bg-amber-500 text-cyan-900 px-3 py-1 rounded-full text-sm font-semibold">Featured</div>}
              </div>
              <div className="p-6">
                {dest.region && dest.region.length > 0 && <div className="text-sm text-cyan-700 font-medium mb-2">{dest.region[0].name}</div>}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-700 transition-colors">{dest.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  {dest.bestSeason && <div className="flex items-center gap-1"><MapPin className="w-4 h-4" /><span>{dest.bestSeason}</span></div>}
                </div>
                <div className="flex items-center text-cyan-700 font-medium group-hover:gap-2 transition-all">Learn more<ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" /></div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/destinations" className="inline-flex items-center px-8 py-4 bg-cyan-800 text-white rounded-lg hover:bg-cyan-700 transition-colors font-semibold">View All Destinations<ArrowRight className="w-5 h-5 ml-2" /></Link>
        </div>
      </div>
    </section>
  )
}
