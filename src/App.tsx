import React from "react";

import "./App.css";
import CustomInstaCard from "./components/CustomInstaCard";
import nails1 from "./assets/images/cardsImages/nails1.png";
import nails2 from "./assets/images/cardsImages/nails2.png";
import TestimonyCard from "./components/TestimonyCard";

function App() {
  return (
    <div id="container">
      <div id="first-screen">
        <header>
          <h3>Home</h3>
          <h3 className="space-given">Galeria</h3>
          <h3 className="space-given">Contato</h3>
        </header>

        <div id="logo-space">
          <div id="logo-container" />
        </div>
      </div>
      <div id="info-container">
        <div></div>
        <div id="illustration-container"></div>
      </div>
      <div id="nails-cards-container">
        <header>
          <h1>Galeria de Trabalhos Realizados</h1>
        </header>
        <div id="cards-nails-container">
          <CustomInstaCard cardImage={nails1} />
          <CustomInstaCard cardImage={nails2} />
          <CustomInstaCard cardImage={nails1} />
          <CustomInstaCard cardImage={nails2} />
          <CustomInstaCard cardImage={nails1} />
          <CustomInstaCard cardImage={nails2} />
        </div>
      </div>
      <div id="testimony-container">
        <div>
          <TestimonyCard />
        </div>
        <div>
          <TestimonyCard />
        </div>
      </div>
    </div>
  );
}

export default App;
