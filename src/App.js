import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="*" element={<NoPage />} /> -- 404 */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
