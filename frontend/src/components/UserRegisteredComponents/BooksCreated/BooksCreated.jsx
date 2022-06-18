import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import {usuarioCreated} from '../../../redux/actions/actionCreatedUser'
import Books from './Books'



export default function BooksCreated() {
    const dispatch = useDispatch()
    const { id } = useParams();

    console.log(id)
   
    useEffect(() => {
        dispatch(usuarioCreated(id))
      }, [dispatch]);

     const allBooks = useSelector((state) => state.booksCreated);
    console.log(allBooks)

    return(
        <>
          <h1>holissssss</h1>
          <Link to="/home">Volver al home</Link>
        {  allBooks.map((e, i) => {
            return (
              <div key={i}>
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
        </>
    )


}