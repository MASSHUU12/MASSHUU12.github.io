import "./style/App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Work from "./pages/Work";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Detect browser language on load and set it to website
    const lang = navigator.language;
    i18n.changeLanguage(lang.split("-")[0]);
  }, [i18n]);

  return (
    <>
      <Header />
      <Home />
      <About />
      <Contact />
      <Experience />
      <Work />
      <Footer />
      <SideBar />
    </>
  );
}

export default App;
