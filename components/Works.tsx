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
      transition: {
        staggerChildren: 0.2, 
      },
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
    <div className="flex flex-col items-center">
      
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }} className="pb-10"
        >

          <h1 className="font-extralight text-4xl"> Works </h1>
        </motion.div>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} 
        className="flex flex-wrap justify-center gap-[4vmin] pt-4"
      >
        
        {projects.map((project) => {
          const projectTech = tech.filter((t) => project.tags.includes(t?.title || "Title"));

          return (
            <motion.div 
              key={project.id} 
              variants={itemVariants as any} 
              className="flex flex-col items-center"
            >
              <Link href={project.github} className="relative w-[40vmin] h-[56vmin] group overflow-hidden rounded-2xl">
                <Image 
                  src={project.image}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={project.title}
                />
                
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center p-8">
                  <h1 className="text-white text-2xl font-light">{project.title}</h1>
                  <p className="text-white/80 text-sm font-light">{project.description}</p>
                </div>
              </Link>

              <div className="flex gap-3 mt-4">
                {projectTech.map((t) => (
                  <div key={t?.id} className="relative w-8 h-8" title={t?.title}>
                    <Image 
                      src={t?.image || "/html.png"}
                      width={28}
                      height={28}
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
  );
}

export default Works;