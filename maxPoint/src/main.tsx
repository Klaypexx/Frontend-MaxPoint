import "./index.css";
import App from "./components/app/App.tsx";
import PresentationProvider from "./context/context.tsx";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PresentationProvider>
      <App />
    </PresentationProvider>
  </React.StrictMode>,
);
