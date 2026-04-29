import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Navbar from "@/components/shared/Navbar";
import ThemeToggle from "@/components/shared/theme-toggle";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Projects/>
      <Education/>

    </>
  );
}
