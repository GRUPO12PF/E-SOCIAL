import React from "react";
import s from './NotFound.module.css';
import image from '../../../assets/images/Notfoundid.png';

export default function NotFound() {
    
    return (
        <div>
        <img className={s.notFoundId} src={image}alt=''/>
    </div>
    )
}
