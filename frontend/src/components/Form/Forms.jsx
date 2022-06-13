import React, { useRef, useState, useEffect } from 'react'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { postCreate } from '../../redux/actions/postProducts';
import NavBar from '../NavBar/NavBar';
import s from '../Form/Form.module.css'
import { getCategories } from '../../redux/actions/actionCategories.js';
import { getBooks } from '../../redux/actions/actionBooks';

const Forms = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const categorie = useSelector(state => state.categories)
   
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
                        category:''

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
                        }else if(!values.category){
                            errors.category= 'required field'
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

                    {({ errors, handleSubmit }) => (<Form action="" onSubmit={handleSubmit} className={s.formik} >

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
                            
                            <label htmlFor="" className={s.label} >Category</label>
                             <div>
                            <Field name="category" id="category"  as="select"  className={s.input}>
                                 <option >Category</option>
                                {
                                    categorie?.map((e,i)=>{
                                        return(
                                            <option className={s.select} value={e.category} key={i}>{e}</option>
                                        )
                                    })
                                }
                            </Field>
                            <ErrorMessage name='category' component={() => (<p>{errors.category}</p>)} />
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