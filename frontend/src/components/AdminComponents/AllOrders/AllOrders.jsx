import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../../CommonComponents/NavBar/NavBar'
import Footer from '../../CommonComponents/Footer/Footer'
import { getAllOrders } from '../../../redux/actions/actionAdmin';
import profile from '../../../assets/images/avatar2.png'
import s from './AllOrders.module.css'


function AllOrders() {
  const dispatch = useDispatch();
  const allOrders = useSelector(state => state.allOrders);
  console.log(allOrders)
  useEffect(() => {
    dispatch(getAllOrders())
  }, []);
  return (

    <div>
      <NavBar />
     <div className={s.container}>
                <div className={s.flex}>
                    <table className={s.usersTable}>
                        <thead>
                            <tr>
                                <th className={s.no}>Id</th>
                                <th className={s.no}>Name book</th>
                                <th className={s.no}>Image book</th>
                                <th className={s.no}>Price book</th>
                                <th className={s.no}>Name buyer</th>
                                <th className={s.no}>Email buyer</th>
                                <th className={s.no}>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allOrders?.map((u,i) => {
                                return (
                                    <tr
                                    key={i}
                                        className={s.containerInfo}
                                    >
                                        <td className={s.id}>{u._id}</td>
                                        <td className={s.name}>{u.books?.nombre}</td>
                                        <td className={s.image}><img src={u.books?.image || profile} alt="Not Available" height={50} width={50} /></td>
                                        <td className={s.price}>{u.books?.price}</td>
                                        <td className={s.blocked}>{u.comprador?.nombre}</td>
                                        <td className={s.moderator}>{u.comprador?.email}</td>
                                        <td className={s.moderator}>{u.comprador?.updatedAt}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div> 
    </div>
  )
}

export default AllOrders