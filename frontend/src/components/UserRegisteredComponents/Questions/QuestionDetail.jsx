import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { allAnswers, postAnswer } from '../../../redux/actions/actionQA';

export default function QuestionDetail ({_id, mensaje, book, idComprador}){
  const {id} = useParams(); //id del vendedor 
  const idQuestion = _id //id de la pregunta 
  const dispatch = useDispatch()
  // const question = useSelector((state) => state.questions)
  // //  console.log("questions", question)
  // const answer = useSelector((state) => state.answers)
  // const user = useSelector((state)=>state.usuarioActual)

  const [input, setInput] = useState({
    mensaje: ''
  })

const handleSubmitSendAnswer = async (e) => {
  e.preventDefault()
  setInput({
    mensaje: input.mensaje
  })
  dispatch(postAnswer({
    mensaje: input.mensaje,
    book: book._id,
    question: idQuestion
  }))

  setInput({
    mensaje: ''
  })
}

const handleInputChange = function (e) {
  setInput({
    ...input,
    [e.target.name]: e.target.value
  })
}

   return (
     <div>
       <div>
         <div>
           <p>{idComprador.nombre}</p>
           <p>Libro: {book.nombre} ,</p>
           <p>{mensaje}</p>
         </div>
         <form onSubmit={(e) => handleSubmitSendAnswer(e)}>
           <input type="text" placeholder='Acá va su respuesta' name="mensaje" value={input.mensaje} onChange={(e)=> handleInputChange(e)}/>
           <button>enviar</button>
         </form>
       </div>
     </div>
   );
}