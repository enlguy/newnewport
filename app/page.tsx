import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Tech from "./components/Tech";

export default function Home() {
  return (
    <>
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="tech">
        <Tech />
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
