'use client'

import { Plane, Map, Sun, Camera, Globe, Compass } from 'lucide-react'

const reasons = [
  {
    icon: Plane,
    title: 'Expert Planning',
    description: 'Decades of travel expertise ensuring every detail of your journey is perfectly crafted.',
  },
  {
    icon: Map,
    title: 'Unique Destinations',
    description: 'Curated collection of extraordinary destinations beyond the typical tourist trails.',
  },
  {
    icon: Sun,
    title: 'Tailored Experiences',
    description: 'Every itinerary customized to match your interests, pace, and travel style.',
  },
  {
    icon: Camera,
    title: 'Memorable Moments',
    description: 'Carefully designed experiences that create lasting memories for you and your loved ones.',
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Trusted local partners in over 50 countries ensuring authentic cultural experiences.',
  },
  {
    icon: Compass,
    title: '24/7 Support',
    description: 'Round-the-clock travel assistance wherever you are in the world.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Why Choose Azure Horizons Travel
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We turn your travel dreams into unforgettable journeys.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-primary-700" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
