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
import { formInitialValues } from './formInitialValues'

const Forms = () => {
  const [dispatch, navigate] = [useDispatch(), useNavigate()]
  const categories = useSelector(state => state.categories)
  const { nombre, autor, idioma, editorial, edicion, tapa, publicado, cant_pags, colection, ilustrado, category } = useSelector(state => state.detail)

  const { id } = useParams()
  const isCreate = !id

  const fileRef = useRef(null)
  const imgPreview = useSelector(state => state.tempState)
  const [uploadImg, setUploadImg] = useState(false)
  const [confirmImg, setConfirmImg] = useState(true)

  function handleImage(images) {
    dispatch(subirFotos(images))
    setConfirmImg(false)
  }

  useEffect(() => {
    dispatch(cleanData)
    dispatch(getCategories())
    if (!isCreate) { dispatch(detailsBook(id)) }
  }, [dispatch])

  return (
    <div className={s.formFondo}>
      <div>
        <NavBar />

        <EditCard id={id} addMode={isCreate} />

        <Formik
          initialValues={formInitialValues}

          validate={values => formValidators(values)}

          onSubmit={(values, { resetForm }) => {
            if (uploadImg) {
              values.image = imgPreview
            }
            delete values.file

            if (isCreate) {
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
                {console.log(values)}

                <div className={s.subdi}>

                  <label className={s.label} >Nombre*</label>
                  {!isCreate ? <p className={s.centro}>({nombre})</p> : null} {/* solo en modo Update */}
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
                  {!isCreate ? <p className={s.centro}>({autor})</p> : null}
                  <div>
                    <Field
                      name="autor"
                      className={s.input}
                      type="text"
                      id="autor"
                    />
                  </div>
                  <ErrorMessage name='autor' component={() => (<p className={s.error}>{errors.autor}</p>)} />

                  <label className={s.label} >Idioma*</label>
                  {!isCreate ? <p className={s.centro}>({idioma})</p> : null}
                  <div>
                    <Field
                      name="idioma"
                      className={s.textarea}
                      type="text"
                      id="idioma"
                    />
                  </div>
                  <ErrorMessage name='idioma' component={() => (<p className={s.error}>{errors.idioma}</p>)} />

                  <label className={s.label} >Editorial</label>
                  {!isCreate ? <p className={s.centro}>({editorial})</p> : null}
                  <div>
                    <Field
                      name="editorial"
                      className={s.textarea}
                      type="text"
                      id="editorial"
                    />
                  </div>
                  <ErrorMessage name='editorial' component={() => (<p className={s.error}>{errors.editorial}</p>)} />

                  <label className={s.label} >Edición</label>
                  {!isCreate ? <p className={s.centro}>({edicion})</p> : null}
                  <div>
                    <Field
                      name="edicion"
                      className={s.input}
                      type="number"
                      id="edicion"
                    />
                  </div>
                  <ErrorMessage name='edicion' component={() => (<p className={s.error}>{errors.edicion}</p>)} />

                  <div className={s.centro}>
                    <div className={s.tapas}>
                      <label className={s.label}>Tapa</label>
                      {!isCreate ? <p className={s.centro}>({tapa})</p> : null}
                      <Field
                        name="tapa"
                        className={s.textarea}
                        as="select"
                        id="tapa"
                        value={values.tapa?.defaultValue}
                      >
                        <option value=''>¿Tipo de Tapa?</option>
                        <option value="Blanda">Blanda</option>
                        <option value="Dura">Dura</option>
                      </Field>
                    </div>
                  </div>

                  <label className={s.label} >Año de publicación</label>
                  {!isCreate ? <p className={s.centro}>({publicado})</p> : null}
                  <div>
                    <Field
                      name="publicado"
                      className={s.input}
                      type="number"
                      id="publicado"
                      placeholder="AAAA..."
                    />
                  </div>
                  <ErrorMessage name='publicado' component={() => (<p className={s.error}>{errors.publicado}</p>)} />

                  <label className={s.label} >Páginas</label>
                  {!isCreate ? <p className={s.centro}>({cant_pags})</p> : null}
                  <div>
                    <Field
                      name="cant_pags"
                      className={s.input}
                      type="number"
                      id="cant_pags"
                    />
                  </div>
                  <ErrorMessage name='cant_pags' component={() => (<p className={s.error}>{errors.cant_pags}</p>)} />

                  <label className={s.label} >Saga / Serie</label>
                  {!isCreate ? <p className={s.centro}>({colection})</p> : null}
                  <div>
                    <Field
                      name="colection"
                      className={s.input}
                      type="text"
                      id="colection"
                    />
                  </div>
                  <ErrorMessage name='colection' component={() => (<p className={s.error}>{errors.colection}</p>)} />

                  <label className={s.label} >Precio*</label>
                  <div>
                    <Field
                      name="price"
                      className={s.input}
                      type="number"
                      id="price"
                      placeholder="en centavos de USD..."
                    />
                  </div>
                  <ErrorMessage name='price' component={() => (<p className={s.error} >{errors.price}</p>)} />

                  <label className={s.label} >Descripción*</label>
                  <div>
                    <Field
                      name="descripcion"
                      className={s.textarea}
                      type="text"
                      id="descripcion"
                      as="textarea"
                    />
                  </div>
                  <ErrorMessage name='descripcion' component={() => (<p className={s.error}>{errors.descripcion}</p>)} />

                </div>

                <div className={s.centro}>
                  <label className={s.label}>Ilustraciones</label>
                  {!isCreate ? <p className={s.centro}>({ilustrado})</p> : null}
                  <Field
                    name="ilustrado"
                    className={s.textarea}
                    as="select"
                    id="ilustrado"
                    value={values.ilustrado?.defaultValue}
                  >
                    <option value={false}>¿Ilustrado?</option>
                    <option value={false}>X</option>
                    <option value={true}>✓</option>
                  </Field>

                  <div className={s.categoriasF}>
                    <label className={s.label}>Categorías*</label>
                    <div className={s.check}>
                      <div role="group" aria-labelledby="checkbox-group" >
                        {categories?.map((e, i) =>
                          <div key={i} > <Field type="checkbox" name="category" value={`${e}`} /> {e} </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <ErrorMessage name='category' component={() => (<p className={s.error}>{errors.category}</p>)} />
                  {!isCreate ? <p className={s.centro}>({category})</p> : null}
                </div>

                <div className={s.fotoF1}>
                  <div>
                    <label className={s.label} >Fotografía del ejemplar</label>
                    {uploadImg
                      /* cambiar a Pasar Img por URL */
                      ? <div >
                        <button className={s.btnF} type="button"
                          onClick={() => {
                            setUploadImg(false)
                          }}>PASAR URL
                        </button>
                        <p className={s.pF}>Cargue el archivo de su imagen</p>
                      </div>

                      /* cambiar a Img a Cloudinary */
                      : <div>
                        <button className={s.btnF} type="button"
                          onClick={() => {
                            setUploadImg(true)
                          }}>SUBIR IMAGEN
                        </button>
                        <p className={s.pF}>Ingrese la URL de su imagen</p>
                      </div>

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
                        {values.file && confirmImg && <button className={s.confirmP} type="button"
                          disabled={errors.file}
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
                  <p className={s.error}>{errors.file}</p>

                </div>
                  <ErrorMessage name='image' component={() => (<p className={s.error}>{errors.image}</p>)} />
              </div>

              <button
                className={s.sendMsg}
                type="submit"
                disabled={Object.keys(errors).length > 0}
              >ENVIAR</button>
              {console.log(errors)}
            </Form>
          )}

        </Formik>
      </div>
    </div >
  )
}

export default Forms
