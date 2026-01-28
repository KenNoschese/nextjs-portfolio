import { contacts } from "@/src/data/contact";

export default function Socials() {
  return (
    <div className="flex gap-4">
      {contacts.map((contact) => (
        <a
          key={contact.name}
          href={contact.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-full glass text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 border border-white/5"
        >
          {contact.name}
        </a>
      ))}
    </div>
  );
}
