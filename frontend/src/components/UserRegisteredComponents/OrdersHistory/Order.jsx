import React from 'react'
import s from './Orders.module.css'
function Order({ id, nombre, image }) {

    return (
             <div className={s.container}>
             <div className={s.card}>
             <div className={s.cardbody}>
             <h4 className={s.texto}>{nombre}</h4> 
                <p className={s.texto}>ID: {id}</p>
                <img className={s.im} src={image}/>
                </div> 
            </div>
            </div>
    )
}

export default Order