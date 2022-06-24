import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import estilos from './AnswersDetail.module.css'

export default function AnswerDetail ({mensaje, book, createdAt}){
//   const {id} = useParams(); //id del vendedor 
//   const idQuestion = _id //id de la pregunta 

console.log(createdAt)
  return (
    <div>
      
        <div className={estilos.prueba}>
           <p>Respondido el: {createdAt}</p>
           <p>Lo que respondiste: {mensaje}</p>
           <p>En el libro: {book.nombre}</p>
        </div>
        {/* <form onSubmit={(e) => handleSubmitSendAnswer(e)}>
          <input type="text" placeholder='Acá va su respuesta' name="mensaje" value={input.mensaje} onChange={(e)=> handleInputChange(e)}/>
          <button>enviar</button>
        </form> */}
      
    </div>
  )
}