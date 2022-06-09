import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { autenticarUser } from '../../redux/actions/actionUser';
//import s from './Homeout.module.css';


Modal.setAppElement('#root');

export default function Homeout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    let usuarioA = dispatch(autenticarUser(config));
    usuarioA ? navigate('/home') : null;
  }, []);
console.log('prueba')
  return (
    <div>
      {/* <img className={s.image} src={image} alt='' /> */}
      <div>
        <Link to='/login'>
          <button>LOGIN</button>
        </Link>
        <Link to='/registrar'>
          <button>REGISTER</button>
        </Link>
      </div>
    </div>
  );
}
