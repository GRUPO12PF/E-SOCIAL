import React from 'react'
import style from './Book.module.css'
import book from '../../../assets/images/book.svg'

function Book({ nombre, image, price }) {

    return (
        <div className={style.bookItem}>
            <div>
                <h1 className={style.nombre}>{nombre}</h1>
                <img
                    className={style.book}
                    src={image || book}
                    alt='Img not found'
                />
                <h2 className={style.nombre}>Precio: {price}</h2>
            </div>
        </div>
    )
}

export default Book