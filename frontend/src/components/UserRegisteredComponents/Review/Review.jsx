import React, { useEffect } from 'react'
import { useState } from 'react'
import NavBar from '../../CommonComponents/NavBar/NavBar'
import s from './Review.module.css'
import { Rating } from 'react-simple-star-rating'
import { useDispatch, useSelector } from 'react-redux'
import { getDetalleOrder, review } from '../../../redux/actions/actionOrder'
import { useNavigate, useParams } from 'react-router'

const Review = () => {
  const Navigate = useNavigate()
  const [rating, setRating] = useState(0) // initial rating value
  const {id}=useParams()
  const dispatch = useDispatch()
  const detalles = useSelector(state => state.order)
  console.log(detalles)
  const vendedor = detalles.books?.creador
  const orderId = detalles._id

  const [input,setInput]=useState({
    title:"",
    vendedor:vendedor,
    description:"",
    score:"",
    orden:orderId

  })
  useEffect(() => {
    dispatch(getDetalleOrder(id));

  }, [])
  
  const handleRating = (rating) => {
    setRating(rating)

  }
  function handleChange(e) {
    setInput({
        ...input,
        [e.target.name]: e.target.value
    });
};


  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(review(input))
    alert("ok")
    setInput({
      title:"",
      vendedor:"",
      description:"",
      score:"",
      orden:""
    })
    Navigate("/")
  }

  return (
    <>
  <NavBar />
    <div className={s.flex}>
    
      <Rating onClick={handleRating} activeColor={"yellow"} color={"black"} ratingValue={rating} size={40} />
      <p>The rating is {rating + "."}</p>
    </div>

    <form onSubmit={handleSubmit} >
    <label htmlFor="">titulo</label>
      <div>
        <input 
          type="text"
          name="title"
          value={input.title}
          onChange={(e) => handleChange(e)}
         />
      </div>

      <label htmlFor="">descripcion</label>
      <div>
        <input 
          type="text"
          name="description"
          value={input.description}
          onChange={(e) => handleChange(e)}
          
         />
      </div>

      <label htmlFor="">score</label>
      <div>
        <input 
          type="number"
          name="score"
          value={input.score}
          onChange={(e) => handleChange(e)}
          
         />
      </div>

      <input type="submit" value="enviar" />
    </form>
    </>
  )
}

export default Review