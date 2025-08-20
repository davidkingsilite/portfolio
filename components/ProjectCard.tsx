 'use client';

import { ProjectCardProps } from '@/type';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectProps {
  project:ProjectCardProps
}


const ProjectCard = ({project}: ProjectProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
      <div className="relative w-full h-40 md:h-48">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-contain h-[100px] w-full"
          sizes="(min-width: 768px) 50vw, 100vw"
          loading="lazy"
        />
      </div>

      <div className="p-5 space-y-3">
        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
        <p className="text-sm text-gray-600">{project.description}</p>

        {project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <Link
          href={project.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 text-sm font-medium text-white bg-black rounded hover:bg-gray-800 transition"
        >
          Visit Project
        </Link>
        
      </div>
    </div>
  );
}

export default ProjectCard

