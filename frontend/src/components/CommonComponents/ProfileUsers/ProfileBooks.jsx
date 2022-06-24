import React from 'react';
import s from '../ProfileUsers/ProfileBook.module.css'

function ProfileBook({ nombre, autor, image, order }) {

    let vendido
    if (order.length > 0) {
        vendido = 'VENDIDO'
    }

    return (
        <div className="container-profile">
            <div className={s.card}>
                <div className={s.cardbody}>
                    <div className={s.vendido}>{vendido ? vendido : null}</div>
                    <p className={s.texto}>{nombre}</p>
                    <p className={s.texto}>{autor}</p>
                    <img className={s.im} src={image} />
                </div>
            </div>
        </div>
    )
}

export default ProfileBook