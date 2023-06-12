import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards(props) {
   const {characters} = props   
   
  return (
    <div className={style.divContainer}>
      {
         characters.map((element) => (
            <Card   
            key = {element.id}                     
            id = {element.id}
            name = {element.name}
            status = {element.status}
            species = {element.species}
            gender = {element.gender}
            origin = {element.origin.name}
            image = {element.image}
            onClose = {props.onClose}           
            />
         ))
      }      
    </div>
  );
}


// Destructuring de characters:

// export default function Cards({characters}) {
//    const onClose = () => window.alert('Emulamos que se cierra la card')
//   return (
//     <div>
//       {
//          characters.map(({id, name, status, species, gender, origin, image}) => (
//             <Card             
//             id = {id}
//             name = {name}
//             status = {status}
//             species = {species}
//             gender = {gender}
//             origin = {origin.name}
//             image = {image}
//             onClose = {onClose}        
//             />
//          ))
//       }      
//     </div>
//   );
// }