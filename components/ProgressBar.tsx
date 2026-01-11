'use client'

import { useEffect, useState } from "react"

const sections = [
    {id: "home", label: "Home"}, 
    {id: "works", label: "Works"},
    {id: "about", label: "About"},
    {id: "contact", label: "Contact"}
]; 

function ProgressBar() {
    const[activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if(entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
        },
        {threshold : 0.6} 
    );

        sections.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);
    
  return (
    <div className={`fixed top-13 left-13 flex flex-col 
        ${activeSection === "home" ? 'opacity-0 -translate-x-6 duration-1000 pointer-events-none' : 'opacity-100 translate-x-0 duration-600'}`}>

        {sections.map((section) => (
            <a  
                href={`#${section.id}`}
                key={section.id}
                className={`text-2xl pb-2 hover:text-cyan-900 ${activeSection === section.id ? 'text-white-800 font-bold' : 'text-gray-700'}`}
            >
                {section.label}
            </a>
        ))}

    </div>
  )
}
export default ProgressBar