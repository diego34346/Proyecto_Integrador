import { connect } from 'react-redux'
import Card from '../Card/Card'


export function Favorites ( props ) {
    const {myFavorites} = props 
    
    return (
        <div>
            {myFavorites.map((element) => (
            <Card               
            key = {element.id}                     
            id = {element.id}
            name = {element.name}
            image = {element.image}   
            onClose = {element.onClose}                    
            />
         ))}
        </div>
        

    )

}

export const mapStateToProps = (state) => {
	return {
		myFavorites: state.myFavorites,
	}
}

export default connect(mapStateToProps, null)(Favorites)