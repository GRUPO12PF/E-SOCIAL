import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usuarioCreated } from '../../../redux/actions/actionCreatedUser';
import Books from './Books';
import NavBar from '../../CommonComponents/NavBar/NavBar.jsx';
import s from './BooksCreated.module.css';
import { useParams, Link } from 'react-router-dom';
import Footer from '../../CommonComponents/Footer/Footer';

export default function BooksCreated() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const allBooks = useSelector((state) => state.booksCreated)
  console.log(allBooks)

  useEffect(() => {
    dispatch(usuarioCreated(id))
  }, [dispatch]);

  return (
    <div className={s.todo}>
      <NavBar />

      <Link to='/profile'>
        <button className={s.btnBook}>VOLVER AL MENU</button>
      </Link>
      <div className={s.container}>
        <div className="text-center w-full">
          <h3 className={s.titulo}>MIS LIBROS</h3>
          <div className={s.contenedorGral}>
            <div className={s.contenedorBooks}>
              {allBooks.length > 0 ? (
                allBooks?.map((e, i) => {
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
                })
              ) : (
                <h3>TODAVIA NO TIENES LIBROS PUBLICADOS</h3>
              )
              }
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}




