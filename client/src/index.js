import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ContextProvider } from "../src/pages/Docpage/MAIN/video/SocketContext";
ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
