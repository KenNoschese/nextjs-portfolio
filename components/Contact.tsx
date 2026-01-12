import { aboutMe } from "@/src/data/about"
import { contacts } from "@/src/data/contact"

function Contact() {
  return (
    <div className="flex flex-col gap-4 text-center p-10">
            <div>
                <h1 className="text-4xl font-bold mb-4 ">Reach out:  </h1>
                <div className="flex flex-col gap-3 text-center">
                    {contacts.map((contact) => (
                        <a
                            href={contact.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl font-bold text-gray-500 hover:text-cyan-800 hover:translate-y-1 transition-all duration-300"
                        >
                            {contact.name}
                        </a>
                    ))}
                </div>
            </div>

    </div>
  )
}
export default Contact