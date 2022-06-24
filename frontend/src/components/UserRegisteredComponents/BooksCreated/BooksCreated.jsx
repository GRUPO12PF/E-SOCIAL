import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { usuarioCreated } from '../../../redux/actions/actionCreatedUser'
import Books from './Books'
import NavBar from '../../CommonComponents/NavBar/NavBar.jsx'
import s from './BooksCreated.module.css'

export default function BooksCreated() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const allBooks = useSelector((state) => state.booksCreated)

  useEffect(() => {
    dispatch(usuarioCreated(id))
  }, [dispatch])

<<<<<<< HEAD
  return (
    <>
      <NavBar />

      <h3 className={s.titulo}>LIBROS A LA VENTA</h3>
      <div className={s.contenedorGral}>
        <div className={s.contenedorBooks}>
          {allBooks?.map((e, i) => {
            return (
              <div key={i}>
                <Books
                  id={e._id}
                  nombre={e.nombre}
                  image={e.image}
                  price={"$" + e.price + ".00"}
                />
=======
    return(
        <>
        <NavBar />
        
        <h3 className={s.titulo}>MIS LIBROS</h3>
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
>>>>>>> bf4c3e6d8ee2d80cd640ec7bcd411191290401a6
              </div>
            )
          })}
        </div>
      </div>

    </>
  )
}
