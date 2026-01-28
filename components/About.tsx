'use client';
import { aboutMe } from "@/src/data/about"
import { motion, Variant, VariantLabels, Variants } from "framer-motion";

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 50 }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col gap-10 text-left px-4 md:px-0 max-w-4xl mx-auto"
    >
        <motion.div variants={itemVariants as Variants}>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{aboutMe.name}</h1>
            <h2 className="text-xl md:text-2xl font-light text-cyan-400">{aboutMe.role}</h2>
        </motion.div>

        <motion.p 
          variants={itemVariants as Variants}
          className="text-2xl md:text-3xl font-light leading-relaxed text-gray-200"
        >
            {aboutMe.description}
        </motion.p>

        <motion.div variants={itemVariants as Variants} className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>{aboutMe.bio}</p>
            <p>
                I am currently a 2nd year student at <span className="text-white font-medium">{aboutMe.university}</span>.
                {aboutMe.interests}
            </p>
        </motion.div>

        <motion.div 
            variants={itemVariants as Variants}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 py-8 border-y border-white/10"
        >
            {aboutMe.stats.map((stat, index) => (
                <div key={index} className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-widest text-gray-500">
                        {stat.label}
                    </span>
                    <span className="text-lg md:text-xl font-medium text-white">
                        {stat.value}
                    </span>
                </div>
            ))}
        </motion.div>

        <motion.div variants={itemVariants as Variants}>
            <h2 className="text-2xl font-bold mb-8">Experience</h2>

            <div className="space-y-8 border-l border-white/10 pl-8 ml-3">
                {aboutMe.experience.map((exp, index) => (
                    <motion.div 
                        key={index} 
                        className="relative"
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                        <div className="absolute -left-9.75 top-2 w-3 h-3 rounded-full bg-cyan-500 ring-4 ring-[#171717]" />
                        
                        <div className="flex flex-col gap-1">
                            <span className="text-xl md:text-2xl text-white font-medium">
                                {exp.title}
                            </span>
                            <span className="text-sm font-mono text-cyan-400">
                                {exp.date}
                            </span>
                            <span className="text-gray-400">
                                {exp.value}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    </motion.div>
  )
}
export default About