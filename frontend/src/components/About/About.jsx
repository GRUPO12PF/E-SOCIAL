import React from "react";
import NavBar from "../NavBar/NavBar";
import s from './About.module.css';


export default function About() {

    return (
        <div>
            <div>
                <NavBar />
            </div>
            <h1 className={s.about}>About</h1>
            {/* <img className={s.notFound} src={image}alt=''/> */}
        </div>
    )
}
