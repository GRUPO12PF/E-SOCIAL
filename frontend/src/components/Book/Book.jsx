import React from 'react'
import style from './Book.module.css'
import { Link, useParams } from 'react-router-dom'

function Book({nombre,image, price}) {
    const { id } = useParams()
    const handleBuy = () => {
            dispatch(buyBook(id))
        }
    return (
        <div className={style.bookItem}>
            
            <div>
                <h1 className= {style.nombre}>{nombre}</h1>
                <img
                    className={style.book}
                    src={image} 
                    alt='Img not found'
                    onError={(e)=>e.target.setAttribute('src','https://pbs.twimg.com/profile_images/1611903252/Books-Icon120x120_400x400.jpg')} />
                    <h2 className={style.nombre}>Precio: {price}</h2>
                    <Link to= '/checkout'>
                        <button onClick={(e) => handleBuy(e)} >BUY NOW</button>
                    </Link>
            </div>
        </div>
    )
}

export default Book