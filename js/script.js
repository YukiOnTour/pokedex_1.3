// Define an array of Pokémon objects
const pokemonList = [
  { name: 'Bulbasaur', type: ['Grass', 'Poison'], height: 7},
  { name: 'Charmander', type: ['Fire'], height: 6},
  { name: 'Squirtle', type:['Water'], height: 5},
  { name: 'Pikachu', type:['Electric'], height: 4},
  { name: 'Snorlax', type:['Normal'], height: 21},
  // Add more Pokémon objects here as needed
];

// Loop through each Pokémon object in the array
for (let i = 0; i < pokemonList.length; i++) {
  const pokemon = pokemonList[i];
  
  // Write the Pokémon name, type, height and - Wow, that's big! to the DOM
  if (pokemon.height > 10) {
    document.write(`${pokemon.name} (Type: ${pokemon.type}) (Height: ${pokemon.height}) - Wow, that's big!<br>`);
  } else {
    document.write(`${pokemon.name} (Type: ${pokemon.type}) (Height: ${pokemon.height})<br>`);4
  }
}