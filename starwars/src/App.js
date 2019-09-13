import React, {useState, useEffect} from 'react';
import axios from "axios";
import Character from "./components/Character";
import './App.css';
// import "@testing-library/react";
// import {queryByText} from "@testing-library/dom";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.co/api/people")
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        alert(`Error: ${error}`);
      })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {
        characters.map(character => (
          <Character 
            name={character.name} 
            gender={character.gender} 
            homeworldURL={character.homeworld} 
            speciesURL={character.species}/>
        ))
      }
    </div>
  );
}

export default App;

// Stretch:
// test("Is someone from Alderaan", async () => {
//   expect(queryByText("Alderaan")).toBeTruthy();
// });