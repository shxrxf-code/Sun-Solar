import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    size: '5kW System',
    location: 'Chennai',
    savings: '₹7,500/month',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
  },
  {
    id: 2,
    size: '3kW System',
    location: 'Coimbatore',
    savings: '₹4,200/month',
    image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=600&q=80',
  },
  {
    id: 3,
    size: '10kW System',
    location: 'Bangalore',
    savings: '₹12,000/month',
    image: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=600&q=80',
  },
]

export default function Projects() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-poppins text-2xl md:text-3xl font-semibold text-dark-900">
            Our Recent Projects
          </h2>

          <Link href="/projects" className="text-primary-600 text-sm hover:underline">
            View All →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-dark-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={`${project.size} - ${project.location}`}
                  fill
                  className="object-cover"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-2 left-2 bg-black/60 text-white px-2 py-1 text-xs rounded">
                  {project.location} • {project.size}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-dark-900">{project.size}</h3>
                <p className="text-sm text-dark-500">{project.location}</p>
                <p className="text-primary-600 text-sm mt-1 font-medium">
                  {project.savings} saved
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
