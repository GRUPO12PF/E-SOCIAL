import React from 'react';
import { useNavigate } from 'react-router';
import s from '../ProfileUsers/ProfileBook.module.css'

function ProfileBook({ nombre, autor, image, order, id }) {
    const navigate = useNavigate()
    let vendido
    if (order.length > 0) {
        vendido = 'VENDIDO'
    }

    let details
    if (!order.length > 0) {
        details = "ver mas"
    }

    function handleOnClickDetail() {
        navigate(`/details/${id}`)
    }
    return (
        <div className="container-profile">
            <div className={s.card}>
                <div className={s.cardbody}>
                    <div className={s.vendido}>{vendido ? vendido : null}</div>
                    <p className={s.texto}>{nombre}</p>
                    <p className={s.texto}>{autor}</p>
                    {details ? <button onClick={() => (handleOnClickDetail())}>{details}</button> : null}
                    <img className={s.im} src={image} />
                </div>
            </div>
        </div>
    )
}

export default ProfileBook
