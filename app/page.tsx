import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import Testimonials from '@/components/Testimonial'
import { projects } from '@/constants'

export default function Home() {

  
  return (
    <section className="px-6 py-12">
      <Hero />
      <div className='px-2 md:px-18'>
      <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.slice(0, 4).map(project => (
          <ProjectCard key={project.id} project={project} />
          ))}
      </div>
      </div>
      <Testimonials />
    </section>
  )
}

