import React from "react"
import AllBooks from "../AllBooks/AllBooks.jsx"
import NavBar from "../NavBar/NavBar"
import SearchBar from "../SearchBar/SearchBar.jsx"

import Carousell from "../Carousel/Carousell.jsx"

export default function Home() {
  return (
    <div>

      <div className="contenedorTotal">
        <NavBar />
        <Carousell />
        <AllBooks />
      </div>

    </div>
  )
}
