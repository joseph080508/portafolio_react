import Hero from "../components/Hero/Hero";
import About from "./About";
import Skills from "../components/Skills/Skills";
import Projects from "./Project";
import Contact from "../components/Contact/Contact";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;