import React from "react";
import book from "../../../assets/images/book.svg";
import s from "./Book.module.css";

function Book({ nombre, image, price, imageUser, nameUser, descripcion }) {
  return (
    <div className="container">
      <div className="card-book">
        <div className="cardheader-book">
        <img className="book-book" src={image || book} alt='Img not found' />
        </div>
        <div className="cardbody-book">
          <span className="tagtagteal-book">{nombre}</span>
          <h4>{price}</h4>
          <p className="parrafo-book">{descripcion + ""}</p>
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
  );
}

export default Book;
