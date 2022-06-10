import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router";
import { useParams } from 'react-router-dom'
import { detailsBook } from '../../redux/actions/detailsBooks'
import NavBar from "../NavBar/NavBar";
import s from './Details.module.css';
import {deleteBook} from '../../redux/actions/actionBooks'
import NotFoundGral from '../NotFound/NotFoundGral'
import Loading from '../Loading/Loading';
import UpdateBook from '../UpdateBook/UpdateBook';

const Details = () => {
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const detail = useSelector((state) => state.detail)
  console.log(detail)

  if(Object.keys(detail).length > 0 && loading){
    setLoading(false);
}

  useEffect(() => {
    
    dispatch(detailsBook(id))
        
  }, [dispatch])

  if (!token) {
    navigate("/");
  }
  function handleDeleteBook(e) {
    e.preventDefault()
    dispatch(deleteBook(id))
      navigate('/home')
  }
  function handleUpdateBook(e) {
    e.preventDefault()
     navigate(`/details/${id}/update`)
  }
  console.log(id)
  return (
    <div>
      <div>
        <NavBar />
      </div>
                    
     { 
        Object.keys(detail).length > 0 && !loading ?  (
            <div>
      <button onClick={(e) => handleDeleteBook(e)}>DELETE</button>
      <button onClick={(e) => handleUpdateBook(e)}>UPDATE</button>
      
          <div className={s.background}>
            <div className={s.name}>
            
            <h3 className={s.pName}>{detail.nombre}</h3>
            <img src={detail.image} alt="not found" className={s.image}
            onError={(e)=>e.target.setAttribute('src','https://pbs.twimg.com/profile_images/1611903252/Books-Icon120x120_400x400.jpg')} />
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
        )  :  !Object.keys(detail).length > 0 && loading ? (
            <Loading/>
        ): detail.length === 0 && (
            <NotFoundGral/>
         )
        }
          
    </div>
  )
}

export default Details