import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    title: 'Residential - 5kW',
    location: 'Chennai',
    savings: '₹7,500/month',
    image: '/projects/residential-1.jpg',
  },
  {
    title: 'Commercial - 50kW',
    location: 'Coimbatore',
    savings: '₹65,000/month',
    image: '/projects/commercial-1.jpg',
  },
  {
    title: 'Industrial - 100kW',
    location: 'Hyderabad',
    savings: '₹1,30,000/month',
    image: '/projects/industrial-1.jpg',
  },
]

export default function ProjectsPreview() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-dark-900 mb-4">
            Our Recent Projects
          </h2>
          <p className="text-dark-600 text-lg">See how we've helped homes and businesses go solar</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {projects.map((project, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="relative h-48 bg-primary-100">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={192}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-dark-600 font-medium">{project.title}</span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-sm">
                  {project.location} • {project.savings}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-dark-900">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/projects">
            <button className="border border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
              View All Projects
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
