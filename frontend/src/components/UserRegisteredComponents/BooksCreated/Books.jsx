import React from 'react'
import book from '../../../assets/images/book.svg'
import { deleteBook } from "../../../redux/actions/actionBooks"
import swal from 'sweetalert'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import s from './BooksCreated.module.css'

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
      alert('No se puede borrar el libro porque se vendio')
    }

  }
  function handleUpdateBook(e) {
    if (!order.length > 0) {
      e.preventDefault()
      navigate(`/details/update/${id}`)
    } else {
      alert('No se puede modificar el libro porque se vendio')
    }
  }

  function handleInfoBook(e) {
    if (!order.length > 0) {
      e.preventDefault()
      navigate(`/details/${id}`)
    } else {
      alert('No se puede ver el detalle de este libro porque se vendio')
    }

  }
  return (
    <div className={s.book}>
    <div className="-300 p-5 md:grid">
      
    <div className="md:flex items-center justify-center">
      
    <div className="bg-white rounded-md py-12 px-5 my-5 md:my-0 text-center shadow max-w-xs mx-auto md:mx-0 flex-grow transform md:scale-110">
    <div className={s.vendido}>{vendido ? vendido : null}</div>
    <img className=" w-24 h-24 object-cover shadow-lg mx-auto" src={image || book} alt="Img no encontrada"/>
    <div>
    
          <h1 className="capitalize font-semibold text-3xl  text-gray-900 mt-6">{nombre}</h1>
      <p className="text-gray-500 mt-1 text-2xl" >{price}</p>
      {token ? (
         <div >
       <button onClick={(e) => handleDeleteBook(e)} className={s.btnBook}>Borrar</button>
       <button onClick={(e) => handleUpdateBook(e)} className={s.btnBook}>Actualizar</button>
       <button onClick={(e) => handleInfoBook(e)} className={s.btnBook}>Info</button>
       </div>
    ) : null}
    </div>
  </div>
  
   </div>
  </div>
</div>
  )
}

export default Books


{/* <div className={s.container}>
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
        <button id='delete' className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75" onClick={(e) => handleDeleteBook(e)}>BORRAR</button>
        <button id='update' className={s.btn} onClick={(e) => handleUpdateBook(e)}>ACTUALIZAR</button>
        <button id='info' className={s.btn} onClick={(e) => handleInfoBook(e)}>INFO</button>
      </div>
    ) : null}
  </div>
</div>
</div> */}