export default function Card(props) {
   return (
      <div>
         <button onClick={props.onClose}>X</button>
         <h2>Id: {props.id}</h2>
         <h2>Name: {props.name}</h2>
         <h2>Status: {props.status} </h2>
         <h2>Species: {props.species}</h2>
         <h2>Gender: {props.gender}</h2>
         <h2>Origin: {props.origin}</h2>
         <img src={props.image} alt='Rick Sanchez' />
      </div>
   );
}


// Tambien se peude hacer asi:

// export default function Card({id, name, status, species, gender, origin, image, onClose}) {
//    return (
//       <div>
//          <button onClick={onClose}>X</button>
//          <h2>Id: {id}</h2>
//          <h2>Name: {name}</h2>
//          <h2>Status: {status} </h2>
//          <h2>Species: {species}</h2>
//          <h2>Gender: {gender}</h2>
//          <h2>Origin: {origin}</h2>
//          <img src={image} alt='Rick Sanchez' />
//       </div>
//    );
// }
