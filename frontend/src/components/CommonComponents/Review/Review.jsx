import React from 'react'
import { useState } from 'react'
import s from '../Review/Review.module.css'
import { Rating } from 'react-simple-star-rating'
 
const Review = () => {
    const [rating, setRating] = useState(0) // initial rating value

  
  const handleRating = (rating) => {
    setRating(rating)
  
  }
  
  return (
    <div className={s.flex}>

<Rating onClick={handleRating} activeColor={"yellow"} color={"black"} ratingValue={rating}  size={40} />
        <p>The rating is {rating+"."}</p>
    </div>
  )
}

export default Review