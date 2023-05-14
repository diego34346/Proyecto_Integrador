import SearchBar from '../SearchBar/SearchBar.jsx';
import Style from "./Nav.module.css"

export default function Nav(props) {

    return (
       <nav className={Style.navContainer}>
          <SearchBar onSearch={props.onSearch} />
       </nav>
    );
 }

