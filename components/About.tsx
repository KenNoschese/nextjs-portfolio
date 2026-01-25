import { aboutMe } from "@/src/data/about"

function About() {
  return (
    <div className="flex flex-col gap-4 text-left px-4 md:px-0 max-w-4xl mx-auto">
        <div>
            <h1 className="text-3xl md:text-4xl font-bold">{aboutMe.name}</h1>
            <h2 className="text-xl md:text-2xl font-extralight text-gray-300">{aboutMe.role}</h2>
        </div>

        <p className="py-4 text-base md:text-lg font-extralight italic text-gray-300 leading-relaxed">
            {aboutMe.description}
        </p>

        <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-light">{aboutMe.bio}</h2>
            <h2 className="text-xl md:text-2xl font-light">
                I am currently a 2nd year student at <span className="font-medium text-cyan-500 md:text-cyan-900">{aboutMe.university}</span> taking up 
                {aboutMe.education}.
            </h2>
        </div>

        <div className="mt-8 border-t border-gray-100/20 pt-6 pb-6 border-b mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-400">Key Information</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {aboutMe.stats.map((stat, index) => (
                    <div key={index} className="flex flex-col border-l border-cyan-900/30 pl-4 md:border-none md:pl-0">
                        <span className="text-xs uppercase tracking-widest text-gray-500 pb-1">
                            {stat.label}
                        </span>
                        <span className="text-lg md:text-xl font-light text-gray-300">
                            {stat.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-semibold md:font-normal">Experience: </h2>

            <div className="mt-6 md:m-6 space-y-8">
                {aboutMe.experience.map((exp, index) => (
                    <div key={index} className="flex flex-col relative"> 
                        <span className="text-2xl md:text-3xl text-cyan-600 font-medium">
                            {exp.title}
                        </span>
                        <span className="text-sm md:text-lg font-extralight text-gray-400">
                            {exp.date}
                        </span>
                        <span className="text-lg md:text-xl text-gray-300 pt-2 pb-5 border-b border-gray-800 md:border-none">
                            {exp.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
export default About