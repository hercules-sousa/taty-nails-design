import './App.css';
import StandardButton from './components/ButtonStandard';

function App() {
  return (
    <div className="container">
      <header>
        <h3><strong>Taty</strong>NailsDesign</h3>
      </header>

      <main>
        <h1>Tatiane é uma</h1>
        <h1>Nails Designer profissional</h1>
        <StandardButton label="Ver Trabalhos" />
      </main>
    </div>
  );
}

export default App;
