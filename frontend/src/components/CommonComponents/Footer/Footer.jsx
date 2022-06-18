import React from 'react'
import image from '../../../assets/images/github.svg'
import s from './Footer.module.css'
function Footer() {
  return (

          <div className={s.footer}>
        
        
          <div className={s.leyenda}>
            &copy;{new Date().getFullYear()} E-SOCIAL INC | All rights reserved |
            Terms Of Service | Privacy
          </div>
              </div>
   
  );
}

export default Footer;