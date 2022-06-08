import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { userLogout } from "../../redux/actions/actionUser";
import { getBooks } from "../../redux/actions/actionBooks";
import { useDispatch, useSelector } from "react-redux";
import Book from "../Book/Book.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import Loading from "../Loading/Loading.jsx";
import NotFound from "../NotFound/NotFound.jsx";


export default function Home() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allBooks = useSelector(state => state.books);
  //const colection = useSelector(state => state.colection);
  useEffect(() => {
    dispatch(getBooks())
    //dispatch(getColection())
  }, [dispatch])

  if (!token) {
    navigate("/");
  }
  function logOut() {
    dispatch(userLogout);
  }
  // eslint-disable-next-line
  //const [order, setOrder] = useState('');
  const [pageCurrent, setPageCurrent] = useState(1);
  const pageSize = 8;
  const indexOfLastBooks = pageCurrent * pageSize;
  const indexOfFirstBooks = indexOfLastBooks - pageSize;
  const currentBooks = allBooks?.slice(indexOfFirstBooks, indexOfLastBooks)
  const [loading, setLoading] = useState(true);


  if (allBooks.length > 0 && loading) {
    setLoading(false);
  }
  const page = (pageNumber) => {
    setPageCurrent(pageNumber)
  };

  const goToNextPage = () => setPageCurrent(pageCurrent + 1);
  const goToPreviousPage = () => {
    if (pageCurrent > 1) setPageCurrent(pageCurrent - 1)
  }

  return (
    <div>
      <div><h1>HOME</h1></div>
      <div onClick={() => logOut()}>
        <Link to="/">
          <h3>Logout</h3>
        </Link>
      </div>
      {currentBooks.length > 0 && !loading ? (
        currentBooks && allBooks?.map((e, i) => {
          // console.log para revisar qué llega de cada elemento en los libros! 
          console.log(e) 
          //-----------------------------
          return (
            <div key={i}>
              {e.error ? <h1>ERROR!</h1> :
                <Link to={"/home/" + e.id}>
                  <Book
                    nombre={e.nombre}
                    image={e.image}
                  />
                </Link>}
            </div>
          )
        })
      ) : !currentBooks.length > 0 && loading ? (
        <Loading />
      ) : (
        <NotFound />
      )
      }
      <Pagination
        pageSize={pageSize}
        allBooks={allBooks.length}
        page={page}
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
      />
    </div>
  );
}