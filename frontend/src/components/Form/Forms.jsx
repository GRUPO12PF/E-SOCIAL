import React, { useRef, useState,useEffect } from 'react'
import {Formik,Field, ErrorMessage,Form} from 'formik'
import {Link,useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { postCreate } from '../../redux/actions/postProducts';

const Forms = () => {
    let navigate=useNavigate()
    const dispatch = useDispatch()

    
    
    const form = useRef();
     return (
    <div>
        

   <Link to="/home">Back</Link>
   <Formik
    initialValues={{
        name:'',
        description:'',
        price:'',
        image:'',
        ranking:'',
        colection:''

    }}
    validate={(valores)=>{
        let errors={}

            if(!valores.name){
                errors.name = 'required field'
            }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)){
                errors.name = 'name only'
            }
            if(!valores.description){
                errors.description = 'required field'
            }else if(!valores.price){
                errors.price ='required'
            }else if(!valores.image){
                errors.image = 'required field'
            }else if(!valores.ranking){
                errors.ranking = 'required field'
            }else if(!valores.colection){
                errors.colection = 'required field'
            }
            
            

        return errors;
    }}
    onSubmit={(values,{resetForm}) =>{
        console.log(values)
          dispatch(postCreate(values))
            resetForm()
        navigate('/home')
    }}
   >
        
    {({errors})=>(<Form ref={form}  action=""  >

       

        <label htmlFor="">Name</label>
        <div>
            <Field 
                type="text" 
                name="name" 
                id="name" 
                 />
               <ErrorMessage name='name' component={()=>(<p>{errors.name}</p>)}/>
        </div>
        <label htmlFor="">Colection</label>
        <div>
            <Field 
                type="text" 
                name="colection" 
                id="colection" 
                 />
               <ErrorMessage name='colection' component={()=>(<p>{errors.colection}</p>)}/>
        </div>

        <label htmlFor="">Price</label>
        <div>
            <Field
                type= "text"
                name= "price"
                  id= "price"        
                 />
                 
                 <ErrorMessage name='price' component={()=>(<p >{errors.price}</p>)}/>
        </div>
        <label htmlFor="">Description</label>
        <div>
            <Field 
                    type="text" 
                    name="description" 
                    id="description" 
                    as="textarea"
                     />
                     <ErrorMessage name='description' component={()=>(<p>{errors.description}</p>)}/>
               
        </div>
        <label htmlFor="">Image</label>
        <div>
            <Field 
                    type="text" 
                    name="image" 
                    id="image" 
                    as="textarea"
                     />
                     <ErrorMessage name='image' component={()=>(<p>{errors.image}</p>)}/>
               
        </div>
        <label htmlFor="">Ranking</label>
        <div>
            <Field 
                    type="range" 
                    name="ranking" 
                    id="ranking" 
                    
                     />
                     <ErrorMessage name='ranking' component={()=>(<p>{errors.ranking}</p>)}/>
               
        </div>
    <button type="submit">Send Message</button>
  
    </Form>)}
    </Formik> 

   
</div>
    )
}

export default Forms