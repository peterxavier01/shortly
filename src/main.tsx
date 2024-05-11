import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

import App from "./App.tsx";
import { StateProvider } from "./context/StateContext.tsx";
import MotionLazy from "./components/MotionLazy.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StateProvider>
      <MotionLazy>
        <Toaster />
        <App />
      </MotionLazy>
    </StateProvider>
  </React.StrictMode>
);
