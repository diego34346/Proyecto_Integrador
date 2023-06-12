import style from "./Card.module.css";
import { Link } from "react-router-dom"
import { addFav,removeFav } from "../../Redux/actions";
import { connect } from "react-redux";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Card({id, name, image, gender, onClose, addFav, removeFav}) {
   
   const [isFav, setIsFav] = useState(false)   
   const myFavorites = useSelector((state)=> state.myFavorites)
   // const allCharacters = useSelector((state) => state.allCharacters)   
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });   
   // eslint-disable-next-line
   }, [myFavorites]);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         (removeFav(id))
      }else{
         setIsFav(true);
         (addFav({id, name, image, gender, onClose}))
      }
   }

   return (
      <div className = {style.divContainer}>
         
         <div className={style.btnFav}>
         {
         isFav ? (
         <button onClick={handleFavorite}>❤️</button>
         ) : (
         <button onClick={handleFavorite}>🤍</button>
         )
         } 
         </div>      

         <button onClick = {() => onClose(id)} className={style.closeButton}>C L O S E</button>
         <Link className = {style.link} to={`/detail/${id}`}>
         <h3><strong>Id:</strong> {id}</h3> 
         </Link>
         <Link className = {style.link} to={`/detail/${id}`}>
         <h3><strong>Name:</strong> {name}</h3>
         </Link>
         {/* <h3><strong>Status:</strong> {props.status} </h3>
         <h3><strong>Species:</strong> {props.species}</h3>
         <h3><strong>Gender:</strong> {props.gender}</h3>
         <h3><strong>Origin:</strong> {props.origin}</h3> */}
         <Link to={`/detail/${id}`}>
         <img src={image} alt='Imagen' />
         </Link>                       
      </div>
   );
}

// Como es un componente funcional se puede usr useSelector
// y omitir mapStateToProps

// export function mapStateToProps (state) {
//    return {
//       myFavorites: state.myFavorites,
//    }
// }

export function mapDispatchToProps (dispatch) {
   return {
      addFav: (character) => {
         dispatch(addFav(character));
      },
      removeFav: (id) => {
         dispatch(removeFav(id));
      }
   }
}

export default connect(null, mapDispatchToProps)(Card);
