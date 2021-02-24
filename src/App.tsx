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

        <main>
          <div id="logo-container" />
        </main>
      </div>
      <div id="info-container"></div>
      <div id="nails-cards-container">
        <CustomInstaCard cardImage={nails1} />
        <CustomInstaCard cardImage={nails2} />
        <CustomInstaCard cardImage={nails1} />
        <CustomInstaCard cardImage={nails2} />
        <CustomInstaCard cardImage={nails1} />
        <CustomInstaCard cardImage={nails2} />
      </div>
      <div id="testimony-container">
        <TestimonyCard />
        <TestimonyCard />
        <TestimonyCard />
      </div>
    </div>
  );
}

export default App;
