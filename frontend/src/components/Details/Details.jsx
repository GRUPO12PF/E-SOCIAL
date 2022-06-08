import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from "react-router";
import {useParams} from 'react-router-dom'
import { detailsBook } from '../../redux/actions/detailsBooks'

const Details = () => {
    const token = localStorage.getItem("token");
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const detail =  useSelector((state) => state.detail)
    console.log(detail)

    useEffect(() => {
      dispatch(detailsBook(id))
    }, [dispatch])
 
    if (!token) {
      navigate("/");
    }
  
  return (
    <div>
     <p> Details</p>
     {detail.image}

    </div>
  )
}

export default Details