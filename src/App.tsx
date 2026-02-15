import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./i18n";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/Services/ServiceDetail";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/Projects/ProjectDetail";
import Contact from "./pages/Contact";
import Industries from "./pages/Industries";
import ScrollToTopButton from "./components/common/ScrollToTop";
import CommandPalette from "./components/common/CommandPalette";
import MagicEasterEgg from "./components/common/MagicEasterEgg";
import LiquidCursor from "./components/common/LiquidCursor";

// Helper component to handle route change scrolling
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-dark transition-colors duration-500">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/industries" element={<Industries />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
      <CommandPalette />
      <MagicEasterEgg />
      <LiquidCursor />
    </Router>
  );
};

export default App;
