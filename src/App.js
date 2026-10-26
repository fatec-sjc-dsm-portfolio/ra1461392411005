import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Curriculo from "./components/Curriculo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-night-900 text-ink">
      <div className="aurora" aria-hidden="true" />
      <Navbar />
      <div className="relative z-10">
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Curriculo />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
