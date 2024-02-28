import "./App.css";
import { HomePage } from "./components/pages/Home";
import { MillingCnc } from "./components/pages/Milling";
import { DrillingCnc } from "./components/pages/Drilling";
import { TurningCnc } from "./components/pages/Turning";
import { Outlet, Route, Routes } from "react-router-dom";
import { Materials } from "./components/pages/Materials";
import { AboutUs } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { Login } from "./components/pages/Login";
import { useEffect } from "react";
import { SignUp } from "./components/pages/SignUp";
import { Panel } from "./components/pages/Dashboard";
import { Assistance } from "./components/pages/Assistance";
import { Guide } from "./components/pages/Guide";
import { Recover } from "./components/pages/Recover";
import { CreateQuotation } from "./components/pages/Buy Pages/CreateQuotation";
import { DashboardHeader } from "./components/pages/Buy Pages/Header";
import { MyQuotes } from "./components/pages/Buy Pages/MyQuotes";
import { MyOrder } from "./components/pages/Buy Pages/MyOrder";
import { QuoteComplete } from "./components/pages/Buy Pages/QuotesComplete";
import { OrdersCompleted } from "./components/pages/Buy Pages/OrdersCompleted";

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
        <Route path="/assistance" element={<Assistance />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Recover />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/panel"
          element={
            <>
              <DashboardHeader />
              <Outlet />
            </>
          }
        >
          <Route index element={<Panel />} />
          <Route path="my-quotes" element={<MyQuotes />} />
          <Route path="quotes-completed" element={<QuoteComplete />} />
          <Route path="my-orders" element={<MyOrder />} />
          <Route path="new-quotation" element={<CreateQuotation />} />
          <Route path="orders-completed" element={<OrdersCompleted />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
