import React, { useEffect } from 'react'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { postCreate } from '../../../redux/actions/postProducts';
import NavBar from '../../CommonComponents/NavBar/NavBar';
import s from '../Form/Form.module.css'
import { getCategories } from '../../../redux/actions/actionCategories.js';
import { getBooks } from '../../../redux/actions/actionBooks';

const Forms = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const categorie = useSelector(state => state.categories)

    let opcions = categorie.map(c => {
        return (
            { value: c, label: c }
        )
    })

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
                        ranking: '',
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
                        } else if (!values.ranking) {
                            errors.ranking = 'campo requerido'
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
                        navigate('/home')
                        dispatch(getBooks())
                        // window.location.reload();
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
                                    placeholder="name"
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
                            <label htmlFor="" className={s.label}>Category</label>
                            <div className={s.chek}>
                                <div role="group" aria-labelledby="checkbox-group" >
                                    <label> <Field type="checkbox" name="category" value="Autoayuda" /> Autoayuda </label>
                                    <label> <Field type="checkbox" name="category" value="Autobiográficos" /> Autobiográficos </label>
                                    <label> <Field type="checkbox" name="category" value="Aventura" /> Aventura </label>
                                    <label> <Field type="checkbox" name="category" value="Biografía" /> Biografía </label>
                                    <label> <Field type="checkbox" name="category" value="Ciencia" /> Ciencia </label>
                                    <label> <Field type="checkbox" name="category" value="ficción" /> ficción </label>
                                    <label> <Field type="checkbox" name="category" value="Científicos" /> Científicos </label>
                                    <label> <Field type="checkbox" name="category" value="Cómics" /> Cómics </label>
                                    <label> <Field type="checkbox" name="category" value="Cuentos" /> Cuentos </label>
                                    <label> <Field type="checkbox" name="category" value="Deporte" /> Deporte </label>
                                    <label> <Field type="checkbox" name="category" value="Historia" /> Historia </label>
                                    <label> <Field type="checkbox" name="category" value="Humor" /> Humor </label>
                                    <label> <Field type="checkbox" name="category" value="Marketing" /> Marketing </label>
                                    <label> <Field type="checkbox" name="category" value="Microrrelatos" /> Microrrelatos </label>
                                    <label> <Field type="checkbox" name="category" value="Novela de culto" /> Novela de culto </label>
                                    <label> <Field type="checkbox" name="category" value="Novela de no ficción" /> Novela de no ficción </label>
                                    <label> <Field type="checkbox" name="category" value="Novela" /> Novela </label>
                                    <label> <Field type="checkbox" name="category" value="Histórica" />Histórica </label>
                                    <label> <Field type="checkbox" name="category" value="Novelas" /> Novelas </label>
                                    <label> <Field type="checkbox" name="category" value="Postapocalíptico" /> Postapocalíptico </label>
                                    <label> <Field type="checkbox" name="category" value="Románticas" /> Románticas </label>
                                    <label> <Field type="checkbox" name="category" value="Salud" /> Salud </label>
                                    <label> <Field type="checkbox" name="category" value="Sociedad" /> Sociedad </label>
                                    <label> <Field type="checkbox" name="category" value="Suspense" />Suspense </label>
                                    <label> <Field type="checkbox" name="category" value="Terror" /> Terror </label>
                                    <label> <Field type="checkbox" name="category" value="Otros" /> Otros </label>
                                    <label> <Field type="checkbox" name="category" value="Videojuegos" /> Videojuegos </label>
                                </div>
                            </div>
                            <button className={s.sendMsg} type="submit">Send</button>
                        </div>
                    </Form>)}
                </Formik>
                <br />
                <Link className={s.back} to="/home">BACK</Link>
            </div>
        </div>
    )
}

export default Forms