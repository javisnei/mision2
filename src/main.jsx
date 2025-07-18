import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import styles from "./App.module.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className={styles.fondo}>
    <BrowserRouter>
      <App />
      
    </BrowserRouter>
    </div>
  </StrictMode>
);
