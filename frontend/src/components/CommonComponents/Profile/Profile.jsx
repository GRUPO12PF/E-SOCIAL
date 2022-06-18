import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router";
import { useSelector } from 'react-redux'
import Footer from '../Footer/Footer';

 

function Profile() {
  const navigate = useNavigate();
  const user = useSelector(state => state.usuarioActual)
  const idUser = user._id
  console.log(idUser)
  
  
  function handleOnClickHistory() {      
    navigate(`/historyOrders/${idUser}`);
  }
  function handleOnClickBooks() {      
    navigate(`/bookCreated/${idUser}`);
  }

  return (
    <div>
      {/* <button onClick={e => (handleOnClickHistory(e))}>History Orders</button> */}
      <button onClick={e => (handleOnClickBooks(e))}>Books Created</button>
      <Footer />
    </div>
    
  )
}

export default Profile