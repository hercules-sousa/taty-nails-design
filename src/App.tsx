import "./App.css";

import logo from "./assets/images/logoMarca.png";

function App() {
  return (
    <div className="container">
      <header>
        <h3>Home</h3>
        <h3 className="space-given">Galeria</h3>
        <h3 className="space-given">Contato</h3>
      </header>

      <main>
        <img width={200} src={logo} alt="Logo" />
      </main>
    </div>
  );
}

export default App;
