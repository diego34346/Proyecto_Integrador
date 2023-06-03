import { connect } from 'react-redux'
import Card from '../Card/Card'
// import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from '../../Redux/actions';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../../Redux/actions';
import React from 'react';
import style from './favorites.module.css'


function Favorites ( props ) {
    const {myFavorites} = props 
    const [aux, setAux] = useState(false)
    const dispatch = useDispatch()

    function handleOrder(event) {
        dispatch(orderCards(event.target.value))
        setAux(!aux)
    }

    function handleFilter(event) {
        dispatch(filterCards(event.target.value))

    }
    
    return (
        <div>
            <div className={style.select} >
                <select onChange={handleOrder}>
                    <option value="A">Ascendente</option>
                    <option value="D">Desendente</option>
                </select>

                <select onChange={handleFilter}>
                    <option value="All">All Genders</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>

            <div className={style.containerFav}>
            {myFavorites.map((element) => (
                <Card               
                key = {element.id}                     
                id = {element.id}
                name = {element.name}
                image = {element.image}   
                onClose = {element.onClose}                    
                />))}
            </div>
        </div>
    )
}

export const mapStateToProps = (state) => {
	return {
		myFavorites: state.myFavorites,
	}
}

export default connect(mapStateToProps, null)(Favorites)