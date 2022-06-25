import React from "react"
import book from "../../../assets/images/book.svg"
import s from "./Book.module.css"

function Book({ nombre, image, price, imageUser, nameUser}) {
  return (
    <div className="container">
      <div className="card-book">
        <div className="cardheader-book">
        <img className="book-book" src={image || book} alt='Imagen no encontrada' />
        </div>
        <div className="cardbody-book">
          <span className="tagtagteal-book">{nombre}</span>
          <h4 className="priceee">{price}</h4>
         
          <div className="user-book">
            <img src={imageUser} alt="user" />
            <div className="userinfo-book">
              <h5>{nameUser}</h5>
              <small></small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Book
