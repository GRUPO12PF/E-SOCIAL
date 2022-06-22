import React, { useEffect } from 'react'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getBooks, putBookBody } from '../../../redux/actions/actionBooks'
import NavBar from '../../CommonComponents/NavBar/NavBar'
import s from '../UpdateBook/UpdateBook.module.css'
import { getCategories } from '../../../redux/actions/actionCategories'

const UpdateBook = (_id) => {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = useParams()
  const categories = useSelector(state => state.categories)

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
            _id: id,
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

            if (!values.nombre) {
              errors.nombre = 'Campo requerido.'
            } else if (!/^\S.*$/.test(values.nombre)) {
              errors.nombre = 'El primer caracter no puede ser un espacio'
            } else if (!/^(\d|[a-z]|[\u00f1\u00d1]|[,.:;¡!¿?']|[À-ÿ]|\s){1,40}$/i.test(values.nombre)) {
              errors.nombre = 'Ingrese un nombre válido de hasta 40 caracteres.'
            }

            if (!values.autor) {
              errors.autor = 'Campo requerido.'
            } else if (!/^\S.*$/.test(values.autor)) {
              errors.autor = 'El primer caracter no puede ser un espacio'
            } else if (!/^(|[a-z]|[()']|[À-ÿ]|[\u00f1\u00d1]|\s){1,40}$/i.test(values.autor)) {
              errors.autor = 'Ingrese un autor válido de hasta 40 caracteres.'
            }

            if (!values.idioma) {
              errors.idioma = 'Campo requerido.'
            } else if (!/^\S.*$/.test(values.idioma)) {
              errors.idioma = 'El primer caracter no puede ser un espacio'
            } else if (!/^([a-z]|[\u00f1\u00d1]|\s){1,20}$/i.test(values.idioma)) {
              errors.idioma = 'Ingrese un idioma válido de hasta 40 caracteres.'
            }

            if (/^\s(.)*$/.test(values.editorial)) {
              errors.editorial = 'El primer caracter no puede ser un espacio'
            } else if (!/^(\d|[a-z]|[\u00f1\u00d1]|[,.:;¡!¿?']|[À-ÿ]|\s){0,40}$/i.test(values.editorial)) {
              errors.editorial = 'Ingrese un nombre válido de hasta 40 caracteres.'
            }

            if (/(\D)/.test(values.edicion) || values.edicion < 1 && values.edicion.toString().length > 0) {
              errors.edicion = 'Ingrese un Nº de edición mayor a 0.'
            }

            if (!/^([a-z]|\s){0,15}$/i.test(values.tapa)) {
              errors.tapa = 'Ingrese un tipo de tapa.'
            }

            if (values.año_de_pub && !/^[012]{0,1}[0-9]{0,3}$/.test(values.año_de_pub)) {
              errors.año_de_pub = 'Ingrese un año en formato AAAA.'
            }

            if (/(\D|[-0])/.test(values.cant_pags)) {
              errors.cant_pags = 'Ingrese un número de págs. válido.'
            }

            if (values.descripcion.length < 6) {
              errors.descripcion = 'La descripción debe contar con al menos 6 caracteres.'
            } else if (values.descripcion.length > 1500) {
              errors.descripcion = 'La descripción debe contar con un máximo de 1500 caracteres.'
            }

            if (/(\D)/.test(values.price)) {
              errors.price = 'Ingrese el precio en centavos de USD.'
            } else if (!values.price || values.price < 50) {
              errors.price = 'Ingrese un precio válido mayor a 50 centavos.'
            }

            if (!values.category) {
              errors.category = 'Elija al menos 1 categoría.'
            }

            return errors
          }}

          onSubmit={(values, { resetForm }) => {
            dispatch(putBookBody(values))
            resetForm()
            navigate('/')
            dispatch(getBooks())
          }}
        >

          {({ errors, handleSubmit }) => (<Form action="" onSubmit={handleSubmit} className={s.formikk} >

            <div className={s.formm}>

              <label htmlFor="" className={s.label} >Nombre*</label>
              <div>
                <Field
                  className={s.input}
                  type="text"
                  name="nombre"
                  id="nombre"
                />
                <ErrorMessage name='nombre' component={() => (<p>{errors.nombre}</p>)} />
              </div>

              <label htmlFor="" className={s.label} >Autor*</label>
              <div>
                <Field
                  className={s.input}
                  type="text"
                  name="autor"
                  id="autor"
                />
                <ErrorMessage name='autor' component={() => (<p>{errors.autor}</p>)} />
              </div>

              <label htmlFor="" className={s.label} >Idioma*</label>
              <div>
                <Field
                  className={s.textarea}
                  type="text"
                  name="idioma"
                  id="idioma"
                />
                <ErrorMessage name='idioma' component={() => (<p>{errors.idioma}</p>)} />
              </div>

              <label htmlFor="" className={s.label} >Editorial</label>
              <div>
                <Field
                  className={s.textarea}
                  type="text"
                  name="editorial"
                  id="editorial"
                />
                <ErrorMessage name='editorial' component={() => (<p>{errors.editorial}</p>)} />
              </div>

              <label htmlFor="" className={s.label} >Edición</label>
              <div>
                <Field
                  className={s.input}
                  type="number"
                  name="edicion"
                  id="edicion"
                />
                <ErrorMessage name='edicion' component={() => (<p >{errors.edicion}</p>)} />
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
                <ErrorMessage name='tapa' component={() => (<p>{errors.tapa}</p>)} />
              </div>

              <label htmlFor="" className={s.label} >Año de publicación</label>
              <div>
                <Field
                  className={s.input}
                  type="number"
                  name="año_de_pub"
                  id="año_de_pub"
                  placeholder="AAAA..."
                />
                <ErrorMessage name='año_de_pub' component={() => (<p >{errors.año_de_pub}</p>)} />
              </div>

              <label htmlFor="" className={s.label} >Páginas</label>
              <div>
                <Field
                  className={s.input}
                  type="number"
                  name="cant_pags"
                  id="cant_pags"
                />
                <ErrorMessage name='cant_pags' component={() => (<p >{errors.cant_pags}</p>)} />
              </div>

              <label htmlFor="" className={s.label} >Saga / Serie</label>
              <div>
                <Field
                  className={s.input}
                  type="text"
                  name="colection"
                  id="colection"
                />
                <ErrorMessage name='colection' component={() => (<p>{errors.colection}</p>)} />
              </div>

              <label htmlFor="" className={s.label} >Fotografías del ejemplar</label> {/* ToDo: acá hay que cambiar por upload en Cloudinary */}
              <div>
                <Field
                  className={s.input}
                  type="text"
                  name="image"
                  id="image"
                />
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
                <ErrorMessage name='price' component={() => (<p >{errors.price}</p>)} />
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
                <ErrorMessage name='descripcion' component={() => (<p>{errors.descripcion}</p>)} />
              </div>

              <label htmlFor="" className={s.label}>Ilustrado</label>
              <div>
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
                  {/* <ErrorMessage name='category' component={() => (<p>{errors.category}</p>)} />      NO ESTÁ FUNCANDO! */}
                </div>
              </div>

              <button
                className={s.sendMsg}
                type="submit"
                disabled={errors.nombre || errors.autor || errors.idioma || errors.price || errors.category || errors.descripcion}
              >ENVIAR</button>
            </div>
          </Form>)}
        </Formik>
        <br />
        <Link to="/">
          <button className={s.botonB}>Back</button>
        </Link>
      </div>
    </div>
  )
}

export default UpdateBook