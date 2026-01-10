'use client';
import { projects } from "@/src/data/project";
import Image from "next/image";
import Link from "next/link";
// import { useState } from "react";

function Works() {
  
  return (
    <div>
        <div className="flex flex-wrap justify-center gap-[4vmin]">
            {projects.map((project) => (
              <Link key= {project.id} href={project.github} target="_blank" rel="noopener noreferrer" 
                className="relative w-[40vmin] h-[56vmin] group cursor-pointer overflow-hidden">

                <Image 
                  src = {project.image}
                  fill
                  objectPosition="center" 
                  alt = "Image of a project"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 rounded-2xl"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-500 
                  group-hover:opacity-100 group-hover:scale-110 flex flex-col items-center justify-center">

                  <div className="flex flex-col items-centern text-left m-10">
                    <h1 className="text-white text-2xl font-light">{project.title}</h1>
                    <p className="text-sm font-light">{project.description}</p>
                  </div>

                </div>
              </Link>
            ))}
        </div>
    </div>
  )
}
export default Works