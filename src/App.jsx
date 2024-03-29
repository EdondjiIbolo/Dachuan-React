import "./App.css";

import { Outlet, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/pages/Home";
import { MillingCnc } from "./components/pages/Milling";
import { DrillingCnc } from "./components/pages/Drilling";
import { TurningCnc } from "./components/pages/Turning";
import { Materials } from "./components/pages/Materials";
import { AboutUs } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { Login } from "./components/pages/Login";
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
import { CustomQuotation } from "./components/pages/Buy Pages/CustomQuotation";
import { QuoteInfo } from "./components/pages/Buy Pages/QuoteInfo";
import { AssistanceQuotes } from "./components/pages/Buy Pages/Assistant/AssistantQuotes";
import { Finishing } from "./components/pages/Finishing";
import AssistantContent from "./components/AssistantContent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/machining-milling" element={<MillingCnc />} />
        <Route path="/machining-turning" element={<TurningCnc />} />
        <Route path="/machining-drilling" element={<DrillingCnc />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/finishing" element={<Finishing />} />
        <Route path="/assistance" element={<Assistance />}>
          <Route path="article/:id" element={<AssistantContent />} />
        </Route>
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
          <Route path="new-quotation">
            <Route index element={<CreateQuotation />} />
            <Route path="settings/:id" element={<CustomQuotation />} />
          </Route>
          <Route path="orders-completed" element={<OrdersCompleted />} />
          <Route path={`quote/:id`} element={<QuoteInfo />} />
          <Route path={`assistant-quotes`} element={<AssistanceQuotes />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
