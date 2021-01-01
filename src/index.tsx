import { App } from "./App";
import { StrictMode } from "react";
import { render } from "react-dom";
import "./styles/index.css";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("app-root")
);
