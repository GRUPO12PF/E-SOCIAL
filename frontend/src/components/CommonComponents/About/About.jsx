import React from "react"
import NavBar from "../NavBar/NavBar"

export default function About() {
  return (
    <><NavBar />
      <section className="info-about">
        <div className="row-about">
          <div className="card-about">
            <h2 className="h2-about about">About</h2>
            <p className="p-about">Somos un grupo de alumnos de Henry realizando nuestro proyecto final, el cual es una app de e-commerce de libros. El objetivo es que los usuarios pueden comprar, vender, seguir
              usuarios populares, dejar reseñas del producto y hacer comentarios del vendedor después de la compra.
              La idea es agregarle más funcionalidades apuntando a fomentar el crecimiento de la comunidad que interactúa. Como usuario, vamos a poder agregar productos en nuestro
              perfil, editar y borrar para que otros usuarios puedan ver detalle del producto y agregar en carrito y poder comprar. Para poder aprovechar la máxima funcionalidad de la página
              los usuarios necesitan estar logueados para poder comprar y vender. Como guest el usuario podría solo visualizar la lista de productos general, el detalle del producto y sus
              respectivas reseñas dejadas por usuarios que una vez compraron el producto.</p>
          </div>

        </div>
      </section>
    </>
  )
}
