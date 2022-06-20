import React from 'react'
import image from '../../../assets/images/github.svg'
import s from './Footer.module.css'
function Footer() {
  return (
          <div className={s.footer}>
        <hr />
        
         <a
            href="https://github.com/GRUPO12PF/E-SOCIAL"
          >
              <img width='1%' height='1%'
              src="https://img.icons8.com/ios-glyphs/344/github.png"
              alt="Png Github Icon"
            />  
          </a> 
        
        
          <div className={s.leyenda}>
          <p className="col-sm">
            &copy;{new Date().getFullYear()} E-SOCIAL INC | All rights reserved |
            Terms Of Service | Privacy
            </p>
          </div>
              </div>
  );
}

export default Footer;