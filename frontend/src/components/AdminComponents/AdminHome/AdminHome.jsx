import React from 'react'
import NavBar from '../../CommonComponents/NavBar/NavBar'
import s from './AdminHome.module.css'
import {Link} from 'react-router-dom'

function AdminHome() {
  return (
    <div>
        <NavBar/>
      <div className={s.AdCont}>
      <Link to="/admin/users" className={s.linked}>ALL USERS </Link>
      <Link to="/admin/allOrders" className={s.linked}> ALL ORDERS </Link>
      </div>
    </div>
  )
}

export default AdminHome