"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

function Arrows() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Works", href: "#works" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <div
      className={`grid grid-rows-[26px_68px] grid-cols-3 items-center justify-items-center gap-x-16.5 transition-opacity duration-500 
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="flex flex-col items-center group cursor-pointer"
        >
          <h3 className="text-sm font-extralight group-hover:text-blue-500 animate-fade animate-duration-1000 animate-ease-in-out ">
            {link.label}
          </h3>
          <Image
            src="/arrow.png"
            height={65}
            width={65}
            alt="Arrowdown"
            className="transition-transform group-hover:translate-y-10 duration-600 animate-fade animate-duration-1000 animate-ease-in-out "
          />
        </a>
      ))}
    </div>
  );
}
export default Arrows;
