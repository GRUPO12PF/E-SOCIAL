import React from 'react';
import s from '../ProfileUsers/ProfileBook.module.css'

function ProfileBook({ nombre, autor, image }) {

    return (

        
        <div className="container-profile">
            <div className={s.card}>
                <div className={s.cardbody}>
                    <p className={s.texto}>{nombre}</p>
                    <p className={s.texto}>{autor}</p>
                    <img className={s.im} src={image} />
                </div>
            </div>
        </div>
    )
}

export default ProfileBook