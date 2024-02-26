import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18n/i18n.js";
import { UserProvider } from "./Context/UserContext.jsx";
import { LangContext, LangProvider } from "./Context/LangContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LangProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </LangProvider>
  </BrowserRouter>
);
