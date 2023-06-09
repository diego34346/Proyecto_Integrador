import React from "react";
import style from "./Detail.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// const URL_RENDER = "https://backend-7u7p.onrender.com"
const URL_RENDER = "http://localhost:3001"

// import axios from "axios";
// require('dotenv').config()
// const { URL_RENDER } = process.env



export default function Detail(){

    const [character, setCharacter] = useState({});
    const {id} = useParams(); 

    useEffect(() => {
        fetch(`${URL_RENDER}/rickandmorty/character/${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.name) {
                    setCharacter(data);
                } 
            });
            return setCharacter({});
    }, [id]);

    return(
        <div className = {style.divContainer}>{
            character.name ? (
                <div className = {style.detailContainer}>
                    <div>
                    <h1><strong>{character.name}</strong></h1>
                    <h2><strong>Status: </strong>{character.status}</h2>
                    <h2><strong>Species: </strong>{character.species}</h2>
                    <h2><strong>Gender: </strong>{character.gender}</h2>
                    <h2><strong>Origin: </strong>{character.origin.name}</h2>
                    </div>
                    
                    <div>
                    <img src={character.image} alt='Imagen' />
                    </div>
                </div>
            ) : (
                <h3>Loading...</h3>
            )}
            <div>
            <Link to="/home">
            <button className={style.goBack}>Go Back</button>
            </Link> 
            </div>
            
        </div>
    )
}