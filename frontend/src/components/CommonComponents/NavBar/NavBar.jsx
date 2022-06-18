import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { usuarioActual } from "../../../redux/actions/actionUser";
import { useDispatch, useSelector } from "react-redux";
import IconsLogout from '../../../Iconos/IconsLogout';
import Settings from '../../../Iconos/ArrowLeft';
import profile from '../../../assets/images/avatar.png'
import Order from '../../../Iconos/Order'

export default function NavBar() {
    const dispatch = useDispatch();
    const usuarioAct = useSelector((state) => state.usuarioActual);

    useEffect(() => {
      dispatch(usuarioActual());
    }),
      [dispatch];
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
                <div className="perfil">
                {token ?<h3 className="nameUser">{usuarioAct.nombre}</h3>: null}
                {token ?<img className="fotoperfil" src={usuarioAct?.image ? usuarioAct?.image.url : profile} alt="" />: null}
                {token ?<Link to="/profile">Profile </Link> : null}
                </div>
                {token ?<Link to="/order"><Order/> </Link> : null}
                
            </nav>
        </div>
    )
} 