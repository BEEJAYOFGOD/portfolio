import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { NavProvider } from "./context/navContext.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <NavProvider>
                <App />
            </NavProvider>
        </BrowserRouter>
    </StrictMode>
);
