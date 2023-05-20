import style from "./SearchRandom.module.css";
import { Link } from "react-router-dom";


export default function SearchRandom(props) {
    const handlerandom = () => {
      props.SearchRandom()
    }

   return (
      <div>
         <Link to="/home">
         <button 
         className={style.add} 
         onClick={handlerandom}>
            <span className={style.span}>Search Random</span>
         </button>         
         </Link>

      </div>
   );
}