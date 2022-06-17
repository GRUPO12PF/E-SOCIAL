import React from 'react'
import image from '../../../assets/images/github.svg'
function Footer() {
  return (

          <div className="col">
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} E-SOCIAL INC | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
   
  );
}

export default Footer;