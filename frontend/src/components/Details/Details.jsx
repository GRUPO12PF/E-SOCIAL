import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'

const Details = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const detail =  useSelector(state => state)

    useEffect(() => {
      
    dispatch()
     
    }, [])
    
  return (
    <div>Details</div>
  )
}

export default Details