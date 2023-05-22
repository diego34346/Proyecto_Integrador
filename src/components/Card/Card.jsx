import style from "./Card.module.css";
import { Link } from "react-router-dom"

export default function Card(props) {
   return (
      <div className = {style.divContainer}>
         <button onClick = {() => props.onClose(props.id)} className={style.closeButton}>C L O S E</button>
         <Link className = {style.link} to={`/detail/${props.id}`}>
         <h3><strong>Id:</strong> {props.id}</h3> 
         </Link>
         <Link className = {style.link} to={`/detail/${props.id}`}>
         <h3><strong>Name:</strong> {props.name}</h3>
         </Link>
         {/* <h3><strong>Status:</strong> {props.status} </h3>
         <h3><strong>Species:</strong> {props.species}</h3>
         <h3><strong>Gender:</strong> {props.gender}</h3>
         <h3><strong>Origin:</strong> {props.origin}</h3> */}
         <Link to={`/detail/${props.id}`}>
         <img src={props.image} alt='Imagen' />
         </Link>                       
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
