import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import Favorites from "./components/Favorites/favorites";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/form";
import Notification from "./components/Notification/Notification.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCharacter, removeCharacter, showNotificacion } from "./Redux/actions";
import axios from "axios";
// require('dotenv').config()
// const { URL_RENDER } = process.env

const URL_RENDER = "https://backend-7u7p.onrender.com"
// const URL_RENDER = "http://localhost:3001"


function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { notification } = useSelector(state => state)

  const [characters, setCharacters] = useState([]);

  const onSearch = async (id) => {
    if (characters.some((character) => character.id === (id))) {
      setCharacters((oldChars) => [...oldChars]);
      return dispatch(showNotificacion({message: "Repeated card", type: 'error' }));
    }
    try {
      const response = await fetch(`${URL_RENDER}/rickandmorty/character/${id}`)
      const data = await response.json()
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
          dispatch(addCharacter(data))
          dispatch(showNotificacion({message: 'Successfully added ', type: 'success' }));
        }
    } catch (error) {
      dispatch(showNotificacion({message: "There are no characters with that ID", type: 'error' }));
    }          
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
    const URL = `${URL_RENDER}/rickandmorty/login/`;
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

        </Routes>
        { notification.message !== "" &&
          <Notification />
        }
      </div>
    </div>
  );
}

export default App;
