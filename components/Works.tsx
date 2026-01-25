'use client';
import { projects } from "@/src/data/project";
import Image from "next/image";
import Link from "next/link";
import { tech } from "@/src/data/tech";
import { motion, Variants } from "framer-motion"; 

function Works() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section className="px-6 py-12 md:px-12">
      <div className="flex flex-col items-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }} 
          className="pb-10"
        >
          <h1 className="font-extralight text-3xl md:text-5xl"> Works </h1>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl"
        >
          {projects.map((project) => {
            const projectTech = tech.filter((t) => project.tags.includes(t?.title || "Title"));

            return (
              <motion.div 
                key={project.id} 
                variants={itemVariants as any} 
                className="flex flex-col items-center w-full md:w-auto mb-10 md:mb-0"
              >
                <Link 
                  href={project.github} 
                  target="_blank" 
                  className="relative block overflow-hidden rounded-2xl shadow-xl group
                            w-75 h-105 
                            sm:w-87.5 sm:h-122.5
                            md:w-[40vmin] md:h-[56vmin]"
                >
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                  
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center p-8 z-10">
                    <h1 className="text-white text-2xl font-semibold">{project.title}</h1>
                    <p className="text-white/90 text-sm font-light mt-2">{project.description}</p>
                  </div>
                </Link>
                <div className="flex gap-4 mt-6">
                  {projectTech.map((t) => (
                    <div key={t?.id} className="relative w-7 h-7">
                      <Image 
                        src={t?.image || "/html.png"}
                        width={28}
                        height={28}
                        className="object-contain"
                        alt={t?.title || "Tech icon"}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Works;