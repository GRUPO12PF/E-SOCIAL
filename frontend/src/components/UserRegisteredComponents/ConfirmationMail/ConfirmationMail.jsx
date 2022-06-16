import React, { useRef }  from 'react'
import emailjs from '@emailjs/browser'


export const ConfirmationMail = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_fawk32l', 'template_gcvl3re', form.current, 'g-ZSRPwlx9NA1IFaD')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <form onSubmit={sendEmail} ref={form}>

            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="email" />
           
            <button type="submit">
                Enviar confirmación! 
            </button>
        </form>
    );
  };

export default ConfirmationMail



//  | checkout | -> | pasarela de pago | -> | confirmacion |