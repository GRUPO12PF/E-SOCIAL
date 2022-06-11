import React from 'react';
import { useState  } from 'react';
import { useDispatch  } from 'react-redux';
import { cleanData, searchByName } from '../../redux/actions/actionBooks';
import s from './SearchBar.module.css';
import FilterCategories from '../FilterCategories/FilterCategories';
export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    
    function handleInputChange (e){
    e.preventDefault();
    setName(e.target.value);
    } 

    function handleSubmit(e){
        e.preventDefault();
        dispatch(searchByName(name));
        dispatch(cleanData());
    }

    function handleOnClick(e) {
        window.location.reload();
        //dispatch(getAll())
        //e.preventDefault();
    }

    return (
        <div className={s.searchBar}>
            <input className={s.input} type = "text" placeholder = "Search by Name" onChange = {(e)=> handleInputChange(e)}/>
            <button className={s.btnS}onClick ={(e)=> handleSubmit(e)}>Search</button>
            <button className={s.btnR} onClick={e => (handleOnClick(e))}>RELOAD ALL BOOKS</button>
            <div className={s.DivFilter}>
                    <FilterCategories />
                </div>
        </div>
    )
}