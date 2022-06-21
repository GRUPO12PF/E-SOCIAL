import React from 'react'
import s from './Orders.module.css'
function Order({ id, nombre, image }) {

    return (
             <div className={s.container}>
             <div className={s.card}>
             <div className={s.cardbody}>
             <p className={s.texto}>{nombre}</p> 
                <p className={s.texto}>ID: {id}</p>
                <img className={s.im} src={image}/>
                </div> 
            </div>
            </div>
    )
}

export default Order