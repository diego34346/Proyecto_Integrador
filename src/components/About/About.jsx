import React from "react";
import style from './about.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function About(props){
    return(
        <div className={style.container}>
            <div className={style.containAbout} >
                <img src="avatar.png" alt="about" />  
                <div>
                    <h1>Hello!!</h1>
                    <p>I'm Diego, a full stack web developer, I have knowledge in Javascript, Html, CSS, Node, React, Redux, SQL, Git, and more...</p>

                    <div className={style.containIcon} >
                        <Link
                            className={style.brandIcon}
                            to="https://www.linkedin.com/in/diegofeliperosas/"
                            target="_blank"
                            >
                            <FontAwesomeIcon className={style.icon} icon={faLinkedin} />
                        </Link>

                        <Link
                            className={style.brandIcon}
                            to="https://github.com/diego34346"
                            target="_blank"                    
                            >
                            <FontAwesomeIcon className={style.icon} icon={faGithub} />
                            </Link>
                    </div>
                </div>
            </div>        
        </div>
    )
}