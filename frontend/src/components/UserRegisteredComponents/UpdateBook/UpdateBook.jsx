import React, { useRef, useState, useEffect } from 'react'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getBooks, putBookBody  } from '../../../redux/actions/actionBooks';
import NavBar from '../../CommonComponents/NavBar/NavBar';
import s from '../UpdateBook/UpdateBook.module.css'
import Footer from '../../CommonComponents/Footer/Footer';


const UpdateBook = (_id) => {
    const { id } = useParams()
    
    let navigate = useNavigate()
    const dispatch = useDispatch()
    
 
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
                       dispatch(putBookBody(values))
                        console.log(values)
                        resetForm()
                        navigate('/')
                        dispatch(getBooks())

                    }}
                >

                    {({ errors, handleSubmit }) => (<Form action="" onSubmit={handleSubmit} className={s.formikk} >

                        <div className={s.formm}>

                            <label htmlFor="" className={s.label} >Name</label>
                            <div>
                                <Field
                                    className={s.inputt}
                                    type="text"
                                    name="nombre"
                                    id="nombre"

                                />
                                <ErrorMessage name='nombre' component={() => (<p>{errors.nombre}</p>)} />
                            </div>
                            <label htmlFor="" className={s.label} >Colection</label>
                            <div>
                                <Field
                                    className={s.inputt}
                                    type="text"
                                    name="colection"
                                    id="colection"

                                />
                                <ErrorMessage name='colection' component={() => (<p>{errors.colection}</p>)} />
                            </div>

                            <label htmlFor="" className={s.label} >Price</label>
                            <div>
                                <Field
                                    className={s.inputt}
                                    type="text"
                                    name="price"
                                    id="price"

                                />

                                <ErrorMessage name='price' component={() => (<p >{errors.price}</p>)} />
                            </div>

                            <label htmlFor="" className={s.label} >Image</label>
                            <div>
                                <Field
                                    className={s.inputt}
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
                            <button type="submit" className={s.botonS}>Send</button>

                        </div>

                    </Form>)}
                </Formik>
                <br />
                <Link to="/">
                    <button className={s.botonB}>Back</button>
                </Link>
            </div>
            <Footer />
        </div>
    )
}

export default UpdateBook;