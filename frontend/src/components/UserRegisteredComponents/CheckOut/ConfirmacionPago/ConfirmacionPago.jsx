
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ConfirmacionPago = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_fawk32l', 'template_ldua3d9', form.current, 'g-ZSRPwlx9NA1IFaD')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <input type="submit" value="Send" />
      </form>
    );
  };

export default ConfirmacionPago