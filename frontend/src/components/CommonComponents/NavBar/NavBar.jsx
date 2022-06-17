import React from 'react';
import { Link } from 'react-router-dom';
import IconsLogout from '../../../Iconos/IconsLogout';
import Settings from '../../../Iconos/ArrowLeft';

export default function NavBar() {
    const token = localStorage.getItem("token");
    function logOut() {
        window.localStorage.removeItem("token");
        window.location.reload()
    }
    return (
        <div>
            <nav className="nav">
                <Link to="/" className="link">HOME</Link>
                {token ? ( <Link to="/create" className="link">CREATED</Link> ) : null}
                <Link to="/about" className="link">ABOUT</Link>
                {token ? ( <Link to="/user/setting" className="setting"><Settings/></Link> ) : null}
                {!token ? ( <Link to="/homeout" className="link">REGISTER/LOGIN</Link> ) : null}
                {token ? (<Link to='/' onClick={() => logOut()} className="logout"><IconsLogout /></Link>) : null}
            </nav>
        </div>
    )
} 