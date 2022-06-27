import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usuarioCreated } from '../../../redux/actions/actionCreatedUser'
import Books from './Books'
import NavBar from '../../CommonComponents/NavBar/NavBar.jsx'
import Footer from '../../CommonComponents/Footer/Footer'
import s from './BooksCreated.module.css'
import { useParams, Link } from 'react-router-dom'

export default function BooksCreated() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const allBooks = useSelector((state) => state.booksCreated)
  console.log(allBooks)

  useEffect(() => {
    dispatch(usuarioCreated(id))
  }, [dispatch]);

  return (
    <>
      <NavBar />
      
      <Link to = '/profile'>
        <button className="text-white bg-gray-600 py-3 px-6 shadow-md rounded inline mt-8 mr-1 ml-1 font-semibold racking-wider">VOLVER AL MENU</button>
      </Link>
      <div className="text-center w-full">
   <h3 className={s.titulo}>MIS LIBROS</h3>
      <div className={s.contenedorGral}>
        <div className={s.contenedorBooks}>
          {allBooks?.map((e, i) => {
            return (
              <div key={i}>
                <Books
                  order={e.order}
                  id={e._id}
                  nombre={e.nombre}
                  image={e.image}
                  price={"$" + e.price + ".00"}
                />
              </div>
            )
          })}
        </div>
        </div>
        </div>
       
        {/* <Footer /> */}
      
  
      
    </>
  )
}




