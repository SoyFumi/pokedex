import logo from "./logo.svg";
function Pokedex({id, name}) {
  return (
    <>
      <div class="col-6">
        <div className="card" style={{ width: "200px;" }}>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} className="App-logo" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              {id}
            </p>
            <a href="#" className="btn btn-primary">
              Agregar
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pokedex;