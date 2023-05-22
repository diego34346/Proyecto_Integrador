import style from "./SearchBar.module.css"
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar( {onSearch} ) {
   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   }

   const handleKeyUp = (event) => {
      if (event.keyCode === 13) {
        onSearch(id, setId);
      }
    };

   return (
      <div>
         <input 
         
         className={style.inputid} 
         type='search' 
         onChange={handleChange}
         placeholder="Add an id"
         onKeyUp={handleKeyUp}
         />

         <Link to="/home">
         <button 
         className={style.add} 
         onClick={()=>onSearch(id)}>
            <span className={style.span}>Search + Add</span>

         </button>
         </Link>
        
      </div>
   );
}
