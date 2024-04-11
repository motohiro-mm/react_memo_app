import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { LoginProvider } from "./LoginProvider";
import { SelectedMemoProvider } from "./SelectedMemoProvider";

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
