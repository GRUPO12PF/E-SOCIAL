import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { detailsBook } from "../../../redux/actions/detailsBooks";
import NavBar from "../../UserRegisteredComponents/NavBar/NavBar";
import GuestNavBar from "../../GuestComponents/GuestNavBar/GuestNavBar";
import s from "./Details.module.css";
import { deleteBook } from "../../../redux/actions/actionBooks";
import Loading from "../Loading/Loading";
import book from "../../../assets/images/book.svg";

const Details = () => {
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const detail = useSelector((state) => state.detail);

  if (Object.keys(detail).length > 0 && loading) {
     setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    dispatch(detailsBook(id));
  }, [dispatch]);

  function handleDeleteBook(e) {
    e.preventDefault();
    dispatch(deleteBook(id));
    navigate("/home");
    window.location.reload();
  }
  function handleUpdateBook(e) {
    e.preventDefault();
    navigate(`/details/update/${id}`);
  }

  return (
    <div>
      {token ? (
        <div>
          <NavBar />
        </div>) :
        <div>
          <GuestNavBar />
        </div>
      }
      {Object.keys(detail).length > 0 && !loading ? (
        <div>
          {token ? (
            <div className={s.botoness}>
              <button className={s.btn} onClick={(e) => handleDeleteBook(e)}>
                DELETE
              </button>
              <button className={s.btn} onClick={(e) => handleUpdateBook(e)}>
                UPDATE
              </button>
            </div>
          ) : null}

          <div className={s.background}>
            <div className={s.name}>
              <h3 className={s.pName}>{detail.nombre}</h3>
              <img
                src={detail.image || book}
                alt="not found"
                className={s.image}
              />
              <h3 className={s.pName}>Precio: {"$" + detail.price + ".00"}</h3>
              <button className={s.btnn}>Añadir a Carrito</button>
            </div>
            <div className={s.description}>
              <h5 className={s.h5}>Colección</h5>
              {detail.colection}

              <h5 className={s.h5}>Categoría</h5>
              {detail.category}

              <h5 className={s.h5}>Ranking</h5>
              {detail.ranking ? detail.ranking : "no tiene ranking"}

              <h5 className={s.h5}>Descripción</h5>
              {detail.descripcion}
            </div>
          </div>
        </div>
      ) : <Loading />
      }
    </div>
  );
};

export default Details;
