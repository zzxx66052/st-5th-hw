import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TextProvider } from "./context/TextContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TextProvider>
);
