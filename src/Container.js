import Pokedex from "./Pokedex";

function Container() {
  return (
    <>
      <div class="container text-center">
        <div class="row align-items-start">
          <Pokedex />
          <Pokedex />
          <Pokedex />
          <div className="Separacion" />
          <Pokedex />
          <Pokedex />
          <Pokedex />
        </div>
      </div>
    </>
  );
}

export default Container;
