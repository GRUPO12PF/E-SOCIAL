import React, { useEffect, useRef, useState } from 'react'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { postCreate } from '../../../redux/actions/postProducts'
import { getCategories } from '../../../redux/actions/actionCategories.js'
import { cleanData, getBooks, putBookBody } from '../../../redux/actions/actionBooks'
import { detailsBook } from '../../../redux/actions/detailsBooks'
import { subirFotos } from '../../../redux/actions/actionSubirFotos'
import { formValidators } from '../../../utils/helperFunctions.js'
import PreviewImage from './ImgPreview/ImgPreview'
import NavBar from '../../CommonComponents/NavBar/NavBar'
import s from '../Form/Form.module.css'
import EditCard from './EditCard/EditCard'

const Forms = () => {
  const [dispatch, navigate] = [useDispatch(), useNavigate()]
  const categories = useSelector(state => state.categories)

  const { id } = useParams()
  const isAddMode = !id

  const imgPreview = useSelector(state => state.tempState)
  const fileRef = useRef(null)
  const [uploadImg, setUploadImg] = useState(false)

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
            image: '', // probar borrando esto...
            file: '', // probar borrando esto y ver si se asigna por ID
            colection: '',
            ilustrado: false,
            category: []
          }}

          validate={values => formValidators(values)}

          onSubmit={(values, { resetForm }) => {
            if (uploadImg) {
              values.image = imgPreview
            }
            delete values.file

            if (isAddMode) {
              dispatch(postCreate(values))
            } else {
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
            <Form className={s.formik} onSubmit={handleSubmit} >
              <div className={s.form}>

                <div className={s.subdi}>

                  <label className={s.label} >Nombre*</label>
                  <div>
                    <Field
                      name="nombre"
                      className={s.input}
                      type="text"
                      id="nombre"
                    />
                    <ErrorMessage name='nombre' component={() => (<p className={s.error}>{errors.nombre}</p>)} />
                  </div>

                  <label className={s.label} >Autor*</label>
                  <div>
                    <Field
                      name="autor"
                      className={s.input}
                      type="text"
                      id="autor"
                    />
                    <ErrorMessage name='autor' component={() => (<p className={s.error}>{errors.autor}</p>)} />
                  </div>

                  <label className={s.label} >Idioma*</label>
                  <div>
                    <Field
                      name="idioma"
                      className={s.textarea}
                      type="text"
                      id="idioma"
                    />
                    <ErrorMessage name='idioma' component={() => (<p className={s.error}>{errors.idioma}</p>)} />
                  </div>

                  <label className={s.label} >Editorial</label>
                  <div>
                    <Field
                      name="editorial"
                      className={s.textarea}
                      type="text"
                      id="editorial"
                    />
                    <ErrorMessage name='editorial' component={() => (<p className={s.error}>{errors.editorial}</p>)} />
                  </div>

                  <label className={s.label} >Edición</label>
                  <div>
                    <Field
                      name="edicion"
                      className={s.input}
                      type="number"
                      id="edicion"
                    />
                    <ErrorMessage name='edicion' component={() => (<p className={s.error}>{errors.edicion}</p>)} />
                  </div>

                  <label className={s.label} >Tipo de tapa</label> {/* HACERLO ENUM! */}
                  <div>
                    <Field
                      name="tapa"
                      className={s.textarea}
                      type="text"
                      id="tapa"
                      placeholder="Blanda, Dura..."
                    />
                    <ErrorMessage name='tapa' component={() => (<p className={s.error}>{errors.tapa}</p>)} />
                  </div>

                </div>

                <label className={s.label} >Año de publicación</label>
                <div>
                  <Field
                    name="publicado"
                    className={s.input}
                    type="number"
                    id="publicado"
                    placeholder="AAAA..."
                  />
                  <ErrorMessage name='publicado' component={() => (<p className={s.error}>{errors.publicado}</p>)} />
                </div>

                <label className={s.label} >Páginas</label>
                <div>
                  <Field
                    name="cant_pags"
                    className={s.input}
                    type="number"
                    id="cant_pags"
                  />
                  <ErrorMessage name='cant_pags' component={() => (<p className={s.error}>{errors.cant_pags}</p>)} />
                </div>

                <label className={s.label} >Saga / Serie</label>
                <div>
                  <Field
                    name="colection"
                    className={s.input}
                    type="text"
                    id="colection"
                  />
                  <ErrorMessage name='colection' component={() => (<p className={s.error}>{errors.colection}</p>)} />
                </div>

                <label className={s.label} >Precio*</label>
                <div>
                  <Field
                    name="price"
                    className={s.input}
                    type="number"
                    id="price"
                    placeholder="en centavos de USD..."
                  />
                  <ErrorMessage name='price' component={() => (<p className={s.error} >{errors.price}</p>)} />
                </div>

                <label className={s.label} >Descripción*</label>
                <div>
                  <Field
                    name="descripcion"
                    className={s.textarea}
                    type="text"
                    id="descripcion"
                    as="textarea"
                  />
                  <ErrorMessage name='descripcion' component={() => (<p className={s.error}>{errors.descripcion}</p>)} />
                </div>

                <label className={s.label}>Ilustrado</label>
                <div className={s.centro}>
                  <Field
                    name="ilustrado"
                    className={s.textarea}
                    as="select"
                    id="ilustrado"
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
                  <ErrorMessage name='category' component={() => (<p className={s.error}>{errors.category}</p>)} />
                </div>

                <label className={s.label} >Fotografía del ejemplar</label>
                <div>
                  {uploadImg
                    ? <button type="button"
                      onClick={() => {
                        setUploadImg(false)
                      }}>PASAR URL</button>

                    : <button type="button"
                      onClick={() => {
                        setUploadImg(true)
                      }}>SUBIR IMAGEN</button>
                  }
                </div>
                <div>
                  {uploadImg
                    /* Subir Img a Cloudinary */
                    ? (<div>
                      <input
                        hidden
                        name='file'
                        ref={fileRef}
                        className={s.input}
                        type="file"
                        id="file"
                        onChange={e => {
                          setFieldValue("file", e.target.files[0])
                        }}
                      />

                      <button className={s.uploadButton} type="button" onClick={() => {
                        fileRef.current.click()
                      }}>
                        CARGAR IMAGEN
                      </button>

                      {values.file && <PreviewImage file={values.file} />}
                      {values.file && <button type="button"
                        onClick={() => {
                          handleImage(values.file)
                        }}>CONFIRMAR IMAGEN</button>}

                    </div>)

                    /* Pasar Img por URL */
                    : (<div>
                      <Field
                        name="image"
                        className={s.input}
                        type="text"
                        id="image"
                      />
                    </div>)
                  }

                </div>
                <ErrorMessage name='image' component={() => (<p className={s.error}>{errors.image}</p>)} />
                <ErrorMessage name='file' component={() => (<p className={s.error}>{errors.file}</p>)} />

              </div>

              <button
                className={s.sendMsg}
                type="submit"
                disabled={errors.nombre || errors.autor || errors.idioma || errors.price || errors.category || errors.descripcion || errors.file || errors.image}
              >ENVIAR</button>

              {console.log("🚀 ~ file: Forms.jsx ~ line 276 ~ Forms ~ values.file", values.file.name)}
              {console.log("🚀 ~ file: Forms.jsx ~ line 268 ~ Forms ~ errors.file", errors)}
            </Form>
          )}
        </Formik>
      </div>
    </div >
  )
}

export default Forms
