
import React from 'react'

export default function QuestionDetail ({mensaje, book, idComprador}){
   return( <div >
    <div >
    <div >
    <p >{idComprador}</p> 
       <p >Libro: {book}</p>
       <p>{mensaje}</p>
       </div> 
   </div>
   </div>)
}