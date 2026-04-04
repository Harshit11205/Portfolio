import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import WhatIDo from "@/components/WhatIDo";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#121212] selection:bg-emerald-400/30 selection:text-emerald-200">
      <div className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>
      <WhatIDo />
      <Projects />
      <Experience />
      <Skills />
      <Certifications />
      <Contact />
    </main>
  );
}
