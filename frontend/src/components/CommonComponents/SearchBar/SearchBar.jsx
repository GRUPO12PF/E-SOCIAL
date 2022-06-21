import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { cleanData, searchByName } from "../../../redux/actions/actionBooks";
import FilterCategories from "../FilterCategories/FilterCategories";
import Sorter from "../../CommonComponents/Sorter/Sorter";
import SearchIcon from "../../../Iconos/SearchIcon";
//import s from './SearchBar.module.css'

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(searchByName(name));
    dispatch(cleanData());
  }

  function handleOnClick() {
    window.location.reload();
  }

  return (
    <div className="searchBar">
      <form
        className="formbusqueda"
        // onSubmit="event.preventDefault();" // estaba tirando error x consola y comentado no cambia el funcionamiento
        role="search"
      >
        <label className="labelB" htmlFor="search">
          Search for stuff
        </label>
        <input
          className="inputB"
          id="search"
          type="search"
          placeholder="Search..."
          onChange={(e) => handleInputChange(e)}
          autoFocus
          required
        />
        <button
          className="buttonB"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Go
        </button>
      </form>
      <button className="btnR" onClick={(e) => handleOnClick(e)}>
        RELOAD ALL BOOKS
      </button>
      <div className="divFilter">
        <FilterCategories />
        <Sorter />
      </div>
    </div>
  );
}
