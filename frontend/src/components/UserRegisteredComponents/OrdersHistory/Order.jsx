import React from 'react'
import s from './Orders.module.css'
function Order({ id, nombre, image }) {

    return (
        <div>
            
                <p>{id}</p>

                <p>{nombre}</p>  
                <img className={s.im} src={image}/>
            
        </div>
    )
}

export default Order