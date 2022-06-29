import React from 'react';
import { cambiarImagen } from '../../../redux/actions/actionUser';
import { useDispatch } from 'react-redux';
import s from './Profile.module.css';
export default function ProfileImage({ closeModalImage }) {
  const dispatch = useDispatch()

  function handleImage(image) {
    dispatch(cambiarImagen(image))
    window.location.reload()
  }

  return (
    <div className={s.containerGeneral}>
      <div className={s.containerImagen}>
        <button  onClick={closeModalImage}  >X</button>
        <div className='contFile'>
          <label  className={s.input} htmlFor='mifile'>
          </label>
          <input 
            type='file'
            name='image'
            className={s.input}
            id='mifile'
            onChange={(e) => handleImage(e.target.files[0])}
          />
        </div>
      </div>
    </div>
  )
}
