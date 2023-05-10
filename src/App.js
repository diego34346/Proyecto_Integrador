import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters, { Rick } from './data.js';



function App() {
   return (
      <div className='App'>
         {/* <img src="./background.jpg" alt="background"></img> */}

         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         <Cards 
            characters={characters} 
            onClose={() => window.alert('Emulamos que se cierra la card')}
            // Tambien lo podemos hacer asi: (Quitando la funcion de linea anterior "onClose")
         />
         <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         />
      </div>
   );
}

export default App;