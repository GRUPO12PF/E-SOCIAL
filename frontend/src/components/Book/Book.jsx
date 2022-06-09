import React from 'react'
import style from './Book.module.css'

function Book({nombre,image}) {
    
    return (
        <div className={style.bookItem}>
            <div>
                <h1 className= {style.nombre}>{nombre}</h1>
                <img
                    className={style.book}
                    src={image} 
                    alt='Img not found'
                    onError={(e)=>e.target.setAttribute('src','https://images.unsplash.com/photo-1529154691717-3306083d869e?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170')} />
            </div>
        </div>
    )
}

export default Book