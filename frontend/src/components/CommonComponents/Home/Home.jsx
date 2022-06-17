import React from 'react'
import AllBooks from '../AllBooks/AllBooks.jsx'
import NavBar from '../NavBar/NavBar'
import SearchBar from '../SearchBar/SearchBar.jsx'
<<<<<<< HEAD
import Footer from '../Footer/Footer.jsx' 

=======
import Alien from '../../../Iconos/Alien.jsx'
>>>>>>> db1b2da8cef187a0889a917b29dffdbb820a8f00

export default function Home() {
return(
  <div className="contenedorGral">
    <NavBar />
    <div> 
      <SearchBar/>
    </div>
    <div> 
      <AllBooks/>
<<<<<<< HEAD
       </div>
<div>
  <Footer/>
</div>
=======
    </div>
    <Alien/>
>>>>>>> db1b2da8cef187a0889a917b29dffdbb820a8f00
  </div>
)
}

