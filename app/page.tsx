import Image from "next/image";
import Socials from "@/components/Socials";
import Arrows from "@/components/Arrows";
import Works from "@/components/Works";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col relative">
      <Navbar />
      
      <section
        id="home"
        className="flex flex-col items-center justify-center min-h-screen py-10 relative overflow-hidden"
      >
        <div className="flex flex-col justify-center items-center gap-8 animate-fade animate-duration-500 animate-ease-in-out z-10">
          <div className="text-center space-y-4">
            <h1 className="text-6xl md:text-7xl tracking-tight font-bold text-transparent bg-clip-text bg-linear-to-b from-white via-white to-white/40 drop-shadow-2xl">
              Kenmario Noschese
            </h1>
            <h3 className="text-xl md:text-3xl font-light text-cyan-200/80 tracking-widest uppercase">
              Full Stack Developer
            </h3>
          </div>

          <div className="mt-4">
            <Socials />
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
           <Arrows />
        </div>
      </section>

      <section
        id="works"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <div className="w-full">
          <Works />
        </div>
      </section>

      <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <div className="w-full"> 
          <About />
        </div>
      </section>

      <section
        id="contact"
        className="flex items-center justify-center py-32 mb-10"
      >
        <div className="w-full">
          <Contact />
        </div>
      </section>
    </div>
  );
}
