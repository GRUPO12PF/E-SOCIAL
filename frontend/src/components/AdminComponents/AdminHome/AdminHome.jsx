import React from 'react'
import NavBar from '../../CommonComponents/NavBar/NavBar'
import s from './AdminHome.module.css'
import {Link} from 'react-router-dom'

function AdminHome() {
  return (
    <div>
        <NavBar/>
      <div className={s.AdCont}>
      <Link to="/admin/users" className={s.linked}>TODOS LOS USUARIOS</Link>
      <Link to="/admin/allOrders" className={s.linked}>TODOS LAS ÓRDENES DE COMPRA</Link>
      <Link to="/admin/allReviews" className={s.linked}>TODOS LAS OPINIONES</Link>
      </div>
    </div>
  )
}

export default AdminHome