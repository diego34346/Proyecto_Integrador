import style from "./SearchBar.module.css"
import { useState } from "react";

export default function SearchBar( {onSearch} ) {
   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   }

   return (
      <div>
         <input 
         className={style.input} 
         type='search' 
         onChange={handleChange}
         />
         <button 
         className={style.add} 
         onClick={()=>onSearch(id)}>
            <span className={style.span}>Search</span>
         </button>
        
      </div>
   );
}
