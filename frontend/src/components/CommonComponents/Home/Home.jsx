import React from 'react'
import AllBooks from '../AllBooks/AllBooks.jsx'
import NavBar from '../NavBar/NavBar'
import SearchBar from '../SearchBar/SearchBar.jsx'
import Alien from '../../../Iconos/Alien.jsx'
import Footer from '../Footer/Footer.jsx'
export default function Home() {
return(
  <div className='contenedorTotal'>
    <div>
    <NavBar />
    <SearchBar/>
    <AllBooks/>
    </div>
    <div>
    <Footer/>
    </div>
  </div>
)
}
