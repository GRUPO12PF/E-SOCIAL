import React from 'react'
import book from '../../../assets/images/book.svg'
import { deleteBook } from "../../../redux/actions/actionBooks";
import swal from 'sweetalert';
import s from "./Books.module.css";

function Books({ nombre, image, price }) {
    const token = localStorage.getItem("token");
    

    function handleDeleteBook(e) {
        e.preventDefault();
        dispatch(deleteBook(id));
        swal({
          title: "Eliminado con exito!",
          text: " ",
          icon: "success",
          button: "Ok!",
        });
        navigate("/");
    
      }
      function handleUpdateBook(e) {
        e.preventDefault();
        navigate(`/details/update/${id}`);
      }

    return (
        <div className="bookItem">
            
            <div>
                <h1 className="nombre">Nombre del libro:{nombre}</h1>
                <img
                    className="book"
                    src={image || book}
                    alt='Img not found'
                />
                <h2 className="nombre">Precio: {price}</h2>
            </div>
            <div>

             {token ? (
            <div className={s.botoness}>
              <button className={s.btn} onClick={(e) => handleDeleteBook(e)}>
                DELETE


              </button>
              <button className={s.btn} onClick={(e) => handleUpdateBook(e)}>
                UPDATE
              </button>
            </div>
          ) : null}
            </div>
        </div>
    )
}

export default Books