import Card from '../Card/Card'
import React from 'react';
import style from './favorites.module.css'
import { useDispatch, connect } from 'react-redux';
import { useState } from 'react';
import { filterCards, orderCards, resetFilters, removeFav } from '../../Redux/actions';


function Favorites ( props ) {
    const {filterCharacters} = props 
    const dispatch = useDispatch()
    const [selectOrder, setSelectOrder] = useState("DEFAULT")
    const [SelectFilter, setSelectFilter] = useState("DEFAULT")

    
    const handleOrder =(event) => {
        event.preventDefault();
        const { value } = event.target;
        setSelectOrder(value);
        dispatch(orderCards(value))      
    }

    const handleFilter = (event) => {
        event.preventDefault();
        const { value } = event.target;
        setSelectFilter(value);
        dispatch(filterCards(value))
    }
    
    const handleReset = () => {
        dispatch(resetFilters());
        setSelectFilter("DEFAULT");
        setSelectOrder("DEFAULT");
    }
    
    const onCloseFav= (id) => {
        dispatch(removeFav(id));
    }

    return (
        <div>
            <div className={style.select} >
                <select onChange={handleOrder} value={selectOrder}>
                    <option value="DEFAULT" disabled>Select</option>
                    <option value="A">Ascendente</option>
                    <option value="D">Desendente</option>
                </select>

                <select onChange={handleFilter} value={SelectFilter}>
                    <option value="DEFAULT" disabled>Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
                <button className={style.resetFil} onClick={handleReset}>Reset Filters</button>
            </div>

            <div className={style.containerFav}>
            {filterCharacters.map((element) => (
                <Card               
                key = {element.id}                     
                id = {element.id}
                name = {element.name}
                image = {element.image} 
                onClose={() => onCloseFav(element.id)}                  
                />))}
            </div>
        </div>
    )
}

// Generalmente connect y mapStateToProps se usa para componentes de clase, para componentes funcionales
// tambien funciona pero para los funcionales se puede usar useSelector y es mas facil
// Ejemplo:  " const myFavorites = useSelector((state)=> state.myFavorites) "
// importando useSelector: " import { useSelector } from "react-redux"; "

export const mapStateToProps = (state) => {
	return {
		filterCharacters: state.filterCharacters,
	}
}

export default connect(mapStateToProps, null)(Favorites)