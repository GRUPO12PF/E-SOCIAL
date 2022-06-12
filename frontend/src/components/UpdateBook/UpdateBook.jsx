import React, { useRef, useState, useEffect } from 'react'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { putBook } from '../../redux/actions/actionBooks';
import NavBar from '../NavBar/NavBar';
import s from '../UpdateBook/UpdateBook.module.css'
import { detailsBook } from '../../redux/actions/detailsBooks';

const UpdateBook = (_id) => {
    const { id } = useParams()
    // const [id, setId] = useState(null)
    let navigate = useNavigate()
    const dispatch = useDispatch()
    

    useEffect(() => {
        dispatch(putBook(id))
      }, [dispatch, id])
      console.log(id)
// useEffect(() => {
//     if(params.id){
//         setId(books.id)
//     }
// }, [params])
      
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
                        descripcion: '',
                        price: '',
                        image: '',
                        ranking: '',
                        colection: ''

                    }}
                    validate={(values) => {
                        let errors = {}

                        if (!values.nombre) {
                            errors.nombre = 'required field'
                        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)) {
                            errors.nombre = 'name only'
                        }
                        if (!values.descripcion) {
                            errors.descripcion = 'required field'
                        } else if (!values.price) {
                            errors.price = 'required'

                        } else if (!values.ranking) {
                            errors.ranking = 'required field'
                        } else if (!values.colection) {
                            errors.colection = 'required field'
                        }



                        return errors;
                    }}
                    onSubmit={(values, { resetForm }) => {
                        console.log(values)
                        dispatch(putBook(values))
                        resetForm()
                        navigate('/home')
                    }}
                >

                    {({ errors, handleSubmit }) => (<Form action="" onSubmit={handleSubmit} className={s.formik} >

                        <div className={s.form}>

                            <label htmlFor="" className={s.label} >Name</label>
                            <div>
                                <Field
                                    className={s.input}
                                    type="text"
                                    name="nombre"
                                    id="nombre"

                                />
                                <ErrorMessage name='nombre' component={() => (<p>{errors.nombre}</p>)} />
                            </div>
                            <label htmlFor="" className={s.label} >Colection</label>
                            <div>
                                <Field
                                    className={s.input}
                                    type="text"
                                    name="colection"
                                    id="colection"

                                />
                                <ErrorMessage name='colection' component={() => (<p>{errors.colection}</p>)} />
                            </div>

                            <label htmlFor="" className={s.label} >Price</label>
                            <div>
                                <Field
                                    className={s.input}
                                    type="text"
                                    name="price"
                                    id="price"

                                />

                                <ErrorMessage name='price' component={() => (<p >{errors.price}</p>)} />
                            </div>

                            <label htmlFor="" className={s.label} >Image</label>
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

                            <label htmlFor="" className={s.label} >Ranking</label>
                            <div className={s.range}>
                                <Field

                                    type="range"
                                    name="ranking"
                                    id="ranking"


                                />
                                <ErrorMessage name='ranking' component={() => (<p>{errors.ranking}</p>)} />

                            </div>
                            <button type="submit">Send Message</button>

                        </div>

                    </Form>)}
                </Formik>
                <br />
                <Link to="/home">Back</Link>
            </div>
        </div>
    )
}

export default UpdateBook;