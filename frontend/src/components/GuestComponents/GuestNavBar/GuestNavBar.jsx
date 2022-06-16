import React from 'react';
import { Link } from 'react-router-dom';
import style from './GuestNavBar.module.css';


export default function GuestNavBar() {
    
    return (
        <div>
            <nav className={style.nav}>
                <Link to="/" className={style.link}>HOME</Link>
                <Link to="/aboutUs" className={style.link}>ABOUT</Link>
                <Link to="/homeout" className={style.link}>REGISTER/LOGIN</Link>
               </nav>
        </div>
    )
} 