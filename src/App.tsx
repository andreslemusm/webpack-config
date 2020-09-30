import React from "react";
import { render } from "react-dom";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Feature } from "./Feature";
import { Footer } from "./Footer";
import "./styles/tailwind.css";

// The amazing comment is deleted?
const App = () => (
  <React.Fragment>
    <Header />
    <Hero />
    <Feature />
    <Footer />
  </React.Fragment>
);

render(<App />, document.getElementById("app-root"));
