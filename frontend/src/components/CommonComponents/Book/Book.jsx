import React from 'react'
import book from '../../../assets/images/book.svg'
import Buy from '../../UserRegisteredComponents/Buy/Buy'

function Book({ nombre, image, price }) {

    return (
        <div className="bookItem">
            
            <div>
                <h1 className="nombre">{nombre}</h1>
                <img
                    className="book"
                    src={image || book}
                    alt='Img not found'
                />
                <h2 className="nombre">Precio: {price}</h2>
            </div>
            <Buy/>
        </div>
    )
}

export default Book