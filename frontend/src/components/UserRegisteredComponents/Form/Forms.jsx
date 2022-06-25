import React, { useEffect, useRef } from 'react'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { postCreate } from '../../../redux/actions/postProducts'
import { getCategories } from '../../../redux/actions/actionCategories.js'
import { cleanData, getBooks, putBookBody } from '../../../redux/actions/actionBooks'
import { detailsBook } from '../../../redux/actions/detailsBooks'
import { subirFotos } from '../../../redux/actions/actionSubirFotos'
import PreviewImage from './ImgPreview/ImgPreview'
import NavBar from '../../CommonComponents/NavBar/NavBar'
import s from '../Form/Form.module.css'
import EditCard from './EditCard/EditCard'
import { formValidators } from '../../../utils/helperFunctions.js'

const Forms = () => {
  const [dispatch, navigate] = [useDispatch(), useNavigate()]
  const categories = useSelector(state => state.categories)
  const imgPreview = useSelector(state => state.tempState)
  const { id } = useParams()
  const isAddMode = !id

  const fileRef = useRef(null)

  function handleImage(images) {
    dispatch(subirFotos(images))
  }

  useEffect(() => {
    dispatch(cleanData)
    dispatch(getCategories())
    if (!isAddMode) { dispatch(detailsBook(id)) }
  }, [])

  return (
    <div className={s.formFondo}>
      <div>
        <NavBar />

        <EditCard id={id} addMode={isAddMode} />

        <Formik
          initialValues={{
            nombre: '',
            autor: '',
            idioma: '',
            editorial: '',
            edicion: '',
            tapa: '',
            publicado: '',
            cant_pags: '',
            descripcion: '',
            price: '',
            file: '', // acá va a ir la imagen, se pasa a values.image desp
            colection: '',
            ilustrado: false,
            category: []
          }}

          validate={values => formValidators(values)}

          onSubmit={(values, { resetForm }) => {
            values.image = imgPreview
            delete values.file

            if (isAddMode) { dispatch(postCreate(values)) }
            else {
              values._id = id
              dispatch(putBookBody(values))
            }

            dispatch(cleanData)
            resetForm()
            swal({
              title: "¡Realizado con éxito!",
              text: " ",
              icon: "success",
              button: "Ok!",
            })
            navigate('/')
            dispatch(getBooks())
          }}
        >

          {/* acá arranca el ------------- FORM ------------- */}
          {({ errors, values, handleSubmit, setFieldValue }) => (
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
                    name="publicado"
                    id="publicado"
                    placeholder="AAAA..."
                  />
                  <ErrorMessage name='publicado' component={() => (<p className={s.error}>{errors.publicado}</p>)} />
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
        <Link className={s.back} to="/profile">Atrás</Link>
      </div>
    </div >
  )
}

export default Forms
