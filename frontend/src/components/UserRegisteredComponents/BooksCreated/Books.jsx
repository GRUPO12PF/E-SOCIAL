import React from 'react'
import book from '../../../assets/images/book.svg'
import { deleteBook } from "../../../redux/actions/actionBooks"
import swal from 'sweetalert'
import s from "./Books.module.css"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

function Books({ nombre, image, price, id, order }) {
  const token = localStorage.getItem("token")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  let vendido
  if (order.length > 0) {
    vendido = 'VENDIDO'
  }

  function handleDeleteBook(e) {
    if (!order.length > 0) {
      e.preventDefault()
      dispatch(deleteBook(id))
      swal({
        title: "¡Eliminado con éxito!",
        text: " ",
        icon: "success",
        button: "OK!",
      })
      navigate("/")
    } else {
      const btnDelete = document.getElementById('delete')
      btnDelete.disabled = true
    }

  }
  function handleUpdateBook(e) {
    if (!order.length > 0) {
      e.preventDefault()
      navigate(`/details/update/${id}`)
    } else {
      const btnUpdate = document.getElementById('update')
      btnUpdate.disabled = true
    }

  }

  function handleInfoBook(e) {
    if (!order.length > 0) {
      e.preventDefault()
      navigate(`/details/${id}`)
    } else {
      const btnInfo = document.getElementById('info')
      btnInfo.disabled = true
    }

  }
  return (
    <div className={s.container}>
      <div className={s.card}>
        <div className={s.cardBody}>

          <div className={s.vendido}>{vendido ? vendido : null}</div>

          <h4 className={s.nombre}>{nombre}</h4>
          <p className={s.precio}>Precio: {price}</p>
          <img
            className={s.book}
            src={image || book}
            alt='Img no encontrada'
          />
          {token ? (
            <div className={s.botoness}>
              <button id='delete' className={s.btn} onClick={(e) => handleDeleteBook(e)}>BORRAR</button>
              <button id='update' className={s.btn} onClick={(e) => handleUpdateBook(e)}>ACTUALIZAR</button>
              <button id='info' className={s.btn} onClick={(e) => handleInfoBook(e)}>INFO</button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Books