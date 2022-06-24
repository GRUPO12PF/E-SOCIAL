import React from 'react'
import s from './Orders.module.css'

function Order({ id, nombre, image }) {

<<<<<<< HEAD
  return (
    <div className={s.container}>

      <div className={s.card}>

        <div className={s.cardbody}>
          <h4 className={s.texto}>{nombre}</h4>
          <p className={s.texto}>ID: {id}</p>
          <img className={s.im} src={image} />
        </div>

      </div>

    </div>
  )
=======
    return (
             <div className={s.container}>
             <div className={s.card}>
             <div className={s.cardbody}>
             <h4 className={s.nombre}>{nombre}</h4> 
                <img className={s.im} src={image}/>
                <p className={s.texto}>ID: {id}</p>
                </div> 
            </div>
            </div>
    )
>>>>>>> bf4c3e6d8ee2d80cd640ec7bcd411191290401a6
}

export default Order
