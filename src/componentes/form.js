import React from "react";
import Lista from "./listpokemon";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      img: "#",
    };
  }

  componentDidMount() {
    this.pokemonApi();
  }
  pokemonApi = async () => {
    let response = await fetch(
      "http://pokeapi.salestock.net/api/v2/pokemon/?limit=25"
    );
    let data = await response.json();

    this.setState({ pokemons: data.results });
  };
  render() {
    if (this.state.pokemons) {
      return (
        <div>
          <h5> Esta es la lista de pokemones </h5>
          <Lista pokemons={this.state.pokemons} />
        </div>
      );
    }
  }
}

export default Form;
