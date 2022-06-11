import React from 'react';
import { Link } from 'react-router-dom';
import image from "../../assets/images/image1.jpg";
import s from './LandingPage.module.css';

function LandingPage() {
  return (
      <div className={s.container} >
        <img className={s.image} src={image} alt='' />
          <div className={s.inicio}>
              <h1 className={s.title}>Welcome</h1>
              <div className={s.link}>
                  <Link to='/homeout'>
                      <button className={s.btn}>📚 📖 Click here to get started 📖 📚 </button>
                  </Link>
              </div>
          </div>
      </div>
  )
}

export default LandingPage;