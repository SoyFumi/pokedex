import logo from "./logo.svg";
function Pokedex() {
  return (
    <>
      <div class="col-3">
        <div className="card" style={{ width: "200px;" }}>
          <img src={logo} className="App-logo" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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