import React, { Component } from "react";

class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      img: "#",
    };
  }

  /*
  async componentDidMount(){
    await this.fetchJale()
  }*/

  fetchJale = async () => {
    //let res = await fetch('https://pokeapi.co/api/v2/pokemon/venusaur')
    let res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${this.state.name}`
    );
    let data = await res.json();

    //console.log(data['sprites']['front_default'])
    console.log(data.name);
    console.log(data.sprites.front_default);
    this.setState({
      img: data.sprites.front_default,
    });
  };

  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleSubmit = (event) => {
    var jeje = this.state.name;
    console.log(jeje);
    alert(jeje);
    this.fetchJale();
    //limpiar
    this.setState({
      name: "",
    });
    event.preventDefault();
  };

  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-dark text-warning">Pokedex</div>
        <div className="card-body bg-danger">
          <form onSubmit={this.handleSubmit}>
            <label className="text-warning">Ingrese el nombre pokemon</label>
            <br />
            <input
              type="text"
              placeholder="nombre"
              value={this.state.name}
              onChange={this.handleName}
            />
            <br />
            <br />
            <button type="submit" className="btn btn-primary">
              submit
            </button>
            <br />
            <br />
          </form>
          <img className="border border-dark mg-2" src={this.state.img} />
        </div>
      </div>
    );
  }
}

export default Formulario;
