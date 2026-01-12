'use client';
import { projects } from "@/src/data/project";
import Image from "next/image";
import Link from "next/link";
import { tech } from "@/src/data/tech";


function Works() {
  
  return (
    <div className="flex flex-col items-center">
        <div className="pb-10">
          <h1 className="font-extralight text-4xl"> Works </h1>  
        </div>
        <div className="flex flex-wrap justify-center gap-[4vmin] pt-4">
            {projects.map((project) => {
  const projectTech = tech.filter((t) => project.tags.includes(t?.title || "Title"));

  return (
    <div key={project.id} className="flex flex-col items-center">

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
      <div className="flex gap-3 mt-4 ">
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
    </div>
  );
})}
        </div>
    </div>
  )
}
export default Works