import React from 'react'
import style from './Book.module.css'
import Buy from '../Buy/Buy'

function Book({nombre,image, price}) {
    
    return (
        <div className={style.bookItem}>
            <Buy/>
            <div>
                <h1 className= {style.nombre}>{nombre}</h1>
                <img
                    className={style.book}
                    src={image} 
                    alt='Img not found'
                    onError={(e)=>e.target.setAttribute('src','https://pbs.twimg.com/profile_images/1611903252/Books-Icon120x120_400x400.jpg')} />
                    <h2 className={style.nombre}>Precio: {price}</h2>
            </div>
        </div>
    )
}

export default Book