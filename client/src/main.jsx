import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// import router from "./router";

import { DarkModeProvider } from "./customHooks/DarkModeContext";
import "./index.css"; // Ensure styles are applied
import router from "./assets/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeProvider>
      <RouterProvider router={router} />
    </DarkModeProvider>
  </React.StrictMode>
);
