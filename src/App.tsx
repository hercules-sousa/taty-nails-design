import './App.css';
import StandardButton from './components/ButtonStandard';
import backgroundImage from './assets/backgroundImage.png'

function App() {
  return (
    <div className="container">
      <img id="nailsImage" src={backgroundImage} alt="Nails Design"/>
      <StandardButton label="Contatos" />
    </div>
  );
}

export default App;
