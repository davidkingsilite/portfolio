// // // 'use client';

// // // import Image from 'next/image';
// // // import { ExternalLink, Github } from 'lucide-react';
// // // import Link from 'next/link';

// // // interface ProjectProps {
// // //   id: number;
// // //   tags: [];
// // //   image: string;
// // //   title: string;
// // //   description: string;
// // //   link: string;
// // //   github: string;
// // // }

// // // export default function ProjectCard({ project }: { project: ProjectProps }) {
// // //   return (
// // //     <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
// // //       <Image
// // //         src={project.image}
// // //         alt={project.title}
// // //         width={600}
// // //         height={400}
// // //         className="w-full h-52 object-cover"
// // //         loading="lazy"
// // //       />

// // //       <div className="p-5">
// // //         <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
// // //         <p className="text-sm text-gray-600 mb-4">{project.description}</p>

// // //         <div className="flex flex-wrap gap-2 mb-4">
// // //           {project.tags.map((tag: string, index: number) => (
// // //             <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
// // //               {tag}
// // //             </span>
// // //           ))}
// // //         </div>

// // //         <div className="flex items-center gap-4">
// // //           <Link
// // //             href={project.link}
// // //             target="_blank"
// // //             rel="noopener noreferrer"
// // //             className="text-green-600 hover:text-green-800 flex items-center gap-1"
// // //           >
// // //             <ExternalLink size={16} />
// // //             Live
// // //           </Link>
// // //           <Link
// // //             href={project.github}
// // //             target="_blank"
// // //             rel="noopener noreferrer"
// // //             className="text-gray-800 hover:text-black flex items-center gap-1"
// // //           >
// // //             <Github size={16} />
// // //             Code
// // //           </Link>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // 'use client';

// // import Image from 'next/image';
// // import Link from 'next/link';

// // type ProjectCardProps = {
// //   id: number;
// //   title: string;
// //   description: string;
// //   imageUrl: string;
// //   projectUrl: string;
// //   techStack: string[];
// // };

// // export default function ProjectCard({
// //   id,
// //   title,
// //   description,
// //   imageUrl,
// //   projectUrl,
// //   techStack = [],
// // }: ProjectCardProps) {
// //   return (
// //     <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
// //       {/* Project Image */}
// //       <div className="relative w-full h-52 md:h-64">
// //         <Image
// //           src={imageUrl}
// //           alt={title}
// //           fill
// //           className="object-cover"
// //           sizes="(min-width: 768px) 50vw, 100vw"
// //           loading="lazy"
// //         />
// //       </div>

// //       {/* Content */}
// //       <div className="p-5 space-y-3">
// //         <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
// //         <p className="text-sm text-gray-600">{description}</p>

// //         {/* Tech Stack */}
// //         <div className="flex flex-wrap gap-2 mt-2">
// //           {techStack.map((tech, id) => (
// //             <span
// //               key={id}
// //               className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-700"
// //             >
// //               {tech}
// //             </span>
// //           ))}
// //         </div>

// //         {/* Visit Button */}
// //         <Link
// //           href={projectUrl}
// //           target="_blank"
// //           rel="noopener noreferrer"
// //           className="inline-block mt-4 px-4 py-2 text-sm font-medium text-white bg-black rounded hover:bg-gray-800 transition"
// //         >
// //           Visit Project
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // }

// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';

// type ProjectCardProps = {
//   id: number;
//   title: string;
//   description: string;
//   imageUrl: string;
//   projectUrl: string;
//   techStack?: string[]; // Optional for safety
// };

// export default function ProjectCard({
//   id,
//   title,
//   description,
//   imageUrl,
//   projectUrl,
//   techStack = [], // fallback to empty array
// }: ProjectCardProps) {
//   return (
//     <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
//       {/* Project Image */}
//       <div className="relative w-full h-52 md:h-64">
//         <Image
//           src={imageUrl}
//           alt={title}
//           fill
//           className="object-cover"
//           sizes="(min-width: 768px) 50vw, 100vw"
//           loading="lazy"
//         />
//       </div>

//       {/* Content */}
//       <div className="p-5 space-y-3">
//         <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
//         <p className="text-sm text-gray-600">{description}</p>

//         {/* Tech Stack */}
//         {techStack.length > 0 && (
//           <div className="flex flex-wrap gap-2 mt-2">
//             {techStack.map((tech, id) => (
//               <span
//                 key={id}
//                 className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-700"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         )}

//         {/* Visit Button */}
//         <Link
//           href={projectUrl}
//           className="inline-block mt-4 px-4 py-2 text-sm font-medium text-white bg-black rounded hover:bg-gray-800 transition"
//         >
//           Visit Project
//         </Link>
//       </div>
//     </div>
//   );
// }

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

