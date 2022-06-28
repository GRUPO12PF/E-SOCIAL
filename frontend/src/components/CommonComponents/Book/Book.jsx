import React from "react"
import book from "../../../assets/images/book.svg"
import s from "./Book.module.css"

function Book({ nombre, image, price, imageUser, nameUser}) {
  return (

    <div class="box">
  <div class="top">
    <img className="imagen-atras" src={image} alt="" />
    <h2 class="name">{price}</h2>
    <div class="tab"></div>
    <div class="cirBtn"><img className="redonda-q" src={imageUser} alt="" /></div>
  </div>
  <div class="bottom">
    <ul>
      <il><h3>Address: </h3>1245 W Adams Blvd.</il>
      <il><h3>Telephone: </h3>(213) 803-3928</il>
      <il><h3>Opening Hours: </h3>M - F, 9am - 8pm</il>
    </ul>
    <div class="buttons">
      <a class="btn btnWebsite" target="_blank">{nombre}</a>
     
    </div>
  </div>
</div>
    
    
  )
}

export default Book



{/* <div className="container-book">
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
    </div> */}