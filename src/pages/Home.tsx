import Hero from "../components/Hero/Hero";
import { useLanguage } from "../context/useLanguage";
import SEO from "../components/SEO/SEO";
import { Suspense, lazy } from "react";
const TechStack = lazy(() => import("../components/TechStack/TechStack"));
import About from "./About";
import Skills from "../components/Skills/Skills";
import Projects from "./Project";
import Contact from "../components/Contact/Contact";

const Home = () => {
  const { t } = useLanguage();
  return (
    <>
      <SEO title={t("seo.homeTitle")} description={t("seo.homeDescription")} />
      <main>
      <Hero />
      <Suspense fallback={null}>
        <TechStack />
      </Suspense>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
    </>
  );
};

export default Home;