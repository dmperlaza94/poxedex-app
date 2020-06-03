import React from "react";

const Lista = (props) => {
  return (
    <ul>
      {props.pokemons.map((pokemon) => {
        return <div>{pokemon.name}</div>;
      })}
    </ul>
  );
};

export default Lista;
