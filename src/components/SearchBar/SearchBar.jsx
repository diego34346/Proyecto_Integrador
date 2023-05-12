import style from "./SearchBar.module.css"

export default function SearchBar(props) {

   return (
      <div>
         <input className={style.input} type='search' />
         <button className={style.add} onClick={props.onSearch}><span className={style.span}>Agregar</span></button>
      </div>
   );
}
