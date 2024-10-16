import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./scss/index.scss";
import App from "./App.tsx";
import { SeriesContextProvider } from "./context/series-context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SeriesContextProvider>
      <App />
    </SeriesContextProvider>
  </StrictMode>
);
