import Image from "next/image"
import { tech } from "@/src/data/tech"

function Icons() {
  return (
    <div className="flex justify-center gap-5 m-3 rounded-4xl bg-blue-950 pl-3 pr-3 pb-2 pt-2">
      {tech.map((icon) => icon && (
        <Image 
          key = {icon?.id}
          width={28}
          height={28}
          src = {icon.image}
          alt = {icon.title}
        />
      ))}
        
      </div>
  )
}
export default Icons