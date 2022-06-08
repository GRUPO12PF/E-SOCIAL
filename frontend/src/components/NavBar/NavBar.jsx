import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import s from './NavBar.module.css';


function handleOnClick(e) {
    window.location.reload();
    //dispatch(getAll())
    //e.preventDefault();
}


export default function NavBar() {
   
    return (
        <div>
            <nav className={s.nav}>
                <Link to="/home" className={s.link}>HOME</Link>
                <Link to="/create" className={s.link}>CREATED</Link>
                <Link to="/about" className={s.link}>ABOUT</Link>
                <button className={s.btnR} onClick={e => (handleOnClick(e))}>Reload all Books</button>
                <div className={s.busqueda}>
                    <SearchBar
                    />
                </div>
                
            </nav>
        </div>
    )
}