import React, { useEffect } from 'react'
import { useState } from 'react'
import NavBar from '../../CommonComponents/NavBar/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { getDetalleOrder, review } from '../../../redux/actions/actionOrder'
import { useNavigate, useParams, Link } from 'react-router-dom'
import Footer from '../../CommonComponents/Footer/Footer'
import s from './Review.module.css'
const Review = () => {
  const Navigate = useNavigate()
  const { id } = useParams()
  const dispatch = useDispatch()
  const detalles = useSelector(state => state.order)
  const vendedor = detalles.books?.creador
  const orderId = detalles._id

  const [errors, setErrors] = useState({})
  const [input, setInput] = useState({
    title: "",
    vendedor: vendedor,
    description: "",
    score: "",
    orden: orderId
  })
  useEffect(() => {
    dispatch(getDetalleOrder(id));
  }, [])

  function validate(input){
    let errors = {};

    if(!input.title){
      errors.title = "Debe haber un titulo"
    }
    if(!input.description){
      errors.description = "Debe haber una descripción"
    }

    if(!input.score){
      errors.score= "Debes colocar un puntaje"
    } else if(input.score > 5 || input.score <= 1 ){
      errors.score = "El puntaje debe estar comprendido entre 1 y 5"
    }

    return errors
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setErrors(validate({
      ...input, 
      [e.target.name]: e.target.value
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if(input.description && input.score && input.title){
      if(input.score > 5 || input.score <= 1){
        alert("El score debe ser entre 1 y 5")
      } else {
        dispatch(review(input))
        alert("ok")
        setInput({
          title: "",
          vendedor: "",
          description: "",
          score: "",
          orden: ""
        })
        Navigate("/")
      }
    } else {
      alert("Faltan campos por completar")
    }
  }

  return (
    <>
    <div className={s.papa}>
      <NavBar />
      <Link to = '/profile'>
        <button className={s.buttonPerfil}>VOLVER AL MENU</button>
      </Link>
<div className={s.containerGral}>
</div>
  <div className={s.containerForm}>
      <form className={s.form} onSubmit={handleSubmit} >
        <label className={s.label} htmlFor="">TÍTULO</label>
        <div>
          <input className={s.input}
            type="text"
            name="title"
            value={input.title}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <label className={s.label}
        htmlFor="">DESCRIPCIÓN</label>
        <div>
          <input className={s.input}
            type="text"
            name="description"
            value={input.description}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <label className={s.label} 
        htmlFor="">PUNTUACIÓN</label>
        <div>
          <input className={s.input}
            type="number"
            name="score"
            value={input.score}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <input className={s.input}
        type="submit" value="enviar" />
      </form>
      </div>
      <Footer/>
      </div>
    </>
  )
}

export default Review
