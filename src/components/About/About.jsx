import React from "react";
import style from './about.module.css'

export default function About(props){
    return(
        <div className={style.container}>
            <div className={style.containAbout} >
                <img src="avatar.png" alt="about" />  
                <div>
                <h1>Hello!!</h1>
                <p>I'm Diego, a full stack web developer, I have knowledge in Javascript, Html, CSS, Node, React, Redux, SQL, Git, and more...</p>
                </div>
            </div>        
        </div>
    )
}