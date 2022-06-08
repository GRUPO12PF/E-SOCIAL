import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router";
import { useParams } from 'react-router-dom'
import { detailsBook } from '../../redux/actions/detailsBooks'
import NavBar from "../NavBar/NavBar";

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
      
      <h1> Details</h1>
      {detail.image}
      
      <h3>Nombre</h3>
      {detail.nombre}
      
      <h3>Descripción</h3>
      {detail.descripcion}
      
      <h3>Colección</h3>
      {detail.colection}
      
      <h3>Categoría</h3>
      {detail.category}
      
      <h3>Precio</h3>
      {detail.price}
      
      <h3>rating</h3>
      {detail.rating ? detail.rating : "no tiene rating"}

    </div>
  )
}

export default Details