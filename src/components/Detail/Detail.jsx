import React from "react";
import style from "./Detail.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";



export default function Detail(){

    const [character, setCharacter] = useState({});
    const {id} = useParams(); 

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.name) {
                    setCharacter(data);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            });
            return setCharacter({});
    }, [id]);

    return(
        <div className = {style.divContainer}>{
            character.name ? (
                <div className = {style.detailContainer}>
                    <h1><strong>{character.name}</strong></h1>
                    <h2><strong>Status: </strong>{character.status}</h2>
                    <h2><strong>Species: </strong>{character.species}</h2>
                    <h2><strong>Gender: </strong>{character.gender}</h2>
                    <h2><strong>Origin: </strong>{character.origin.name}</h2>
                    <img src={character.image} alt='Imagen' />
                </div>
            ) : (
                <h3>Loading...</h3>
            )}
            
        </div>
    )
}