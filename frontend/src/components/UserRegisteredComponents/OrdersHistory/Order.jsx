import React from 'react'
import s from './Orders.module.css'
import Footer from '../../CommonComponents/Footer/Footer'

function Order({ id, nombre, image }) {
  return (
    <div className={s.container}>
      <div className={s.card}>

        <div className={s.cardbody}>
          <h4 className={s.nombre}>{nombre}</h4>
          <img className={s.im} src={image} />
          <p className={s.texto}>ID: {id}</p>
        </div>
        
      </div>
    </div>
  )
}

export default Order
