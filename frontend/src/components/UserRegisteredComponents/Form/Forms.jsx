import React, { useEffect, useRef } from 'react'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { postCreate } from '../../../redux/actions/postProducts'
import { getCategories } from '../../../redux/actions/actionCategories.js'
import { cleanData, getBooks } from '../../../redux/actions/actionBooks'
import { subirFotos } from '../../../redux/actions/actionSubirFotos'
import { currentYear } from '../../../utils/helperFunctions'
import PreviewImage from './ImgPreview/ImgPreview'
import NavBar from '../../CommonComponents/NavBar/NavBar'
import s from '../Form/Form.module.css'

const Forms = () => {
  const [dispatch, navigate] = [useDispatch(), useNavigate()]
  const categories = useSelector(state => state.categories)
  const imgPreview = useSelector(state => state.tempState)

  const fileRef = useRef(null)

  function handleImage(images) {
    dispatch(subirFotos(images))
  }

  useEffect(() => {
    dispatch(getCategories())
    dispatch(cleanData)
  }, [])

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
            file: '', // acá va a ir la imagen, se pasa a values.image desp
            colection: '',
            ilustrado: false,
            category: []
          }}

          validate={(values) => {
            let errors = {}

            if (!values.nombre) {
              errors.nombre = 'Campo requerido'
            } else if (!/^\S.*$/.test(values.nombre)) {
              errors.nombre = 'El primer caracter no puede ser un espacio'
            } else if (!/^(\d|[a-z]|[\u00f1\u00d1]|[,.:¡!¿?']|[À-ÿ]|\s){1,40}$/i.test(values.nombre)) {
              errors.nombre = 'Ingrese un nombre válido de hasta 40 caracteres'
            }

            if (!values.autor) {
              errors.autor = 'Campo requerido'
            } else if (!/^\S.*$/.test(values.autor)) {
              errors.autor = 'El primer caracter no puede ser un espacio'
            } else if (!/^(|[a-z]|[()']|[À-ÿ]|[\u00f1\u00d1]|\s){1,40}$/i.test(values.autor)) {
              errors.autor = 'Ingrese un autor válido de hasta 40 caracteres'
            }

            if (!values.idioma) {
              errors.idioma = 'Campo requerido'
            } else if (!/^\S.*$/.test(values.idioma)) {
              errors.idioma = 'El primer caracter no puede ser un espacio'
            } else if (!/^([a-z]|[\u00f1\u00d1]|\s){1,20}$/i.test(values.idioma)) {
              errors.idioma = 'Ingrese un idioma válido de hasta 40 caracteres'
            }

            if (/^\s(.)*$/.test(values.editorial)) {
              errors.editorial = 'El primer caracter no puede ser un espacio'
            } else if (!/^(\d|[a-z]|[\u00f1\u00d1]|[,.:¡!¿?']|[À-ÿ]|\s){0,40}$/i.test(values.editorial)) {
              errors.editorial = 'Ingrese un nombre válido de hasta 40 caracteres'
            }

            if (/(\D)/.test(values.edicion) || values.edicion < 1 && values.edicion.toString().length > 0) {
              errors.edicion = 'Ingrese un Nº de edición mayor a 0'
            }

            if (!/^([a-z]|\s){0,15}$/i.test(values.tapa)) {
              errors.tapa = 'Ingrese un tipo de tapa'
            }

            if (values.año_de_pub && (!/^[0-9]{0,4}$/.test(values.año_de_pub) || values.año_de_pub > currentYear())) {
              errors.año_de_pub = 'Ingrese un año válido en formato AAAA'
            }

            if (/(\D|^0|[-])/.test(values.cant_pags)) { // NO tira error si solo se le pasa "-"
              errors.cant_pags = 'Ingrese un número de págs. válido'
            }

            if (values.descripcion.length < 6) {
              errors.descripcion = 'La descripción debe contar con al menos 6 caracteres'
            } else if (values.descripcion.length > 1500) {
              errors.descripcion = 'La descripción debe contar con un máximo de 1500 caracteres'
            }

            if (/(\D)/.test(values.price)) {
              errors.price = 'Ingrese el precio en centavos de USD'
            } else if (!values.price || values.price < 50) {
              errors.price = 'Ingrese un precio válido mayor a 50 centavos'
            }

            if (values.category.length < 1) {
              errors.category = 'Elija al menos 1 categoría'
            }

            return errors
          }}

          onSubmit={(values, { resetForm }) => {
            values.image = imgPreview
            delete values.file
            console.log("🚀 ~ file: Forms.jsx ~ values", values)
            dispatch(postCreate(values))
            dispatch(cleanData)
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
          {({ errors, handleSubmit, values, setFieldValue }) => (
            <Form onSubmit={handleSubmit} className={s.formik} >
              <div className={s.form}>

                <div className={s.subdi}>

                  <label className={s.label} >Nombre*</label>
                  <div>
                    <Field
                      className={s.input}
                      type="text"
                      name="nombre"
                      id="nombre"
                    />
                    <ErrorMessage name='nombre' component={() => (<p className={s.error}>{errors.nombre}</p>)} />
                  </div>

                  <label className={s.label} >Autor*</label>
                  <div>
                    <Field
                      className={s.input}
                      type="text"
                      name="autor"
                      id="autor"
                    />
                    <ErrorMessage name='autor' component={() => (<p className={s.error}>{errors.autor}</p>)} />
                  </div>

                  <label className={s.label} >Idioma*</label>
                  <div>
                    <Field
                      className={s.textarea}
                      type="text"
                      name="idioma"
                      id="idioma"
                    />
                    <ErrorMessage name='idioma' component={() => (<p className={s.error}>{errors.idioma}</p>)} />
                  </div>

                  <label className={s.label} >Editorial</label>
                  <div>
                    <Field
                      className={s.textarea}
                      type="text"
                      name="editorial"
                      id="editorial"
                    />
                    <ErrorMessage name='editorial' component={() => (<p className={s.error}>{errors.editorial}</p>)} />
                  </div>

                  <label className={s.label} >Edición</label>
                  <div>
                    <Field
                      className={s.input}
                      type="number"
                      name="edicion"
                      id="edicion"
                    />
                    <ErrorMessage name='edicion' component={() => (<p className={s.error}>{errors.edicion}</p>)} />
                  </div>

                  <label className={s.label} >Tipo de tapa</label> {/* HACERLO ENUM! */}
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

                <label className={s.label} >Año de publicación</label>
                <div>
                  <Field
                    className={s.input}
                    type="number"
                    name="año_de_pub"
                    id="año_de_pub"
                    placeholder="AAAA..."
                  />
                  <ErrorMessage name='año_de_pub' component={() => (<p className={s.error}>{errors.año_de_pub}</p>)} />
                </div>

                <label className={s.label} >Páginas</label>
                <div>
                  <Field
                    className={s.input}
                    type="number"
                    name="cant_pags"
                    id="cant_pags"
                  />
                  <ErrorMessage name='cant_pags' component={() => (<p className={s.error}>{errors.cant_pags}</p>)} />
                </div>

                <label className={s.label} >Saga / Serie</label>
                <div>
                  <Field
                    className={s.input}
                    type="text"
                    name="colection"
                    id="colection"
                  />
                  <ErrorMessage name='colection' component={() => (<p className={s.error}>{errors.colection}</p>)} />
                </div>

                <label className={s.label} >Precio*</label>
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

                <label className={s.label} >Descripción*</label>
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

                <label className={s.label}>Ilustrado</label>
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

                <label className={s.label}>Categorías*</label>
                <div className={s.chek}>
                  <div role="group" aria-labelledby="checkbox-group" >
                    {categories?.map((e, i) =>
                      <div key={i} > <Field type="checkbox" name="category" value={`${e}`} /> {e} </div>
                    )}
                  </div>
                </div>
                <ErrorMessage name='category' className='ASIGNAR!' component={() => (<p className={s.error}>{errors.category}</p>)} />

                <label className={s.label} >Fotografías del ejemplar</label>
                <div>
                  <input
                    hidden
                    ref={fileRef}
                    className={s.input}
                    type="file"
                    id="file"
                    onChange={e => {
                      setFieldValue("file", e.target.files[0])
                    }}
                  />
                  <button className={s.uploadButton} onClick={() => {
                    fileRef.current.click()
                  }}>
                    CARGAR IMAGEN
                  </button>
                  {values.file && <PreviewImage file={values.file} />}
                  {values.file && <button type="button"
                    onClick={() => {
                      handleImage(values.file)
                    }}>SUBIR IMAGEN</button>}

                  <ErrorMessage name='image' component={() => (<p>{errors.image}</p>)} />{/* NO lo estamos validando */}
                </div>

                <button
                  className={s.sendMsg}
                  type="submit"
                  disabled={errors.nombre || errors.autor || errors.idioma || errors.price || errors.category || errors.descripcion}
                >ENVIAR</button>
              </div>
            </Form>
          )}
        </Formik>
        <br />
        <Link className={s.back} to="/">BACK</Link>
      </div>
    </div>
  )
}

export default Forms
