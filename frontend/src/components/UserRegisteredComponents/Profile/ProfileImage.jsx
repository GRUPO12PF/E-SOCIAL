import React from 'react';
import { cambiarImagen } from '../../../redux/actions/actionUser';
import { useDispatch } from 'react-redux';

export default function ProfileImage({ closeModalImage }) {
  const dispatch = useDispatch()

  function handleImage(image) {
    dispatch(cambiarImagen(image))
    window.location.reload()
  }

  return (
    <div >
      <div>
        <button onClick={closeModalImage}  >X</button>
        <div className='contFile'>
          <label className='labelmiinput' htmlFor='mifile'>
          </label>
          <input
            type='file'
            name='image'
            className='file'
            id='mifile'
            onChange={(e) => handleImage(e.target.files[0])}
          />
        </div>
      </div>
    </div>
  )
}
