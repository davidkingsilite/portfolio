
'use client';

import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/constants';
import { ProjectCardProps } from '@/type';

interface ProjectProps {
    project : ProjectCardProps
}

const ProjectsPage = ({project}:ProjectProps) => {
    console.log(project);
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 font-sans">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Projects</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A showcase of web applications I've developed using modern technologies.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage
