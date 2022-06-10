import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import FilterCategories from '../FilterCategories/FilterCategories';


function handleOnClick(e) {
    window.location.reload();
    //dispatch(getAll())
    //e.preventDefault();
}


export default function NavBar() {

    return (
        <div>
            <nav className={style.nav}>
                <Link to="/home" className={style.link}>HOME</Link>
                <Link to="/create" className={style.link}>CREATED</Link>
                <Link to="/about" className={style.link}>ABOUT</Link>
                <button className={style.btnR} onClick={e => (handleOnClick(e))}>RELOAD ALL BOOKS</button>
                <div className={style.DivFilter}>
                    <FilterCategories />
                </div>
                <div className={style.busqueda}>
                    <SearchBar
                    />
                </div>

            </nav>
        </div>
    )
}