import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import Testimonials from '@/components/Testimonial'
import { projects } from '@/constants'
import ContactPage from './(root)/contact/page'
import Link from 'next/link'

export default function Home() {

  
  return (
    <section className="px-6 py-8">
      <Hero />
      <div className='px-2 md:px-18'>
      <h2 className="text-2xl md:text-3xl font-bold mt-5 mb-6">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.slice(0, 4).map(project => (
          <ProjectCard key={project.id} project={project} />
          ))}
      </div>
      <Link
          href="/projects"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 text-sm font-medium text-white bg-black rounded hover:bg-gray-800 transition"
        >
          See All Projects
        </Link>
      </div>
      <Testimonials />
      <ContactPage />
    </section>
  )
}

