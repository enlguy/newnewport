import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStackGalaxy from "./components/TechStackGalaxy";

export default function Home() {
  return (
    <>
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="tech">
        <TechStackGalaxy />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
