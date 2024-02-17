import { Footer } from "./Footer";
import { Header } from "./Header";
import { HomePage } from "./pages/Home";
import { MillingCnc } from "./pages/Milling";
import { DrillingCnc } from "./pages/Drilling";
import { TurningCnc } from "./pages/Turning";
import { Route, Routes } from "react-router-dom";
import { Materials } from "./pages/Materials";
import { AboutUs } from "./pages/About";
import { Contact } from "./pages/Contact";

export function MainRoutes() {
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
