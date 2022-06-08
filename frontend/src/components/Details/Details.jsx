import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import { detailsBook } from '../../redux/actions/detailsBooks'

const Details = () => {
  const {id} = useParams()
    const dispatch = useDispatch()
    const detail =  useSelector(state => state.detail)
  console.log(detail)

    useEffect(() => {
      
    dispatch(detailsBook(id))
     
    }, [id])
    
  return (
    <div>
     <p> Details</p>
     {detail.image}

    </div>
  )
}

export default Details