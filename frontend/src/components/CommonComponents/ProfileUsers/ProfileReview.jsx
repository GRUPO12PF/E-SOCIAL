import React, { useState } from 'react'

const ProfileReview = ({title,description,score}) => {


  const [isActive, setIsActive] = useState(false);
  
  


  return (
    <>
    
    <div class="containerr">
    
    <div class="accordion">
      <div class="accordion-item">
        <button onClick={() => setIsActive(!isActive)} id="accordion-button-1" >
          {isActive ? "Ver Menos" : "Ver Mas"}
          <span class="icon" ></span>
        </button>
        
          {!isActive ? <>{null}</>:
            (<p>
              {title}
              {description}
              {
                                score === 1 ? <p>⭐</p> :
                                score === 2 ? <p>⭐⭐</p>:
                                score === 3 ? <p>⭐⭐⭐</p>:
                                score === 4 ? <p>⭐⭐⭐⭐</p>:
                                        <p>⭐⭐⭐⭐⭐</p>
                                }
    </p>)
              }
        
      </div>
      
     
    </div>
  </div>
  </>

  )
}

export default ProfileReview 

{/* <div>
        <p>{title}</p>
        <p>{description}</p>
        {
                                score === 1 ? <p>⭐</p> :
                                score === 2 ? <p>⭐⭐</p>:
                                score === 3 ? <p>⭐⭐⭐</p>:
                                score === 4 ? <p>⭐⭐⭐⭐</p>:
                                        <p>⭐⭐⭐⭐⭐</p>
                                }
    </div> */}