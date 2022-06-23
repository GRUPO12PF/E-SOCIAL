import React, { useEffect } from 'react'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { postCreate } from '../../../redux/actions/postProducts'
import NavBar from '../../CommonComponents/NavBar/NavBar'
import s from '../Form/Form.module.css'
import { getCategories } from '../../../redux/actions/actionCategories.js'
import { getBooks } from '../../../redux/actions/actionBooks'
import { subirFotos } from '../../../redux/actions/actionSubirFotos'
import { cleanTempState } from '../../../redux/actions/actionCleanTempState'

const Forms = () => {
  // const [dispatch, navigate] = [useDispatch(), useNavigate()]
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const categories = useSelector(state => state.categories)
  const imgPreview = useSelector(state => state.tempState)

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  function handleImage(images) {
    dispatch(subirFotos(images))
  }

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
            idioma: '',
            editorial: '',
            edicion: '',
            tapa: '',
            año_de_pub: '',
            cant_pags: '',
            descripcion: '',
            price: '',
            image: '',
            colection: '',
            ilustrado: false,
            category: []
          }}

          validate={(values) => {
            let errors = {}

           Ø

            return errors
          }}

          onSubmit={(values, { resetForm }) => {

            dispatch(postCreate(values))
            resetForm()
            swal({
              title: "¡Creado con éxito!",
              text: " ",
              icon: "success",
              button: "Ok!",
            })
            dispatch(cleanTempState)
            navigate('/')
            dispatch(getBooks())

          }}
        >
          {({ errors, handleSubmit, values, setFieldValue }) => (<Form action="" onSubmit={handleSubmit} className={s.formik} >
            <div className={s.form}>

              <div className={s.subdi}>


                <label htmlFor="" className={s.label} >Nombre*</label>
                <div>
                  <Field
                    className={s.input}
                    type="text"
                    name="nombre"
                    id="nombre"
                  />
                  <ErrorMessage name='nombre' component={() => (<p className={s.error}>{errors.nombre}</p>)} />
                </div>

                <label htmlFor="" className={s.label} >Autor*</label>
                <div>
                  <Field
                    className={s.input}
                    type="text"
                    name="autor"
                    id="autor"
                  />
                  <ErrorMessage name='autor' component={() => (<p className={s.error}>{errors.autor}</p>)} />
                </div>

                <label htmlFor="" className={s.label} >Idioma*</label>
                <div>
                  <Field
                    className={s.textarea}
                    type="text"
                    name="idioma"
                    id="idioma"
                  />
                  <ErrorMessage name='idioma' component={() => (<p className={s.error}>{errors.idioma}</p>)} />
                </div>

                <label htmlFor="" className={s.label} >Editorial</label>
                <div>
                  <Field
                    className={s.textarea}
                    type="text"
                    name="editorial"
                    id="editorial"
                  />
                  <ErrorMessage name='editorial' component={() => (<p className={s.error}>{errors.editorial}</p>)} />
                </div>

                <label htmlFor="" className={s.label} >Edición</label>
                <div>
                  <Field
                    className={s.input}
                    type="number"
                    name="edicion"
                    id="edicion"
                  />
                  <ErrorMessage name='edicion' component={() => (<p className={s.error}>{errors.edicion}</p>)} />
                </div>

                <label htmlFor="" className={s.label} >Tipo de tapa</label>
                <div>
                  <Field
                    className={s.textarea}
                    type="text"
                    name="tapa"
                    id="tapa"
                    placeholder="Blanda, Dura..."
                  />
                  <ErrorMessage name='tapa' component={() => (<p className={s.error}>{errors.tapa}</p>)} />
                </div>

              </div>

              <label htmlFor="" className={s.label} >Año de publicación</label>
              <div>
                <Field
                  className={s.input}
                  type="number"
                  name="año_de_pub"
                  // no consologuea siquiera Año de Pub :O
                  id="año_de_pub"
                  placeholder="AAAA..."
                />
                <ErrorMessage name='año_de_pub' component={() => (<p className={s.error}>{errors.año_de_pub}</p>)} />
              </div>

              <label htmlFor="" className={s.label} >Páginas</label>
              <div>
                <Field
                  className={s.input}
                  type="number"
                  name="cant_pags"
                  id="cant_pags"
                />
                <ErrorMessage name='cant_pags' component={() => (<p className={s.error}>{errors.cant_pags}</p>)} />
              </div>

              <label htmlFor="" className={s.label} >Saga / Serie</label>
              <div>
                <Field
                  className={s.input}
                  type="text"
                  name="colection"
                  id="colection"
                />
                <ErrorMessage name='colection' component={() => (<p className={s.error}>{errors.colection}</p>)} />
              </div>

              <label htmlFor="" className={s.label} >Fotografías del ejemplar</label>
              <div>
                <Field
                  className={s.input}
                  name="image"
                  type="file"
                  id="file"
                  onChange={e => handleImage(e.target.files[0])}
                />
                <img src={imgPreview
                  ? imgPreview
                  : null} alt="Preview de la img subida." />
                <ErrorMessage name='image' component={() => (<p>{errors.image}</p>)} />
              </div>

              <label htmlFor="" className={s.label} >Precio*</label>
              <div>
                <Field
                  className={s.input}
                  type="number"
                  name="price"
                  id="price"
                  placeholder="en centavos de USD..."
                />
                <ErrorMessage name='price' component={() => (<p className={s.error} >{errors.price}</p>)} />
              </div>

              <label htmlFor="" className={s.label} >Descripción*</label>
              <div>
                <Field
                  className={s.textarea}
                  type="text"
                  name="descripcion"
                  id="descripcion"
                  as="textarea"
                />
                <ErrorMessage name='descripcion' component={() => (<p className={s.error}>{errors.descripcion}</p>)} />
              </div>

              <label htmlFor="" className={s.label}>Ilustrado</label>
              <div className={s.centro}>
                <Field
                  className={s.textarea}
                  as="select"
                  id="ilustrado"
                  name="ilustrado"
                >
                  <option value={false}>NO</option>
                  <option value={true}>SI</option>
                </Field>
              </div>

              <label htmlFor="" className={s.label}>Categorías*</label>
              <div className={s.chek}>
                <div role="group" aria-labelledby="checkbox-group" >
                  {categories?.map((e, i) =>
                    <div key={i} > <Field type="checkbox" name="category" value={`${e}`} /> {e} </div>
                  )}
                </div>
              </div>
              <ErrorMessage name='category' className='ASIGNAR!' component={() => (<p className={s.error}>{errors.category}</p>)} />

              <button
                className={s.sendMsg}
                type="submit"
                disabled={errors.nombre || errors.autor || errors.idioma || errors.price || errors.category || errors.descripcion}
              >ENVIAR</button>
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
