import React from 'react'
import book from '../../../assets/images/book.svg'

function Books({ nombre, image, price }) {

    return (
        <div className="bookItem">

            
            
            <div>
                <h1 className="nombre">Nombre del libro:{nombre}</h1>
                <img
                    className="book"
                    src={image || book}
                    alt='Img not found'
                />
                <h2 className="nombre">Precio: {price}</h2>
            </div>
        </div>
    )
}

export default Books