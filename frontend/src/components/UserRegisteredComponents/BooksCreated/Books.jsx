import React from 'react'
import book from '../../../assets/images/book.svg'
import { deleteBook } from "../../../redux/actions/actionBooks"
import swal from 'sweetalert'
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
    <div className="-300 p-5 md:grid">
    <div className="md:flex items-center justify-center">
    <div className="bg-white rounded-md py-12 px-5 my-5 md:my-0 text-center shadow max-w-xs mx-auto md:mx-0 flex-grow transform md:scale-110">
    <img className=" w-24 h-24 object-cover shadow-lg mx-auto" src={image || book} alt="Img no encontrada"/>
    <div>
    <div>{vendido ? vendido : null}</div>
          <h1 className="capitalize font-semibold text-3xl  text-gray-900 mt-6">{nombre}</h1>
      <p className="text-gray-500 mt-1 text-2xl" >{price}</p>
      {token ? (
         <div >
       <button id='delete' onClick={(e) => handleDeleteBook(e)} className="bg-gray-600 text-white py-3 px-6 shadow-md rounded inline mt-8 mr-1 font-semibold racking-wider">Borrar</button>
       <button id='update' onClick={(e) => handleUpdateBook(e)} className="bg-gray-600 text-white py-3 px-6 shadow-md rounded inline mt-2 mr-1 font-semibold racking-wider">Actualizar</button>
       <button id='info' onClick={(e) => handleInfoBook(e)} className="bg-gray-600 text-white py-3 px-6 shadow-md rounded inline mt-2 mr-1 font-semibold racking-wider">Info</button>
       </div>
    ) : null}
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