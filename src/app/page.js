import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/shared/Navbar";
import ThemeToggle from "@/components/shared/theme-toggle";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />

    </>
  );
}
