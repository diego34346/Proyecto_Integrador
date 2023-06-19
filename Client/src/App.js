import "./App.css";
// import Card from './components/Card/Card.jsx';
import Cards from "./components/Cards/Cards.jsx";
// import SearchBar from './components/SearchBar/SearchBar.jsx';
import Nav from "./components/Nav/Nav";
import Favorites from "./components/Favorites/favorites";
// import characters, { } from './data.js';
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/form";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCharacter, removeCharacter } from "./Redux/actions";
import axios from "axios";


function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    if (characters.some((character) => character.id === parseInt(id))) {
      setCharacters((oldChars) => [...oldChars]);
      return window.alert("Repeated card");
    }
    
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
          dispatch(addCharacter(data))
        } else {
          window.alert("There are no characters with that ID");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
    dispatch(removeCharacter(id));
  };

  const onRandom = () => {
    onSearch(Math.floor(Math.random() * 826) + 1);
  };  

  const [access, setAccess] = useState(false);

  // const EMAIL = "diego@email.com"
  // const PASSWORD = "654321"

  useEffect(() => {
    !access && navigate('/')    
    // eslint-disable-next-line
    }, [access]);

  // const Login = (userData) => {
  //   if (userData.password === PASSWORD && userData.email === EMAIL) {
  //      setAccess(true)
  //      navigate('/home')      
  //   }
  // }  

  function Login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(data);
       access && navigate('/home');
    });
 }

  return (
    <div>     
      <div>
        {location.pathname !== "/" ? <Nav onSearch={onSearch} SearchRandom={onRandom} /> : ""}        
      </div>

      <div className="App">
        
        <Routes>     

          <Route path='/' element={<Form Login={Login} />} /> 
          <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
          <Route path="/fav"  element={<Favorites/>} />
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
    </div>
  );
}

export default App;
