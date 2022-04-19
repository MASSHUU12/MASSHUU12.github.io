import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Work from "./pages/Work";

function App() {
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
