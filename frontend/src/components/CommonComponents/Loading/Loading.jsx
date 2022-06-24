import React from "react"
import s from './Loading.module.css'

export default function Loading() {
  return (
      <div className={s.container}>
          <br/>
<div className={s.loader}>
          </div>
      <h1 className={s.Titulo}> Espera . . . </h1> 
      </div>

  )
}