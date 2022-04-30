import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = async () => {
    await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .then(result => setPokemon(result.data.results.map(poke=>poke.name)));
    console.log(pokemon);
  };

  return (
    <div className="App">
      <button onClick={async ()=>getPokemon()}>Fetch Pokemon</button>
      <ul>
        {
          pokemon.map((poke, index)=>(<li key={index}>{poke}</li>))
        }
      </ul>
    </div>
  );
}

export default App;
