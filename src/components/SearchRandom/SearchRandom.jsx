import style from "./SearchRandom.module.css"


export default function SearchRandom(props) {
    const handlerandom = () => {
      props.SearchRandom()
    }

   return (
      <div>
         <button 
         className={style.add} 
         onClick={handlerandom}>
            <span className={style.span}>Search Random</span>
         </button>        
      </div>
   );
}