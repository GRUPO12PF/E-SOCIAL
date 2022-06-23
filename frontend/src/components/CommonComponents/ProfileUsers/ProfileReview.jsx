import React from 'react'

const ProfileReview = ({title,description,score}) => {
  return (
    <div>
        <p>{title}</p>
        <p>{description}</p>
        <p>{score}</p>
    </div>
  )
}

export default ProfileReview