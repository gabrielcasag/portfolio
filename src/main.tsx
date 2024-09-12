import "./lib/i18n.js";
import "./styles/global.css";
import "./styles/font.css";
import "./assets/fonts/SUSE-VariableFont_wght.ttf";
import "./assets/fonts/Inter-VariableFont.ttf";

import { Analytics } from "@vercel/analytics/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>
);
