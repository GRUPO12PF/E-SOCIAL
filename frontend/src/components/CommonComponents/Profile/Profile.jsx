import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux'


 

function Profile() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = useSelector(state => state.usuario)
  const idUser = user._id
  console.log(idUser)
  
  
  function handleOnClick() {      
    navigate(`/historyOrders/${idUser}`);

  }

  return (
    <div>
      <button onClick={e => (handleOnClick(e))}>History Orders</button>
    </div>
    
  )
}

export default Profile