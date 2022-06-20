import React from 'react'
import book from '../../../assets/images/book.svg'
import s from './Book.module.css'

function Book({ nombre, image, price }) {

    return (
        // <div className="bookItem">
            
        //     <div>
        //         <h1 className="nombre">{nombre}</h1>
        //         <img
        //             className="book"
        //             src={image || book}
        //             alt='Img not found'
        //         />
        //         <h2 className="nombre">Precio: {price}</h2>
        //     </div>
            
        // </div>
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
                    An exploration into the truck's polarising design
                </p>
                <div className={s.user}>
                    <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
                    <div className={s.userinfo}>
                    <h5>July Dec</h5>
                    <small>2h ago</small>
                    </div>
                </div>
                </div>
            </div>
            
                
            </div>
    )
}

export default Book