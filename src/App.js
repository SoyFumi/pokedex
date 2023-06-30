import logo from './logo.svg';
import './App.css';
import Pokedex from "./Pokedex";
import Container from "./Container";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi Equipo</h1>
      </header>
      <div class="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Nombre de Pokémon"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Buscar
        </button>
      </div>
      <Pokedex />
    </div>
  );
}

export default App;
