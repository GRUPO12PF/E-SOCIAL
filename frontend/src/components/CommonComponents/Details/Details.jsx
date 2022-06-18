import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
import { detailsBook } from "../../../redux/actions/detailsBooks";
import NavBar from "../../CommonComponents/NavBar/NavBar";
import s from "./Details.module.css";
import { deleteBook } from "../../../redux/actions/actionBooks";
import Loading from "../Loading/Loading";
import book from "../../../assets/images/book.svg";
import swal from 'sweetalert';


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
    swal({
      title: "Eliminado con exito!",
      text: " ",
      icon: "success",
      button: "Ok!",
    });
    navigate("/");

  }
  function handleUpdateBook(e) {
    e.preventDefault();
    navigate(`/details/update/${id}`);
  }

  return (
    <div>
      <div>
        <NavBar />
      </div>
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
              <Link to="/checkout">
                <button className={s.btnn}>COMPRAR</button>
              </Link>
            </div>
            <div className={s.description}>
              <h5 className={s.h5}>Colección</h5>
              {detail.colection}

              <h5 className={s.h5}>Categoría</h5>
              {detail.category.join(", ")}


              <h5 className={s.h5}>Descripción</h5>
              <p className={s.parra}>
                {detail.descripcion}
              </p>
            </div>
          </div>
        </div>
      ) : <Loading />
      }

  
    </div>
  );
};

export default Details;
