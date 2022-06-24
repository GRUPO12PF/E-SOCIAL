import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import s from './ConfirmacionPago.module.css'
import { useNavigate } from 'react-router'
import NavBar from '../../../CommonComponents/NavBar/NavBar'

const ConfirmacionPago = () => {
  const form = useRef()
  const navigate = useNavigate()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_fawk32l', 'template_ldua3d9', form.current, 'g-ZSRPwlx9NA1IFaD')
      .then((result) => {
        console.log(result.text)

      }, (error) => {
        console.log(error.text)
      })
    navigate("/")
  }

  return (
    <div>
      <NavBar />

      <form ref={form} onSubmit={sendEmail} className={s.formFondo}>
        <div className={s.formik}>
          <div className={s.separar}>
            <label className={s.label}>Name</label>
            <input className={s.input} type="text" name="name" />
            <label className={s.label}>Email</label>
            <input className={s.input} type="email" name="email" />
            <input type="submit" value="Send" />
          </div>
        </div>
      </form>

    </div>
  )
}

export default ConfirmacionPago
