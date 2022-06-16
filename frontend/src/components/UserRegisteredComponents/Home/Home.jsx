import React from 'react'
import AllBooks from '../../CommonComponents/AllBooks/AllBooks.jsx'
import NavBar from '../NavBar/NavBar.jsx'
import s from './Home.module.css'
import SearchBar from '../../CommonComponents/SearchBar/SearchBar.jsx'


export default function Home() {
return(
  <div className={s.contenedorGral}>
    <NavBar />
    <div> 
      <SearchBar/>
       </div>
    <div> 
      <AllBooks/>
       </div>

  </div>
)
}

