import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { pagination,getTotalBooks } from '../../redux/actions/actionBooks'
import s from './Pagination.module.css'




export default function Pagination({ }) {
  const dispatch = useDispatch()
  const allBooks = useSelector(state => state.countBooks)

  useEffect(() => {
    dispatch(getTotalBooks())
  }, [dispatch])


  const pageNumber = []


  for (let i = 0; i < Math.ceil(allBooks / 3); i++) {
    pageNumber.push(i + 1)
  }
  

  const handlePaginated = (number) => {
    dispatch(pagination(number))
  }




  return (
    <div className={s.pagination}>
            <ul>
                {pageNumber.length > 1 &&
                    pageNumber.map(number => (
                        <li className={s.number} key={number}>
                            <button key={number} onClick={() => handlePaginated(number)}>{number}</button>
                        </li>
                    ))}
            </ul>
    </div>
  )
}