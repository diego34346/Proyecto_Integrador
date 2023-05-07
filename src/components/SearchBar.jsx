export default function SearchBar(props) {
   // const key = () => {}
   return (
      <div>
         <input type='search' />
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
