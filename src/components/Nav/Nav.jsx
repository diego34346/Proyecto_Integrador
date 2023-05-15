import SearchBar from '../SearchBar/SearchBar.jsx';
import Style from "./Nav.module.css"
import SearchRandom from '../SearchRandom/SearchRandom.jsx';

export default function Nav(props) {

    return (
       <nav className={Style.navContainer}>
          <img className={Style.img}  src="ram.png" alt='Rick' />
          <SearchBar onSearch={props.onSearch} />
          <SearchRandom SearchRandom={props.SearchRandom}/>
       </nav>
    );
 }

