import SearchBar from "../SearchBar/SearchBar.jsx";
import Style from "./Nav.module.css";
import SearchRandom from "../SearchRandom/SearchRandom.jsx";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <nav className={Style.navContainer}>
      {/* <img className={Style.img} src="ram.png" alt="Rick" /> */}
      
      <Link to="/about">
        <button>About</button>
      </Link>

      <Link to="/home">
        <button>Home</button>
      </Link>
      
      <SearchBar onSearch={props.onSearch} />
      <SearchRandom SearchRandom={props.SearchRandom} />
      
    </nav>
  );
}
