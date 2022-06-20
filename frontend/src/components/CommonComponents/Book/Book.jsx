import React from 'react'
import book from '../../../assets/images/book.svg'
import s from './Book.module.css'

function Book({ nombre, image, price,imageUser,nameUser,category }) {



    return (
        
                    <div className={s.container}>
            <div className={s.card}>
                <div className={s.cardheader}>
                <img src={image} alt="rover" />
                </div>
                <div className={s.cardbody}>
                <span className={s.tagtagteal}>{nombre}</span>
                <h4>
                    {price}
                </h4>
                <p>
                    {category +""}
                </p>
                <div className={s.user}>
                    <img src={imageUser} alt="user" />
                    <div className={s.userinfo}>
                    <h5>{nameUser}</h5>
                    <small></small>
                    </div>
                </div>
                </div>
            </div>
            
                
            </div>
    )
}

export default Book