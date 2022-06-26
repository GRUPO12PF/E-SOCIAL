import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import s from './ConfirmacionPago.module.css'
import { useNavigate } from 'react-router'
import NavBar from '../../../CommonComponents/NavBar/NavBar'
import { Formik, Form, Field, ErrorMessage } from 'formik'


const ConfirmacionPago = () => {
  const form = useRef()
  const navigate = useNavigate()

const [formEnv, setForm] = useState(false)


return (
  <>
  <NavBar />
  <div className='form-f'>

    <Formik
      initialValues={{
        name: '',
        email: '',
      }}
      
      
      validate={(valores) => {
        let errors = {}

        if (!valores.name) {
          errors.name = 'Campo requerido'
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
          errors.name = 'Solo nombre'
        }
        if (!valores.email) {
          errors.email = 'Campo requerido'
        } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
          errors.email = 'Solo E-Mail'
        }

        return errors
      }}

      onSubmit={(values, { resetForm }) => {
        emailjs.sendForm('service_fawk32l', 'template_ldua3d9', form.current, 'g-ZSRPwlx9NA1IFaD')
        .then((result) => {
          console.log(result.tex)
        }, (error) => {
          console.log(error.text)
        })
        resetForm()
        setForm(true)
        setTimeout(() => setForm(false), 5000)
        navigate("/")
      }}
    >
      {({ errors ,values}) => (<Form ref={form}>
        <label>Nombre</label>
        <div>
          <Field
            type="text"
            name="name"
            id="name"
          />
          <ErrorMessage name='name' component={() => (<p className='errors'>{errors.name}</p>)} />
        </div>

        <label>Email</label>
        <div>
          <Field
            type="email"
            name="email"
            id="email"
          />

          <ErrorMessage name='email' component={() => (<p className='errors'>{errors.email}</p>)} />
        </div>

        <button type="submit">ENVIAR</button>
        {formEnv && <p className='send'>¡Enviado correctamente! ✔</p>}
      </Form>)}
    </Formik>

  </div>
</>
  // return (
  //   <div>
  //     <NavBar />

      

  //   </div>
  // )
)
}

export default ConfirmacionPago
