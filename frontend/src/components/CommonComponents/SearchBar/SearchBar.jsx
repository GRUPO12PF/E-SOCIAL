import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { cleanData, searchByName } from '../../../redux/actions/actionBooks'
import FilterCategories from '../FilterCategories/FilterCategories'
import Sorter from '../../CommonComponents/Sorter/Sorter'
import SearchIcon from '../../../Iconos/SearchIcon'
//import s from './SearchBar.module.css'

export default function SearchBar() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')

  function handleInputChange(e) {
    e.preventDefault()
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(searchByName(name))
    dispatch(cleanData())
  }

  function handleOnClick() {
    window.location.reload()
  }

  return (

      <div className="searchBar">
      <form onsubmit="event.preventDefault();" role="search">
      <label for="search">Search for stuff</label>
      <input id="search" type="search" placeholder="Search..." onChange={(e) => handleInputChange(e)} autofocus required />
      <button type="submit" onClick={e => handleSubmit(e)}>Go</button>    
      </form>
        
      <button className="btnR" onClick={e => (handleOnClick(e))}>RELOAD ALL BOOKS</button>
      <div className="divFilter">
      <FilterCategories />
      <Sorter />
        </div>
      </div>
   
  )
}