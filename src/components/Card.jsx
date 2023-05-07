export default function Card(props) {
   return (
      <div>
         <button onClick={props.onClose}>X</button>
         <h3>Id: {props.id}</h3>
         <h3>Name: {props.name}</h3>
         <h3>Status: {props.status} </h3>
         <h3>Species: {props.species}</h3>
         <h3>Gender: {props.gender}</h3>
         <h3>Origin: {props.origin}</h3>
         <img src={props.image} alt='Rick Sanchez' />
      </div>
   );
}


// Tambien se peude hacer asi:

// export default function Card({id, name, status, species, gender, origin, image, onClose}) {
//    return (
//       <div>
//          <button onClick={onClose}>X</button>
//          <h3>Id: {id}</h3>
//          <h3>Name: {name}</h3>
//          <h3>Status: {status} </h3>
//          <h3>Species: {species}</h3>
//          <h3>Gender: {gender}</h3>
//          <h3>Origin: {origin}</h3>
//          <img src={image} alt='Rick Sanchez' />
//       </div>
//    );
// }
