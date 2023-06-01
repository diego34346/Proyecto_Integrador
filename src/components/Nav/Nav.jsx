import SearchBar from "../SearchBar/SearchBar.jsx";
import Style from "./Nav.module.css";
import SearchRandom from "../SearchRandom/SearchRandom.jsx";
import { Link } from "react-router-dom";

export default function Nav(props) {




  return (
    <nav className={Style.navContainer}>
      <img className={Style.img} src="ram.png" alt="Rick" />
      
      <Link to="/about">
        <button className={Style.about}>About</button>
      </Link> 

      <Link to="/home">
        <button className={Style.home}>Home</button>
      </Link>          

      <Link to="/favorites">
        <button className={Style.favorites}>Favorites</button>
      </Link>  
      
      <SearchBar onSearch={props.onSearch} />
      <SearchRandom SearchRandom={props.SearchRandom} />

      <Link to="/">
        <button className={Style.logout}>Logout</button>
      </Link>
      
    </nav>
  );
}
