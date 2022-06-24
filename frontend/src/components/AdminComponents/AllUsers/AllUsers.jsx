import React, { useEffect } from 'react'
import { getAllUsers } from '../../../redux/actions/actionAdmin'
import { useDispatch, useSelector } from 'react-redux'
import { cleanData, getBooks } from '../../../redux/actions/actionBooks'
import NavBar from '../../CommonComponents/NavBar/NavBar'
import profile from '../../../assets/images/avatar2.png'
import Pagination from '../../CommonComponents/Pagination/Pagination'
import s from './AllUsers.module.css'

function AllUsers() {
  const dispatch = useDispatch()
  const allUsers = useSelector(state => state.allUsuarios)

  useEffect(() => {
    dispatch(getAllUsers())
    dispatch(getBooks())
    return () => {
      dispatch(cleanData())
    }
  }, [])
  const toggleEditInfo = () => {
    setEditInfo(!editInfo)
  }

  const handleEdit = (e, id) => {
    e.preventDefault()
    console.log("id es ", id)
    toggleEditInfo()
    setCurrentUser(id)
  }

  const handleDelete = (e, id) => {
    e.preventDefault()
    if (
      window.confirm("¿Esta seguro que quiere eliminar este usuario?") === true
    ) {
      dispatch(deleteUser(id))
      alert("Usuario eliminado correctamente.")
      window.location.reload()
    }
  }
  return (
    <div>
      <NavBar />

      <div className={s.container}>
        <div className={s.flex}>
          <table className={s.usersTable}>
            <thead>
              <tr>
                <th className={s.no}>ID</th>
                <th className={s.no}>NOMBRE</th>
                <th className={s.no}>IMAGEN</th>
                <th className={s.no}>VERIFICADO</th>
                <th className={s.no}>BLOQUEADO</th>
                <th className={s.no}>MODERADOR</th>
              </tr>
            </thead>
            <tbody>
              {allUsers?.map((u, i) => {
                return (
                  <tr
                    key={i}
                    className={s.containerInfo}
                  >
                    <td className={s.id}>{u.id}</td>
                    <td className={s.name}>{u.name}</td>
                    <td className={s.image}><img src={u.image.url || profile} alt="No disponible" height={50} width={50} /></td>
                    <td className={s.verified}>{u.verified}</td>
                    <td className={s.blocked}>{u.blocked}</td>
                    <td className={s.moderator}>{u.moderator}</td>
                    <td className={s.actions}>
                      <button
                        onClick={(e) => handleEdit(e, u.id)}
                        className={s.editBtn}
                      >
                        EDITAR
                      </button>
                      {u.moderador === "admin" && (
                        <button
                          onClick={(e) => handleDelete(e, u.id)}
                          className={s.deleteBtn}
                        >
                          ELIMINAR
                        </button>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination />
    </div>
  )
}

export default AllUsers
