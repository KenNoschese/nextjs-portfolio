import { aboutMe } from "@/src/data/about"

function About() {
  return (
    <div className="flex flex-col gap-4 text-left">
        <div>
            <h1 className="text-4xl font-bold">{aboutMe.name}</h1>
            <h2 className="text-2xl font-extralight text-gray-300">{aboutMe.role}</h2>
        </div>

        <p className="py-4 text-lg font-extralight italic text-gray-300">
            {aboutMe.description}
        </p>

        <div className="space-y-4">
            <h2 className="text-2xl font-light">{aboutMe.bio}</h2>
            <h2 className="text-2xl font-light">
                I am currently a 2nd year student at <span className="font-medium text-cyan-900">{aboutMe.university}</span> taking up 
                {aboutMe.education}.
            </h2>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-6 pb-6 border-b mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-400">Key Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {aboutMe.stats.map((stat, index) => (
                    <div key={index} className="flex flex-col">
                        <span className="text-sm uppercase tracking-widest text-gray-400 pb-2 pt-3">
                            {stat.label}
                        </span>
                        <span className="text-xl font-light text-gray-300">
                            {stat.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
        <div>
            <h2 className="text-2xl">Experience: </h2>

            <div className="m-6">
                {aboutMe.experience.map((exp, index) => (
                    <div key={index} className="flex flex-col"> 
                        <span className="text-3xl text-cyan-700">
                            {exp.title}
                        </span>
                        <span className="text-lg font-extralight">
                            {exp.date}
                        </span>
                        <span className="text-xl text-gray-300 pt-2 pb-5">
                            {exp.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}
export default About