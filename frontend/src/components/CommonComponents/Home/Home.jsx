import React from 'react'
import AllBooks from '../AllBooks/AllBooks.jsx'
import NavBar from '../NavBar/NavBar'
import SearchBar from '../SearchBar/SearchBar.jsx'
import Footer from '../Footer/Footer.jsx' 


export default function Home() {
return(
  <div className="contenedorGral">
    <NavBar />
    <div> 
      <SearchBar/>
       </div>
    <div> 
      <AllBooks/>
       </div>
<div>
  <Footer/>
</div>
  </div>
)
}

