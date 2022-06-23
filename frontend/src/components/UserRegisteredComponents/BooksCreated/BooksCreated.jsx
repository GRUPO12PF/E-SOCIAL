import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import {usuarioCreated} from '../../../redux/actions/actionCreatedUser'
import Books from './Books'
import NavBar from '../../CommonComponents/NavBar/NavBar.jsx'
import Footer from '../../CommonComponents/Footer/Footer'
import { usuarioActual } from '../../../redux/actions/actionUser'
import s from './BooksCreated.module.css'

export default function BooksCreated() {
    const dispatch = useDispatch()
    const { id } = useParams();

    // const usuarioActual  = useSelector ((state)=> state.usuario)
    // const userId = usuarioActual._id
    // console.log(userId)
    const allBooks = useSelector((state) => state.booksCreated);
    
    useEffect(() => {
        //dispatch(usuarioActual())
        dispatch(usuarioCreated(id))
      }, [dispatch]);

    return(
        <>
        <NavBar />
        
        <h3 className={s.titulo}>HISTORIAL DE COMPRAS</h3>
        <div className={s.contenedorGral}>
          <div className={s.contenedorBooks}>
        {  allBooks?.map((e, i) => {
          return (
            <div  key={i}>
                    <Books
                      id={e._id}
                      nombre={e.nombre}
                      image={e.image}
                      price={"$" + e.price + ".00"}
                    />
              </div>
            );
          })
        }
        </div>
        </div>
       
        </>
    )


}