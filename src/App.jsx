import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomePage } from "./components/pages/Home";
import { MillingCnc } from "./components/pages/Milling";
import { DrillingCnc } from "./components/pages/Drilling";
import { TurningCnc } from "./components/pages/Turning";
import { Route, Routes } from "react-router-dom";
import { Materials } from "./components/pages/Materials";
import { AboutUs } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/machining-drilling" element={<DrillingCnc />} />
        <Route path="/machining-milling" element={<MillingCnc />} />
        <Route path="/machining-turning" element={<TurningCnc />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
