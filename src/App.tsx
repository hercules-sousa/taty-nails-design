import React from "react";

import "./App.css";
import CustomInstaCard from "./components/CustomInstaCard";

function App() {
  return (
    <div id="container">
      <div id="first-screen">
        <header>
          <h3>Home</h3>
          <h3 className="space-given">Galeria</h3>
          <h3 className="space-given">Contato</h3>
        </header>

        <main>
          <div id="logo-container" />
        </main>
      </div>
      <div id="info-container"></div>
      <div id="nails-cards-container">
        <CustomInstaCard />
        <CustomInstaCard />
        <CustomInstaCard />
      </div>
    </div>
  );
}

export default App;
