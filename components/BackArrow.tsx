'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

function BackArrow() {
  const[arrowAppear, setArrowAppear] = useState(false);  

  useEffect(() => {
    const handleScroll = () =>  {
      if(window.scrollY > 50) {
        setArrowAppear(true);
      }else {
        setArrowAppear(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-10 right-10 ">
      <a href="#home">
        <div className={`flex flex-col-reverse items-center group transition-all duration-500
        ${arrowAppear ? `opacity-100 translate-y-0` : `opacity-0 translate-y-10 pointer-events-none`}`}>
          <h1 className="pb-1 font-light">Top</h1>
          <Image
            src="/arrow.png"
            height={65}
            width={65}
            alt="Arrowdown"
            className="transition-transform group-hover:-translate-y-5 duration-600 rotate-180"
          />
        </div>
      </a>
    </div>
  );
}
export default BackArrow;
