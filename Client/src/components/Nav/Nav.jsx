import SearchBar from "../SearchBar/SearchBar.jsx";
import style from "./Nav.module.css";
import SearchRandom from "../SearchRandom/SearchRandom.jsx";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Nav(props) {

  return (
    <nav className={style.navContainer}>
      <img className={style.img} src="ram.png" alt="Rick" />
      
      <Link to="/about">
        <button className={style.about}>About me</button>
      </Link> 

      <Link to="/home">
        <button className={style.home}>Home</button>
      </Link>          

      <Link to="/fav">
        <button className={style.favorites}>
          <span>Favorites</span>
          <FontAwesomeIcon
            className={style.heart}
            icon={faHeart}
          />
          </button>
        
      </Link>  
      
      <SearchBar onSearch={props.onSearch} />
      <SearchRandom SearchRandom={props.SearchRandom} />

      <Link to="/">
        <button className={style.logout}>Logout</button>
      </Link>
      
    </nav>
  );
}
