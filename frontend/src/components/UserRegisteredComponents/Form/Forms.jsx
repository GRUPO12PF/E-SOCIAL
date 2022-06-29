import { useEffect, useRef, useState } from 'react'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { postCreate } from '../../../redux/actions/postProducts'
import { getCategories } from '../../../redux/actions/actionCategories.js'
import { cleanData, getBooks, putBookBody } from '../../../redux/actions/actionBooks'
import { detailsBook } from '../../../redux/actions/detailsBooks'
import { subirFotos } from '../../../redux/actions/actionSubirFotos'
import { formValidators } from '../../../utils/helperFunctions.js'
import { formInitialValues } from './formInitialValues'
import PreviewImage from './ImgPreview/ImgPreview'
import NavBar from '../../CommonComponents/NavBar/NavBar'
import EditCard from './EditCard/EditCard'
import CampoInput from './CampoInput/CampoInput'
import CampoSelect from './CampoInput/CampoSelect'
import s from '../Form/Form.module.css'
import NotCreator from './NotCreator/NotCreator'

const Forms = () => {
  const [dispatch, navigate] = [useDispatch(), useNavigate()]
  const categories = useSelector(state => state.categories)
  const { nombre, autor, idioma, editorial, edicion, tapa, publicado, cant_pags, colection, ilustrado, category, creador } = useSelector(state => state.detail)
  const user = useSelector(state => state.usuarioActual)

  const { id } = useParams()
  const isCreate = !id

  const fileRef = useRef(null)
  const imgPreview = useSelector(state => state.tempState)
  const [uploadImg, setUploadImg] = useState(false)
  const [confirmImg, setConfirmImg] = useState(true)

  const [verMas, setVerMas] = useState(false)

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

        {creador && creador === user?._id
          ? (<>
            <EditCard id={id} addMode={isCreate} />

            <Formik
              initialValues={formInitialValues}

              validate={values => formValidators(values, uploadImg)}

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
                <Form className={s.formikContainer} onSubmit={handleSubmit} >

                  <div className={s.formReqContents}>

                    <div id='REQUERIDOS' className={s.formBody}>

                      <CampoInput
                        name='nombre'
                        type="text"
                        input={nombre}
                        isCreate={isCreate}
                        errors={errors}
                        req={'*'}
                      />

                      <CampoInput
                        name='autor'
                        type="text"
                        input={autor}
                        isCreate={isCreate}
                        errors={errors}
                        req={'*'}
                      />

                      <CampoInput
                        name='idioma'
                        type="text"
                        input={idioma}
                        isCreate={isCreate}
                        errors={errors}
                        req={'*'}
                      />

                      <CampoInput
                        text='precio'
                        name='price'
                        type="number"
                        isCreate={isCreate}
                        errors={errors}
                        placeholder='en centavos de USD...'
                        req={'*'}
                      />

                      <CampoInput
                        name='descripcion'
                        type="text"
                        as="textarea"
                        input={cant_pags}
                        isCreate={isCreate}
                        errors={errors}
                        req={'*'}
                      />

                      <div className={s.formCategories}>
                        <label className={s.labelCenter}>Categorías*</label>
                        <div className={s.check}>
                          <div role="group" aria-labelledby="checkbox-group" >
                            {categories?.map((e, i) =>
                              <div key={i} className={s.optionContainer} >
                                <Field className={s.checkBox} type="checkbox" name="category" value={`${e}`} />
                                {e}
                              </div>
                            )}
                          </div>
                        </div>

                        <ErrorMessage name='category' component={() => (<p className={s.error}>{errors.category}</p>)} />
                        {!isCreate
                          ? <p className={s.centro}>({category?.sort((a, b) => a.localeCompare(b)).join(', ')})</p>
                          : null}
                      </div>

                      <div className={s.fotoF1}>
                        <div id='Selector para subir Img'>
                          <label className={s.labelCenter} >Fotografía del ejemplar*</label>
                          {uploadImg
                            /* cambiar a Pasar Img por URL */
                            ? <div >
                              <button className={s.btnF} type="button"
                                onClick={() => {
                                  setUploadImg(false)
                                  setFieldValue("image", '')
                                }}>PASAR URL
                              </button>
                              <p className={s.textoFile}>Cargue el archivo de su imagen</p>
                            </div>

                            /* cambiar a Img a Cloudinary */
                            : <div>
                              <button className={s.btnF} type="button"
                                onClick={() => {
                                  setUploadImg(true)
                                  setFieldValue("file", '')
                                }}>SUBIR IMAGEN
                              </button>
                              <p className={s.textoFile}>Ingrese la URL de su imagen</p>
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

                              <button className={s.loadImageBtn} type="button" onClick={() => {
                                fileRef.current.click()
                              }}>
                                CARGAR IMAGEN
                              </button>

                              {values.file && <PreviewImage file={values.file} />}
                              {values.file && confirmImg && <button className={s.loadImageBtn} type="button"
                                disabled={errors.file}
                                onClick={() => {
                                  handleImage(values.file)
                                }}>CONFIRMAR IMAGEN</button>}
                            </div>)

                            /* Pasar Img por URL */
                            : (<div>
                              <Field
                                name="image"
                                className={s.imgInput}
                                type="text"
                                id="image"
                              />
                              {values.image && <img src={values.image} alt="preview" className={s.previewImg} />}
                            </div>)
                          }

                        </div>
                        <p className={s.error}>{errors.file}</p>
                        <ErrorMessage name='image' component={() => (<p className={s.error}>{errors.image}</p>)} />
                      </div>


                    </div>
                  </div> {/* FIN-Requeridos */}
                  <br />
                  <div id='OPCIONALES' className={s.formOpcionales}>
                    <button className={s.btnAdicional} onClick={() => setVerMas(!verMas)} type="button">
                      {verMas ? ". . ." : "OPCIONALES"}
                    </button>

                    {!verMas
                      ? <>{null}</>

                      : (<div className={s.formBody}>

                        <CampoInput
                          name='editorial'
                          type="text"
                          input={editorial}
                          isCreate={isCreate}
                          errors={errors}
                        />

                        <CampoInput
                          name='edicion'
                          type="number"
                          input={edicion}
                          isCreate={isCreate}
                          errors={errors}
                        />

                        <CampoSelect
                          name='tapa'
                          input={tapa}
                          isCreate={isCreate}
                          errors={errors}
                          values={values}
                          option1={'Blanda'}
                          value1={'Blanda'}
                          option2={'Dura'}
                          value2={'Dura'}
                        />

                        <CampoInput
                          text='año de publicación'
                          name='publicado'
                          type="number"
                          input={publicado}
                          isCreate={isCreate}
                          errors={errors}
                          placeholder={'AAAA...'}
                        />

                        <CampoInput
                          text='páginas'
                          name='cant_pags'
                          type="number"
                          input={cant_pags}
                          isCreate={isCreate}
                          errors={errors}
                        />

                        <CampoInput
                          text='Saga / Serie'
                          name='colection'
                          type="text"
                          input={colection}
                          isCreate={isCreate}
                          errors={errors}
                        />

                        <div className={s.tapas}>
                          <CampoSelect
                            name='ilustrado'
                            input={ilustrado}
                            isCreate={isCreate}
                            errors={errors}
                            values={values}
                            option1={'X'}
                            value1={false}
                            option2={'✓'}
                            value2={true}
                          />
                        </div>

                      </div>)
                    }

                  </div> {/* FIN-Opcionales */}
                  <br />
                  <button
                    className={s.sendMsg}
                    type="submit"
                    disabled={Object.keys(errors).length > 0}
                  >ENVIAR FORMULARIO</button>

                  {console.log('🚀 — Forms.jsx — errors', errors)}
                </Form>

              )}
            </Formik>
          </>)
          : <NotCreator creador={creador} />
        }
      </div>
    </div >
  )
}

export default Forms
