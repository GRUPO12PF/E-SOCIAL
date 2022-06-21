import React, { useEffect } from 'react'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { postCreate } from '../../../redux/actions/postProducts'
import NavBar from '../../CommonComponents/NavBar/NavBar'
import s from '../Form/Form.module.css'
import { getCategories } from '../../../redux/actions/actionCategories.js'
import { getBooks } from '../../../redux/actions/actionBooks'

const Forms = () => {
  const categories = useSelector(state => state.categories)
  let navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  return (
    <div className={s.formFondo}>
      <div>
        <div>
          <NavBar />
        </div>
        <Formik
          initialValues={{
            nombre: '',
            autor: '',
            descripcion: '',
            price: '',
            image: '',
            colection: '',
            category: []
          }}

          validate={(values) => {
            let errors = {}

            if (!values.nombre) {
              errors.nombre = 'Campo requerido.'
            } else if (!/^\S.*$/.test(values.nombre)) {
              errors.nombre = 'El primer caracter no puede ser un espacio'
            } else if (!/^(\d|[a-z]|[,.:;¡!¿?']|[À-ÿ]|\s){1,40}$/i.test(values.nombre)) {
              errors.nombre = 'Debe ingresar un nombre de hasta 40 caracteres.'
            }

            if (values.descripcion.length < 6) {
              errors.descripcion = 'La descripción debe contar con al menos 6 caracteres.'
            } else if (values.descripcion.length > 1500) {
              errors.descripcion = 'La descripción debe contar con un máximo de 1500 caracteres.'
            }

            if (!values.price) {
              errors.price = 'Campo requerido.'
            } else if (/(\D)/.test(values.price)) {
              errors.price = 'Ingrese el precio en centavos de USD.'
            }

            if (!values.colection) {
              errors.colection = 'Campo requerido.'
            }

            if (!values.category) {
              errors.category = 'Elija al menos 1 categoría.'
            }

            return errors
          }}

          onSubmit={(values, { resetForm }) => {
            console.log(values)

            dispatch(postCreate(values))
            resetForm()
            swal({
              title: "¡Creado con éxito!",
              text: " ",
              icon: "success",
              button: "Ok!",
            })
            navigate('/')
            dispatch(getBooks())

          }}
        >
          {({ errors, handleSubmit, values, category }) => (<Form action="" onSubmit={handleSubmit} className={s.formik} >
            <div className={s.form}>
              
              <label htmlFor="" className={s.label} >Nombre</label>
              <div>
                <Field
                  className={s.input}
                  type="text"
                  name="nombre"
                  id="nombre"
                  placeholder="nombre..."
                />
                <ErrorMessage name='nombre' component={() => (<p>{errors.nombre}</p>)} />
              </div>

              <label htmlFor="" className={s.label} >Colección</label>
              <div>
                <Field
                  className={s.input}
                  type="text"
                  name="colection"
                  id="colection"
                />
                <ErrorMessage name='colection' component={() => (<p>{errors.colection}</p>)} />
              </div>

              <label htmlFor="" className={s.label} >Precio</label>
              <div>
                <Field
                  className={s.input}
                  type="number"
                  name="price"
                  id="price"
                  placeholder="en centavos de USD..."
                />
                <ErrorMessage name='price' component={() => (<p >{errors.price}</p>)} />
              </div>

              <label htmlFor="" className={s.label} >Imagen</label>
              <div>
                <Field
                  className={s.input}
                  type="text"
                  name="image"
                  id="image"
                />
                <ErrorMessage name='image' component={() => (<p>{errors.image}</p>)} />
              </div>

              <label htmlFor="" className={s.label} >Descripción</label>
              <div>
                <Field
                  className={s.textarea}
                  type="text"
                  name="descripcion"
                  id="descripcion"
                  as="textarea"
                />
                <ErrorMessage name='descripcion' component={() => (<p>{errors.descripcion}</p>)} />
              </div>

              <label htmlFor="" className={s.label}>Categorías</label>
              <div className={s.chek}>
                <div role="group" aria-labelledby="checkbox-group" >
                  {categories?.map((e, i) =>
                    <label> <Field type="checkbox" name="category" value={`${e}`} key={i} /> {e} </label>
                  )}
                </div>
              </div>

              <button className={s.sendMsg} type="submit">ENVIAR</button>
            </div>
          </Form>)}
        </Formik>
        <br />
        <Link className={s.back} to="/">BACK</Link>
      </div>
    </div>
  )
}

export default Forms
