import Image from "next/image";
import Icons from "@/components/Icons";
import Arrows from "@/components/Arrows";
import Works from "@/components/Works";
import BackArrow from "@/components/BackArrow";
import ProgressBar from "@/components/ProgressBar";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section
        id="home"
        className="flex flex-col items-center justify-between min-h-screen py-10"
      >
        <div />
        <div className="flex flex-col justify-center items-center gap-3 animate-fade animate-duration-500 animate-ease-in-out">
          <h1 className="text-5xl text-center">Kenmario O. Noschese</h1>

          <h3 className="text-lg font-light text-center">
            2nd Year Computer Science Student
          </h3>

          <Icons />
        </div>

        <Arrows />
      </section>
      <section
        id="works"
        className="min-h-screen bg-gray-800 flex items-center justify-center"
      >
        <ProgressBar />
        <div className="">
          <Works />
        </div>
      </section>
      <section
        id="about"
        className="min-h-screen flex max-w-4xl mt-32 justify-center mx-auto"
      >
        <div className=""> 
          <About />
        </div>
      </section>
      <section
        id="contact"
        className="min-h-screen flex max-w-4xl justify-center items-center mx-auto"
      >
        <div className="">
          <Contact />
        </div>
      </section>
    </div>
  );
}
