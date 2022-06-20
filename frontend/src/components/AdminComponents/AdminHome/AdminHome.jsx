import React from 'react'
import NavBar from '../../CommonComponents/NavBar/NavBar'

import Footer from '../../CommonComponents/Footer/Footer'
import {Link} from 'react-router-dom'

function AdminHome() {
  return (
    <div>
        <NavBar/>
      <Link to="/admin/users">ALL USERS </Link>
      <Link to="/admin/allOrders"> ALL ORDERS </Link>
        <Footer/>
    </div>
  )
}

export default AdminHome