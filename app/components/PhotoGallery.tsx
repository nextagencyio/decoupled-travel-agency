'use client'

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80&fit=crop',
    alt: 'Tropical beach destination',
  },
  {
    src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80&fit=crop',
    alt: 'Mountain adventure',
  },
  {
    src: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=600&q=80&fit=crop',
    alt: 'Cultural experience',
  },
  {
    src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80&fit=crop',
    alt: 'Road trip adventure',
  },
]

export default function PhotoGallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Travel Inspiration
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the world through our curated collection of dream destinations.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, i) => (
            <div key={i} className="relative overflow-hidden rounded-xl group aspect-square">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
