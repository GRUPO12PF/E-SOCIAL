import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup';


const Form = () => {

    
    const formik = useFormik({
        initialValues:{name:'',description:'',price:'',image:''},
        validationSchema: Yup.object({
                name: Yup.string()
                    .required('requered field'),
                description: Yup.string()
                    .required('required field'),
                price: Yup.string()
                     .required('please enter a price'),
                image: Yup.string()
                    .required('please enter an image')     


        }),
        onSubmit: values =>{
            console.log(values)
        }

    })


  return (
    <div>
        <form onSubmit={formik.handleSubmit}>

            <label htmlFor="">name</label>    
            <div>
                <input 
                    type="text"
                    name='name'
                    id='name'
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    />
                    {formik.errors.name && <p>{formik.errors.name}</p>}
            </div>

            <label htmlFor="">description</label>
            <div>
                <textarea
                    type="text"
                    name='description'
                    id='description'
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    />
                    {formik.errors.description && <p>{formik.errors.description}</p>}
            </div>

            <label htmlFor="">price</label>
            <div>
                <input 
                    type="text"
                    name='price'
                    id='price'
                    onChange={formik.handleChange}
                    value={formik.values.price}
                    />
                    {formik.errors.price && <p>{formik.errors.price}</p>}
            </div>

            <label htmlFor="">image</label>
            <div>
                <input 
                    type="text"
                    name='image'
                    id='image'
                    onChange={formik.handleChange}
                    value={formik.values.image}
                    />
                    {formik.errors.image && <p>{formik.errors.image}</p>}
            </div>
        </form>
    </div>
  )
}

export default Form