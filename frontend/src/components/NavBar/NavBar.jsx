import React from 'react';

import { Link } from 'react-router-dom';
import style from './NavBar.module.css';






export default function NavBar() {

    return (
        <div>
            <nav className={style.nav}>
                <Link to="/home" className={style.link}>HOME</Link>
                <Link to="/create" className={style.link}>CREATED</Link>
                <Link to="/about" className={style.link}>ABOUT</Link>
               
               
               

            </nav>
        </div>
    )
}