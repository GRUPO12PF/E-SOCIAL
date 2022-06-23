import React from 'react'
import { useState } from 'react'
import NavBar from '../../CommonComponents/NavBar/NavBar'
import s from './Review.module.css'
import { Rating } from 'react-simple-star-rating'

const Review = () => {
  const [rating, setRating] = useState(0) // initial rating value


  const handleRating = (rating) => {
    setRating(rating)

  }

  return (
    <>
  <NavBar />
    <div className={s.flex}>
      

      <h1>hola</h1>
      <Rating onClick={handleRating} activeColor={"yellow"} color={"black"} ratingValue={rating} size={40} />
      <p>The rating is {rating + "."}</p>
    </div>
    </>
  )
}

export default Review