import React from 'react'
import s from './Footer.module.css'
import GitHub from '../../../Iconos/GitHub';
function Footer() {
  return (
          <div className={s.footer}>
           <a href='https://github.com/GRUPO12PF/E-SOCIAL' >
        <GitHub/>
        </a>
          <p className={s.footerDos} >
            &copy;{new Date().getFullYear()} E-SOCIAL INC | All rights reserved |
            Terms Of Service | Privacy
        
            </p>
              </div>
  );
}

export default Footer;