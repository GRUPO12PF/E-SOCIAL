import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router'
import { usuarioCreated } from '../../../redux/actions/actionCreatedUser'
import s from '../ProfileUsers/ProfileUsers.module.css'

const ProfileUsers = () => {
    const {id}= useParams()
    console.log(id)

    const dispatch = useDispatch()

    const book = useSelector(state => state.booksCreated)
    console.log(book)

    useEffect(() => {
        dispatch(usuarioCreated(id))
    }, [dispatch])
    

  return (
    <div>
        {/* <p>{book.creador.nombre}</p>
        <img className={s.imageR} src={book.creador.image.url} alt="" />
        <p>{book.creador.email}</p> */}
    </div>
  )
}

export default ProfileUsers