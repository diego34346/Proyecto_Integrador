import style from "./SearchBar.module.css"
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar( {onSearch} ) {
   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   }

   const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			onSearch(id)
			setId('')
		}
	}

   return (
      <div id="inputSearch">
         <input 
         className={style.inputid} 
         type='search' 
         onChange={handleChange}
         placeholder="Add an id"
         onKeyUp={handleKeyDown}
         value={id}
         />

         <Link to="/home">
         <button 
         className={style.add} 
         onClick={()=>{onSearch(id)
         setId('')}}>
            <span className={style.span}>Search + Add</span>

         </button>
         </Link>
        
      </div>
   );
}
