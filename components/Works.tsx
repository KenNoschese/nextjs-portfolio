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
      transition: { type: "spring" as const, stiffness: 100, damping: 15}
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 20
      }
    }
  };

  return (
    <section className="w-full container-premium">
      <div className="flex flex-col items-center">
        <motion.div 
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }} 
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Featured <span className="text-gradient">Works</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full"
        >
          {projects.map((project) => {
            const projectTech = tech.filter((t) => project.tags.includes(t?.title || "Title"));

            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group"
              >
                <Link
                  href={project.github}
                  target="_blank"
                  className="block"
                >
                  <div className="glass rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-cyan-600/30">
                    <div className="relative w-full aspect-4/3 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        priority={project.id === 1}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                        {project.description}
                      </p>

                      <div className="flex gap-3 flex-wrap">
                        {projectTech.map((t) => (
                          <motion.div
                            key={t?.id}
                            className="relative w-6 h-6"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <Image
                              src={t?.image || "/html.png"}
                              width={24}
                              height={24}
                              className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                              alt={t?.title || "Tech icon"}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Works;