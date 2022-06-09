import React from 'react';
import { Link } from 'react-router-dom';
import { cambiarImagen, usuarioActual } from '../../redux/actions/actionUser';
import { useDispatch, useSelector } from 'react-redux';
import profile from '../../assets/images/avatar.png';

export default function Settings() {
  const dispatch = useDispatch();
  const usuarioAct = useSelector((state) => state.usuarioActual);

  useDispatch(() => {
    dispatch(usuarioActual());
  }),[dispatch];

  function handleFileImage(image) {
    dispatch(cambiarImagen(image));
  }

  return (
    <div>
      <div>
      <div>
            <label>Imagen</label>
            <br></br>
            <input
              onChange={(e) => handleFileImage(e.target.files[0])}
              type='file'
              name='imageFile'
              accept='image/jpeg, image/png'
              autoComplete='off' />
            <br></br>
            <span>Extenciones Soportadas: jpg, png, webp o gif</span>
            <br></br>
            <img src={usuarioAct.image ? usuarioAct.image : profile} alt='No Img' />
          </div>
        <div>
          <Link to='/update-password'>
            <button>Change password</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
