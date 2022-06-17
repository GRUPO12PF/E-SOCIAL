import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';


export default function NavBar() {
    const token = localStorage.getItem("token");
    function logOut() {
        window.localStorage.removeItem("token");
    }
    return (
        <div>
            <nav className={style.nav}>
                <Link to="/" className={style.link}>HOME</Link>
                {token ? ( <Link to="/create" className={style.link}>CREATED</Link> ) : null}
                <Link to="/about" className={style.link}>ABOUT</Link>
                {token ? ( <Link to="/user/setting" className={style.link}>SETTINGS</Link> ) : null}
                {!token ? ( <Link to="/homeout" className={style.link}>REGISTER/LOGIN</Link> ) : null}
                {token ? ( <div onClick={() => logOut()}>
                    <Link to='/'>
                        <h3 className={style.logout}>LOGOUT</h3>
                    </Link>
                </div> ) : null}
            </nav>
        </div>
    )
} 