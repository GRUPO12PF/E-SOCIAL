import React, { useRef, useState } from 'react'
import {Formik,Form,Field,ErrorMessage}from 'formik'
import emailjs from '@emailjs/browser'

const ConfirmationEmail = () => {
    const [formEnv,setForm]=useState(false)
    
    const form = useRef();
     return (
    <div className='form-f'>
    <h2 className='contact' id='contacts'>Contact</h2>
   
   <Formik
    initialValues={{
        name:'',
        email:'',
    }}
    validate={(valores)=>{
        let errors={}

            if(!valores.name){
                errors.name = 'required field'
            }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)){
                errors.name = 'name only'
            }
            if(!valores.email){
                errors.email = 'required field'
            }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
                errors.email = 'email only'
            }

        return errors;
    }}
    onSubmit={(values,{resetForm})=>{
            emailjs.sendForm('service_fawk32l', 'template_gcvl3re', form.current, 'g-ZSRPwlx9NA1IFaD')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            resetForm()
        setForm(true)
        setTimeout(()=> setForm(false),5000)
    }}
   >
    {({errors})=>(<Form ref={form}   action=""  >
        <label htmlFor="">Name</label>
        <div>
            <Field 
                type="text" 
                name="name" 
                id="name" 
                 />
               <ErrorMessage name='name' component={()=>(<p className='errors'>{errors.name}</p>)}/>
        </div>

        <label htmlFor="">Email</label>
        <div>
            <Field
                type="email" 
                name="email" 
                id="email" 
            
                 />
                 
                 <ErrorMessage name='email' component={()=>(<p className='errors'>{errors.email}</p>)}/>
        </div>
       
    <button type="submit">Send Message</button>
    {formEnv && <p className='send'>enviado correctamente ✔</p>}
    </Form>)}
    </Formik> 

    
</div>
    )
}  

export default ConfirmationEmail