import Image from "next/image"
import { tech } from "@/src/data/tech"
import Link from "next/link"

function Icons() {
  return (
    <div className="flex justify-center gap-5 m-3 rounded-4xl bg-blue-950 pl-3 pr-3 pb-2 pt-2">
      {tech.map((icon) => icon && (
        <Link key={icon.id} href={icon.web}>
          <Image 
            width={28}
            height={28}
            src = {icon.image}
            alt = {icon.title}
            className = "hover:translate-y-1 duration-300"
          />
        </Link>
        
      ))}
        
      </div>
  )
}
export default Icons