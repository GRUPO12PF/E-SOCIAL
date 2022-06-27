
// SIN IMPLEMENTAR AÚN !!! es parte de la modularización

import { useRef, useState } from 'react'
import { Field, ErrorMessage } from 'formik'
import { useSelector } from 'react-redux'
import s from '../Form/Form.module.css'
import PreviewImage from "../ImgPreview/ImgPreview"
import { subirFotos } from '../../../redux/actions/actionSubirFotos'

const PreviewImage = ({ values, errors, setFieldValue }) => {
  const fileRef = useRef(null)

  const [uploadImg, setUploadImg] = useState(false)
  const [confirmImg, setConfirmImg] = useState(true)

  function handleImage(images) {
    dispatch(subirFotos(images))
    setConfirmImg(false)
  }

  const pull_data = (data) => {
    console.log(data); // LOGS DATA FROM CHILD
  }

  return (
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
  )
}

export default PreviewImage
