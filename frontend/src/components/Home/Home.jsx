import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Book from '../Book/Book.jsx'
import { userLogout } from '../../redux/actions/actionUser'
import Pagination from '../Pagination/Pagination.jsx'
import Loading from '../Loading/Loading.jsx'
import NotFound from '../NotFound/NotFound.jsx'
import NavBar from '../NavBar/NavBar'
import style from './Home.module.css'
import SearchBar from '../SearchBar/SearchBar.jsx'

export default function Home() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const allBooks = useSelector(state => state.books)
  const token = localStorage.getItem("token")

  if (!token) {
    navigate('/')
  }

  function logOut() {
    dispatch(userLogout)
  }
  // eslint-disable-next-line
  //const [order, setOrder] = useState('')
  // const [pageCurrent, setPageCurrent] = useState(1)
  // const pageSize = 8
  // const indexOfLastBooks = pageCurrent * pageSize
  // const indexOfFirstBooks = indexOfLastBooks - pageSize
  // const currentBooks = allBooks?.slice(indexOfFirstBooks, indexOfLastBooks)
  const [loading, setLoading] = useState(true)

  if (allBooks?.length > 0 && loading) {

    setTimeout(() => {
      setLoading(false)
    },2000);

  }
  // const page = (pageNumber) => {
  //   setPageCurrent(pageNumber)
  // }

  // const goToNextPage = () => setPageCurrent(pageCurrent + 1)
  // const goToPreviousPage = () => {
  //   if (pageCurrent > 1) setPageCurrent(pageCurrent - 1)
  // }

  return (
    <div>


      <div> <NavBar /> </div>
      <div className={style.busqueda}> <SearchBar/> </div>
      <div onClick={() => logOut()}>
        <Link to='/'>
          <h3 className={style.logout}>Logout</h3>
        </Link>
      </div>
      
      
      <div className={style.contenedorBooks}>
        {allBooks.length > 0 && !loading ? (
          allBooks && allBooks.map((e, i) => {
            // console.log(e)
            // console.log para revisar qué llega de cada elemento en los libros! 

            return (
              <div key={i}>
                {e.error ? <h1>ERROR!</h1> :
                  <Link to={'/details/' + e._id}>
                    <Book
                      id={e._id}
                      nombre={e.nombre}
                      image={e.image}
                    />
                  </Link>}
              </div>
            )
          })
        ) : <Loading />
        }
      </div>
      <Pagination />
    </div>
  )
}
