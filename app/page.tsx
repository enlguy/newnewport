import AboutTeaser from "./components/AboutTeaser";
import FinalCTABand from "./components/FinalCTABand";
import Header from "./components/NavBar";
import Hero from "./components/Hero";
import IndividualBand from "./components/IndividualBand";
import BusinessBand from "./components/BusinessBand";
import ServiceCards from "./components/ServiceCards";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div id="hero">
        <Hero />
       </div>
      <div id="tech">
        <ServiceCards />
      </div>
      <div id="projects">
        <BusinessBand />
      </div>
      <div id="projects">
        <IndividualBand />
      </div>
      <div id="aboutteaser">
        <AboutTeaser />
      </div>
      <div id="cta">
        <FinalCTABand />
      </div>
      <Footer />
    </>
  );
}
