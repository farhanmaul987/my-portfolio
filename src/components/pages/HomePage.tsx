import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import WhatIDo from "@/components/sections/WhatIDo";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <WhatIDo />
      <Contact />
    </main>
  );
}
