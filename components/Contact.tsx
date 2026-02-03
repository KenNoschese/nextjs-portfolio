"use client";
import { motion } from "framer-motion";
import Image from "next/image";

function Contact() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-8"
      >
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
          Have an idea?
        </h2>
        
        <p className="text-xl text-gray-400 max-w-2xl">
          I'm currently open to new opportunities and collaborations. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <motion.a
          href="kennoschese@gmail.com" 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full text-lg font-bold tracking-wide overflow-hidden"
        >
          <span className="relative z-10">Say Hello</span>
          <div className="relative z-10 w-6 h-6 transition-transform duration-300 group-hover:translate-x-1">
             <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-black">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
          </div>
          <div className="absolute inset-0 bg-cyan-400 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        </motion.a>

        <div className="mt-16 pt-8 border-t border-white/10 w-full flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <span>© 2026 Kenmario O. Noschese</span>
          <div className="flex gap-6">
            
             <a href="#home" className="hover:text-white transition-colors">Home</a>
             <a href="#about" className="hover:text-white transition-colors">About</a>
             <a href="#works" className="hover:text-white transition-colors">Works</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
export default Contact;