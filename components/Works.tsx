'use client';
import { projects } from "@/src/data/project";
import Image from "next/image";
import Link from "next/link";
import { tech } from "@/src/data/tech";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"; 
import { MouseEvent } from "react";

function ProjectCard({ project }: { project: any }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative border border-white/10 bg-gray-900/40 rounded-3xl overflow-hidden hover:border-white/20 transition-colors duration-300"
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Gradient */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.1),
              transparent 80%
            )
          `,
        }}
      />

      <div className="flex flex-col h-full relative z-20"> {/* Changed from Link to div */}
        {/* Image Section */}
        <div className="relative aspect-[16/9] overflow-hidden border-b border-white/5">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-1 gap-4">
          <div className="flex justify-between items-start">
            <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors duration-300">
              {project.title}
            </h3>
          </div>
          
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 my-2">
            {project.tags.map((tag: string, index: number) => {
              const techItem = tech.find((t) => t.title.toLowerCase() === tag.toLowerCase());
              return (
                <div key={index} className="relative group/tech" title={tag}>
                  {techItem ? (
                    <div className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <Image
                        src={techItem.image}
                        alt={tag}
                        width={20}
                        height={20}
                        className="w-5 h-5 object-contain"
                      />
                    </div>
                  ) : (
                    <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300">
                      {tag}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-auto pt-4 flex flex-wrap gap-2 justify-end"> {/* Added justify-end */}
            {project.live_url && (
                <Link 
                    href={project.live_url} 
                    target="_blank" 
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-600/20 text-cyan-200 text-sm font-medium hover:bg-cyan-500/40 transition-colors"
                >
                    Live Demo
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </Link>
            )}
            <Link 
                href={project.github} 
                target="_blank" 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-gray-300 text-sm font-medium hover:bg-white/20 transition-colors"
            >
                GitHub
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 3c-.58-.33-1.21-.55-1.84-.75-1.78-.6-3.7-.84-5.7-.75-2.03-.09-3.95.15-5.73.75a5.07 5.07 0 0 0-1.84.75A5.44 5.44 0 0 0 4 9.47c0 4.47 3.3 5.66 6.44 7a3.37 3.37 0 0 0-.94 2.61V19"></path></svg>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Works() {
  return (
    <section className="w-full px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col">
        <div className="mb-20 text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Selected <span className="text-cyan-400">Works</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Things I've built, broken, and fixed again.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;