export default function SearchBar(props) {
   // const key = () => {}
   return (
      <div>
         <input type='search' />
         <button id="add" onClick={props.onSearch}><span>Agregar</span></button>
      </div>
   );
}
