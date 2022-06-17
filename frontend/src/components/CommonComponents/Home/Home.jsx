import React from 'react'
import AllBooks from '../AllBooks/AllBooks.jsx'
import NavBar from '../NavBar/NavBar'
import SearchBar from '../SearchBar/SearchBar.jsx'
import Alien from '../../../Iconos/Alien.jsx'

export default function Home() {
return(
  <div className='contenedorTotal'>
    <NavBar />
    <div> 
      <SearchBar/>
    </div>
    <div> 
      <AllBooks/>
    </div>
    <Alien/>
  </div>
)
}

