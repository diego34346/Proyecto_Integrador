import "./App.css";
// import Card from './components/Card/Card.jsx';
import Cards from "./components/Cards/Cards.jsx";
// import SearchBar from './components/SearchBar/SearchBar.jsx';
import Nav from "./components/Nav/Nav";
// import characters, { } from './data.js';
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    if (characters.some((character) => character.id === parseInt(id))) {
      setCharacters((oldChars) => [...oldChars]);
      return window.alert("Repeated card");
    }

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const onRandom = () => {
    onSearch(Math.floor(Math.random() * 826) + 1);
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} SearchRandom={onRandom} />
      <Routes>      

        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />

        <Route path="/about" element={<About/>} />

        <Route path='/detail/:id' element={<Detail/>} />

        {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}

        {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
      </Routes>
    </div>
  );
}

export default App;
