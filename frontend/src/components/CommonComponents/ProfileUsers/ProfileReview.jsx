import React from 'react'

const ProfileReview = ({title,description,score}) => {
  return (
    <div>
        <p>{title}</p>
        <p>{description}</p>
        {
                                score === 1 ? <p>⭐</p> :
                                score === 2 ? <p>⭐⭐</p>:
                                score === 3 ? <p>⭐⭐⭐</p>:
                                score === 4 ? <p>⭐⭐⭐⭐</p>:
                                        <p>⭐⭐⭐⭐⭐</p>
                                }
    </div>
  )
}

export default ProfileReview