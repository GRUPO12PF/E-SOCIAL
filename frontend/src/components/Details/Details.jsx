import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router";
import { useParams } from 'react-router-dom'
import { detailsBook } from '../../redux/actions/detailsBooks'
import NavBar from "../NavBar/NavBar";
import s from './Details.module.css'

const Details = () => {
  const token = localStorage.getItem("token");
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const detail = useSelector((state) => state.detail)
  console.log(detail)

  useEffect(() => {
    dispatch(detailsBook(id))
  }, [dispatch])

  if (!token) {
    navigate("/");
  }

  return (
    <div>
      <div>
        <NavBar />
      </div>
         <div className={s.background}>
             {/* <h1> Details</h1> */}
            <div className={s.name}>
            
            <h3 className={s.pName}>{detail.nombre}</h3>
            <img src={detail.image} alt="not found" className={s.image}/>
            <h3 className={s.pName}>Precio: {detail.price}</h3>
            <button>Añadir a Carrito</button>
              
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
  )
}

export default Details