import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { LoginProvider } from "./hooks/LoginHooks";
import { SelectedMemoProvider } from "./hooks/SelectedMemoHooks";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoginProvider>
      <SelectedMemoProvider>
        <App />
      </SelectedMemoProvider>
    </LoginProvider>
  </React.StrictMode>,
);
