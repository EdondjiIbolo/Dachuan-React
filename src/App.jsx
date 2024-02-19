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
import { Login } from "./components/pages/Login";
import { useEffect } from "react";
import { SignUp } from "./components/pages/SignUp";
import { Panel } from "./components/pages/Dashboard";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/machining-drilling" element={<DrillingCnc />} />
        <Route path="/machining-milling" element={<MillingCnc />} />
        <Route path="/machining-turning" element={<TurningCnc />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/panel" element={<Panel />} />
      </Routes>
    </>
  );
}

export default App;
