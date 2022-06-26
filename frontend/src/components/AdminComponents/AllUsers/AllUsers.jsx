import React, { useEffect } from 'react'
import { getAllUsers } from '../../../redux/actions/actionAdmin'
import { useDispatch, useSelector } from 'react-redux'
import { cleanData, getBooks } from '../../../redux/actions/actionBooks'
import NavBar from '../../CommonComponents/NavBar/NavBar'
import profile from '../../../assets/images/avatar2.png'
import Pagination from '../../CommonComponents/Pagination/Pagination'
import s from './AllUsers.module.css'
import Remove from '../../../Iconos/remove'
import Edit from '../../../Iconos/Edit'


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


      <table class="listado">
			<thead>
				<tr>
                <th >NOMBRE</th>
                <th >IMAGEN</th>
                <th >VERIFICADO</th>
                <th >BLOQUEADO</th>
                <th >MODERADOR</th>
					<th colspan="2">OPCIONES</th>
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
                    <td ><img className="image-e" src={u.image.url || profile} alt="No disponible" /></td>
                    <td className={s.verified}>{u.verified}</td>
                    <td className={s.blocked}>{u.blocked}</td>
                    <td className={s.moderator}>{u.moderator}</td>
                    <td className={s.actions}>
                      <button
                        onClick={(e) => handleEdit(e, u.id)}
                        className="btn-edita"
                      >
                        <Edit/>
                      </button>

                        <button
                          onClick={(e) => handleDelete(e, u.id)}
                          // className={s.deleteBtn}
                        >
                          <Remove/>
                        </button>
                    
                    </td>
                  </tr>
                )
              })}
            
				{/* <tr>
					<td>U001</td>
					<td>Juan Carlos Merlos</td>
					<td>Activo</td>
					<td class="icono"><a href="#"><span class="fa fa-pencil-square-o fa-2x"></span></a></td>	
					<td class="icono"><a href="#"><span class="fa fa-trash fa-2x"></span></a></td>	
				</tr>
				<tr>
					<td>U002</td>
					<td>Ana Mirna Contreras</td>
					<td>Activo</td>
					<td class="icono"><a href="#"><span class="fa fa-pencil-square-o fa-2x"></span></a></td>	
					<td class="icono"><a href="#"><span class="fa fa-trash fa-2x"></span></a></td>	
				</tr>
				<tr>
					<td>U003</td>
					<td>Luc&iacute;a del Carmen Aguilar</td>
					<td>Inactivo</td>
					<td class="icono"><a href="#"><span class="fa fa-pencil-square-o fa-2x"></span></a></td>	
					<td class="icono"><a href="#"><span class="fa fa-trash fa-2x"></span></a></td>		
				</tr>
				<tr>
					<td>U004</td>
					<td>Luis Francisco Dur&aacute;n</td>
					<td>Activo</td>
					<td class="icono"><a href="#"><span class="fa fa-pencil-square-o fa-2x"></span></a></td>	
					<td class="icono"><a href="#"><span class="fa fa-trash fa-2x"></span></a></td>		
				</tr>
				<tr>
					<td>U005</td>
					<td>Ileana Carolina Fuentes</td>
					<td>Activo</td>
					<td class="icono"><a href="#"><span class="fa fa-pencil-square-o fa-2x"></span></a></td>	
					<td class="icono"><a href="#"><span class="fa fa-trash fa-2x"></span></a></td>		
				</tr> */}
			</tbody>
		</table>






        {/* <div className={s.flex}>
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
        </div> */}
      </div>
      <Pagination />
    </div>
  )
}

export default AllUsers
