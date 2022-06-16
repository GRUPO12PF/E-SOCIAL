import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { cleanData, searchByName } from '../../../redux/actions/actionBooks'
import FilterCategories from '../FilterCategories/FilterCategories'
import Sorter from '../../UserRegisteredComponents/Sorter/Sorter'
import s from './SearchBar.module.css'

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
    <div className={s.searchBar}>
      <input className={s.input} type="text" placeholder="Search by Name" onChange={(e) => handleInputChange(e)} />
      <button className={s.btnS} onClick={e => handleSubmit(e)}>Search</button>
      <button className={s.btnR} onClick={e => (handleOnClick(e))}>RELOAD ALL BOOKS</button>
      <div className={s.divFilter}>
        <FilterCategories />
        <Sorter />
      </div>
    </div>
  )
}