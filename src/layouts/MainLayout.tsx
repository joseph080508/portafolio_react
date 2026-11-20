import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import GlobalBackground from "../components/Background/GlobalBackground";
import CustomCursor from "../components/Cursor/CustomCursor";
import PageTransition from "../components/PageTransition/PageTransition";
import ScrollProgress from "../components/ScrollProgress/ScrollProgress";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white text-black transition-colors duration-500 dark:bg-gray-950 dark:text-white">
      <GlobalBackground />
      <CustomCursor />
      <ScrollProgress />
      <style>{`*:focus-visible { outline: 2px solid #3b82f6; outline-offset: 2px; border-radius: 4px; }`}</style>

      <div className="relative z-10">
        <header>
          <Navbar/>
        </header>

        <main>
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;


