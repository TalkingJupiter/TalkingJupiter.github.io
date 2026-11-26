import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Research from "@/components/research/Research";
import Projects from "@/components/projects/Projects";
import Recognition from "@/components/recognition/Recognition";
import Contact from "@/components/contact/Contact";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Research />
      <Projects />
      <Recognition />
      <Contact />
    </>
  );
}
