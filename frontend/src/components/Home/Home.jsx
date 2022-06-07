import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { userLogout} from "../../redux/actions/actionUser";
import { getBooks} from "../../redux/actions/actionBooks";
import { useDispatch, useSelector } from "react-redux";
import Book from '../Book/Book';

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

  return (
    <div>
      <div><h1>HOME</h1></div>
      <div onClick={() => logOut()}>
        <Link to="/">
          <h3>Logout</h3>
        </Link>
      </div>
        {allBooks.map((e) => {
          return (
            <div key={e.id}>
              { e.error ? <h1>ERROR!</h1>: 
                <Link to={"/home/" + e.id}>
                  <Book key={e.id}
                    nombre={e.nombre}
                    image={e.image}
                    />
                  </Link>}
            </div>
          )
        })
        }
    </div>
  );
}
