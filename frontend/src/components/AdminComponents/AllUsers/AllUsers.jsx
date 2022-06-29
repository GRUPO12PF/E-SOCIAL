import React, { useEffect } from 'react'
import { getAllUsers, deleteUser } from '../../../redux/actions/actionAdmin'
import { useDispatch, useSelector } from 'react-redux'
import { cleanData, getBooks } from '../../../redux/actions/actionBooks'
import { Link } from 'react-router-dom'
import NavBar from '../../CommonComponents/NavBar/NavBar'
import profile from '../../../assets/images/avatar2.png'
import Pagination from '../../CommonComponents/Pagination/Pagination'
import s from './AllUsers.module.css'
import Remove from '../../../Iconos/Remove.jsx'
import Edit from '../../../Iconos/Edit.jsx'
import { isAdmin } from '../../../redux/actions/actionIsAdmin'



function AllUsers() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsuarios);
  const userActu = useSelector((state) => state.usuarioActual);
  const adminState = useSelector((state) => state.isAdmin);

  console.log("soy el usuario actuaaaaal", adminState);

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getBooks());
    dispatch(isAdmin());
    return () => {
      dispatch(cleanData());
    };
  }, []);
  const toggleEditInfo = () => {
    setEditInfo(!editInfo);
  };

  const handleEdit = (e, id) => {
    e.preventDefault();
    console.log("id es ", id);
    toggleEditInfo();
    setCurrentUser(id);
  };

  const handleDelete = async (e, id) => {
    e.preventDefault();
    if (userActu._id === id) {
      alert("No puedes eliminarte a ti mismo");
    } else {
      if (
        window.confirm("¿Esta seguro que quiere eliminar este usuario?") ===
        true
      ) {
        dispatch(deleteUser(id));
        alert("Usuario eliminado correctamente.");

        window.location.reload();
      }
    }
  };
  return (
    <div>
      <NavBar />

      {adminState ? (
        <div>
          <Link to="/Admin">
                    <button className="btnAtras">Atrás</button>
                  </Link>
          <div className={s.container}>
            <table class="listado">
              <thead className="tituloTabla">
                <tr>
                  <th>NOMBRE</th>
                  <th>IMAGEN</th>
                  <th>VERIFICADO</th>
                  <th>BLOQUEADO</th>
                  <th>MODERADOR</th>
                  <th colspan="2">OPCIONES</th>
                </tr>
              </thead>
              <tbody>
                {allUsers?.map((u, i) => {
                  return (
                    <tr key={i} className={s.containerInfo}>
                      <td className={s.id}>{u.id}</td>
                      <td className={s.name}>{u.name}</td>
                      <td>
                        <img
                          className="image-e"
                          src={u.image.url || profile}
                          alt="No disponible"
                        />
                      </td>
                      <td className={s.verified}>{u.verified}</td>
                      <td className={s.blocked}>{u.blocked}</td>
                      <td className={s.moderator}>{u.moderator}</td>
                      <td className={s.actions}>
                        <button
                          onClick={(e) => handleEdit(e, u.id)}
                          className="btn-edita"
                        >
                          <Edit />
                        </button>

                        <button
                          onClick={(e) => handleDelete(e, u.id)}
                          // className={s.deleteBtn}
                        >
                          <Remove />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <Pagination />
        </div>
      ) : (
        <div>
          
          <h2>Cargando...</h2>
        </div>
      )}
    </div>
  );
}

export default AllUsers
