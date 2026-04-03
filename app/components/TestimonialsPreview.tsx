'use client'

import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { GET_FEATURED_TESTIMONIALS } from '@/lib/queries'
import { DrupalTestimonial } from '@/lib/types'
import { Star, ArrowRight, Quote } from 'lucide-react'
import ResponsiveImage from './ResponsiveImage'

interface FeaturedTestimonialsData { nodeTestimonials: { nodes: DrupalTestimonial[] } }

export default function TestimonialsPreview() {
  const { data, loading, error } = useQuery<FeaturedTestimonialsData>(GET_FEATURED_TESTIMONIALS)
  const testimonials = data?.nodeTestimonials?.nodes || []

  if (loading) return (
    <section className="py-16 md:py-20 bg-cyan-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Travelers Say</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map(i => (<div key={i} className="bg-white/10 rounded-xl p-6 animate-pulse"><div className="h-12 w-12 bg-white/20 rounded-full mb-4" /><div className="h-6 bg-white/20 rounded w-3/4 mb-2" /><div className="h-4 bg-white/20 rounded w-1/2" /></div>))}
        </div>
      </div>
    </section>
  )

  if (error || testimonials.length === 0) return null

  return (
    <section className="py-16 md:py-20 bg-cyan-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div><h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Travelers Say</h2><p className="text-lg text-cyan-200 max-w-2xl">Hear from travelers who have experienced our curated journeys.</p></div>
          <Link href="/testimonials" className="hidden md:flex items-center text-amber-400 hover:text-amber-300 font-medium">All Reviews<ArrowRight className="w-4 h-4 ml-1" /></Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <div key={t.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Quote className="w-8 h-8 text-amber-400 mb-4" />
              {t.body?.processed && <div className="text-cyan-100 mb-4 line-clamp-3" dangerouslySetInnerHTML={{ __html: t.body.processed }} />}
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/20">
                {t.image?.url ? <div className="w-10 h-10 rounded-full overflow-hidden"><ResponsiveImage src={t.image.url} alt={t.travelerName || ''} width={40} height={40} className="object-cover" /></div> : <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-cyan-900 font-bold">{(t.travelerName || 'T')[0]}</div>}
                <div><div className="font-semibold text-white">{t.travelerName}</div>{t.tripDestination && <div className="text-sm text-cyan-300">{t.tripDestination}</div>}</div>
                {t.rating && <div className="ml-auto flex items-center gap-1 text-amber-400"><Star className="w-4 h-4 fill-current" /><span className="font-bold">{t.rating}</span></div>}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10"><Link href="/testimonials" className="inline-flex items-center px-8 py-4 bg-amber-500 text-cyan-900 rounded-lg hover:bg-amber-400 transition-colors font-bold">Read More Reviews<ArrowRight className="w-5 h-5 ml-2" /></Link></div>
      </div>
    </section>
  )
}
