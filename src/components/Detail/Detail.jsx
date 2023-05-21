import React from "react";
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
        <div>{
            character.name ? (
                <div>
                    <h2>{character.name}</h2>
                </div>
            ) : (
                <h3>Loading...</h3>
            )}
            <h1>Detail</h1>
        </div>
    )
}