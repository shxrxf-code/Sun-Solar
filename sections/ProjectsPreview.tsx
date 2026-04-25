import Link from 'next/link'

const projects = [
  {
    title: '5kW System',
    location: 'Chennai',
    savings: '₹7,500/month',
  },
  {
    title: '10kW System',
    location: 'Coimbatore',
    savings: '₹15,000/month',
  },
  {
    title: '3kW System',
    location: 'Bangalore',
    savings: '₹4,500/month',
  },
  {
    title: '7kW System',
    location: 'Hyderabad',
    savings: '₹10,500/month',
  },
]

export default function ProjectsPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-dark-900">
            Real Projects
          </h2>
          <p className="mt-2 text-dark-600">See actual installations and savings</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {projects.map((project, index) => (
            <div key={index} className="border border-dark-200 rounded-lg p-4">
              <p className="font-semibold text-dark-900">{project.title} - {project.location}</p>
              <p className="text-sm text-primary-600 font-medium mt-1">{project.savings} savings</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects">
            <button className="border border-primary-600 text-primary-600 px-6 py-2 rounded-lg font-medium hover:bg-primary-50 transition-colors">
              View All Projects
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
