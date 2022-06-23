import React, { useEffect } from 'react'
import book from '../../../assets/images/book.svg'
import { deleteBook, cleanData } from "../../../redux/actions/actionBooks";
import swal from 'sweetalert';
import s from "./Books.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';


function Books({ nombre, image, price, id }) {
    const token = localStorage.getItem("token");
  
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
<div className={s.container}>     
<div className={s.card}>
<div className={s.cardBody}>
<img
  className={s.book}
  src={image || book}
  alt='Img not found'
  /> 
<h4 className={s.nombre}>{nombre}</h4>
<p className={s.nombre}>Precio: {price}</p>
</div>
{token ? (
  <div className={s.botoness}>
  <button className={s.btn} onClick={(e) => handleDeleteBook(e)}>DELETE</button>
<button className={s.btn} onClick={(e) => handleUpdateBook(e)}>UPDATE</button>
  </div>
 ) : null}
</div>
</div>

    )
}

export default Books