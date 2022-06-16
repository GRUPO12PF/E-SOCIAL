import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router";
import { useParams } from 'react-router-dom'
import { detailsBook } from '../../../redux/actions/detailsBooks'
import NavBar from "../GuestNavBar/GuestNavBar";
import s from './GuestDetail.module.css';

import NotFoundGral from '../../CommonComponents/NotFound/NotFoundGral'
import Loading from '../../CommonComponents/Loading/Loading';


const Details = () => {
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const detail = useSelector((state) => state.detail)
  // console.log(detail)

  if(Object.keys(detail).length > 0 && loading){
    setLoading(false);
}

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
                    
      { 
        Object.keys(detail).length > 0 && !loading ?  (
            <div>
          
          <div className={s.background}>
                   
            <div className={s.name}>
            
            <h3 className={s.pName}>{detail.nombre}</h3>
            <img  src={detail.image} alt="not found" className={s.image}
            onError={(e)=>e.target.setAttribute('src','https://pbs.twimg.com/profile_images/1611903252/Books-Icon120x120_400x400.jpg')} />
            <h3 className={s.pName}>Precio: {'$'+detail.price+'.00'}</h3>
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