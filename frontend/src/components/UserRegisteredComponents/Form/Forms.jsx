import React, { useEffect } from 'react'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { postCreate } from '../../../redux/actions/postProducts';
import NavBar from '../../CommonComponents/NavBar/NavBar';
import s from '../Form/Form.module.css'
import { getCategories } from '../../../redux/actions/actionCategories.js';
import { getBooks } from '../../../redux/actions/actionBooks';
import Footer from '../../CommonComponents/Footer/Footer';

const Forms = () => {
    const categories = useSelector(state => state.categories)
    let navigate = useNavigate()
    const dispatch = useDispatch()

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
                        nombre: '',
                        descripcion: '',
                        price: '',
                        image: '',
                        colection: '',
                        category: []
                    }}

                    validate={(values) => {
                        let errors = {}

                        if (!values.nombre) {
                            errors.nombre = 'required field'
                        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)) {
                            errors.nombre = 'name only'
                        }
                        if (!values.descripcion) {
                            errors.descripcion = 'campo requerido'
                        } else if (!values.price) {
                            errors.price = 'campo requerido'
                        } else if (!values.colection) {
                            errors.colection = 'campo requerido'
                        } else if (!values.category) {
                            errors.category = 'campo requerido'
                        }
                        return errors;
                    }}

                    onSubmit={(values, { resetForm }) => {
                        console.log(values)

                        dispatch(postCreate(values))
                        resetForm()
                        swal({
                            title: "Creado con exito!",
                            text: " ",
                            icon: "success",
                            button: "Ok!",
                        });
                        navigate('/')
                        dispatch(getBooks())

                    }}
                >
                    {({ errors, handleSubmit, values, category }) => (<Form action="" onSubmit={handleSubmit} className={s.formik} >
                        <div className={s.form}>
                            <label htmlFor="" className={s.label} >Name</label>
                            <div>
                                <Field
                                    className={s.input}
                                    type="text"
                                    name="nombre"
                                    id="nombre"
                                    placeholder="nombre..."
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
                                    type="number"
                                    name="price"
                                    id="price"
                                    placeholder="precio en centavos de USD..."
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
                            <label htmlFor="" className={s.label}>Category</label>
                            <div className={s.chek}>
                                <div role="group" aria-labelledby="checkbox-group" >
                                    {categories?.map((e, i) =>
                                        <label> <Field type="checkbox" name="category" value={`${e}`} key={i} /> {e} </label>
                                    )}
                                </div>
                            </div>
                            <button className={s.sendMsg} type="submit">Send</button>
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