import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { usuarioCreated, usuarioProfile } from '../../../redux/actions/actionCreatedUser'
import NavBar from '../NavBar/NavBar'
import ProfileBook from './ProfileBooks'
import s from './ProfileUsers.module.css'

const ProfileUsers = () => {
  const { id } = useParams()
  console.log(id)

  const dispatch = useDispatch()


  const book = useSelector(state => state.booksCreated)
  const user = useSelector(state => state.usuarioProfile)
  console.log(book)
  console.log(user)

  useEffect(() => {
    dispatch(usuarioCreated(id))
    dispatch(usuarioProfile(id))
  }, [dispatch])



  return (
    <div>
      <NavBar/>
      <p>{user.nombre}</p>
      <img className={s.imageR} src={user.image?.url} alt="" />

      <div className={s.contenedorGral}>
        <div className={s.contenedorBooks}>
          {book.map(e => {
            return (
              <ProfileBook

                nombre={e.nombre}
                autor={e.autor}
                image={e.image}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}


export default ProfileUsers