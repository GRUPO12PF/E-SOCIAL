import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { detailsBook } from "../../../redux/actions/detailsBooks";
import NavBar from "../../CommonComponents/NavBar/NavBar";
import Loading from "../Loading/Loading";
import book from "../../../assets/images/book.svg";
import Footer from "../Footer/Footer";


const Details = () => {
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);

  if (Object.keys(detail).length > 0 && loading) {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    dispatch(detailsBook(id));
  }, [dispatch]);


  return (
    <>
    <NavBar />
    
    <div className="card-detalle">
      <div className="clip-detalle">
        
      </div>
      <div>
      <img  src={detail.image || book} alt="not found"className="image-detalle" />
      </div>

      <div>
        <h3 className="pName-detalle">{detail.nombre}</h3>

        <div className="description-detalle">
          
              <h5 className="h5-detalle">Colección</h5>
              {detail.colection}

              <h5 className="h5-detalle">Categoría</h5>
              {detail.category+", "}


              <h5 className="h5-detalle">Descripción</h5>
              <p className="parra-detalle">
                {detail.descripcion}
              </p>
           
            </div>
          <div className="che-detalle">
          {
                token ?
                  <Link to="/checkout">
                    <button className="btnn-detalle">COMPRAR</button>
                  </Link>
                  :
                  <Link to="/homeout">
                    <button className="btnn-detalle">COMPRAR</button>
                  </Link>
              }
          </div>
      </div>
    </div>
 
       
    
    </>
  );
};

export default Details;



      {/* <div>
        <NavBar />
      </div>
      {Object.keys(detail).length > 0 && !loading ? (
        <div>
          <div className={s.background}>
            <div className={s.name}>
              <h3 className={s.pName}>{detail.nombre}</h3>
              <img
                src={detail.image || book}
                alt="not found"
                className={s.image}
              />
              <h3 className={s.pName}>Precio: {"$" + detail.price + ".00"}</h3>
              {
                token ?
                  <Link to="/checkout">
                    <button className={s.btnn}>COMPRAR</button>
                  </Link>
                  :
                  <Link to="/homeout">
                    <button className={s.btnn}>COMPRAR</button>
                  </Link>
              }

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
        </div> */}
      {/* ) : <Loading />
      } */}










