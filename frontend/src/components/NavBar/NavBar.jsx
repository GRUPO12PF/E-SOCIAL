import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
//import { userLogout } from '../../redux/actions/actionUser'

export default function NavBar() {
    function logOut() {
        window.localStorage.removeItem("token");
    }
    return (
        <div>
            <nav className={style.nav}>
                <Link to="/home" className={style.link}>HOME</Link>
                <Link to="/create" className={style.link}>CREATED</Link>
                <Link to="/about" className={style.link}>ABOUT</Link>
                <Link to="/home/usuario/setting" className={style.link}>SETTINGS</Link>
                <div onClick={() => logOut()}>
                    <Link to='/'>
                        <h3 className={style.logout}>LOGOUT</h3>
                    </Link>
                </div>
            </nav>
        </div>
    )
} 