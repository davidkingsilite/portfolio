import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import Testimonials from '@/components/Testimonial'
import { projects } from '@/constants'

export default function Home() {

  
  return (
    <section className="px-6 py-12">
      <Hero />
      <div className='px-12 md:px-24'>
      <h2 className="text-2xl font-bold mt-12 mb-6">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.slice(0, 4).map(project => (
          <ProjectCard key={project.id} project={project} />
          ))}
      </div>
      <Testimonials />
      </div>
    </section>
  )
}

