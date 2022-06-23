import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { usuarioCreated, usuarioProfile } from '../../../redux/actions/actionCreatedUser'
import { getReview } from '../../../redux/actions/actionOrder'
import NavBar from '../NavBar/NavBar'
import PaginadoUser from './PaginadoUser'
import ProfileBook from './ProfileBooks'
import ProfileReview from './ProfileReview'
import s from './ProfileUsers.module.css'

const ProfileUsers = () => {
  const { id } = useParams()
  console.log(id)

  const dispatch = useDispatch()


  const user = useSelector(state => state.usuarioProfile)
  const book = useSelector(state => state.booksCreated)
  const review = useSelector(state => state.review)
 
  console.log(review)
  
  useEffect(() => {
    dispatch(usuarioCreated(id))
    dispatch(usuarioProfile(id))
    dispatch(getReview(id))
  }, [dispatch])
  
  
  
    const [, setOrden] = useState('false');
    const [pageCurrent, setPageCurrent] = useState(1);
    const [pageSize,] = useState(1);
    const indexOfLastVideogame = pageCurrent * pageSize;
    const indexOfFirstVideogame = indexOfLastVideogame - pageSize;
    const curr = book.slice(indexOfFirstVideogame, indexOfLastVideogame);


    const page = (pageNumber) => {
        setPageCurrent(pageNumber)
    }
    const goToNextPage = () => setPageCurrent(pageCurrent + 1);
    const goToPreviousPage = () => {
        if (pageCurrent > 1) setPageCurrent(pageCurrent - 1)
    }





  return (
    <>
    
<NavBar/>
<div className="portfoliocard">
		<div className="coverphoto"></div>
		<div className="profile_picture"><img className="imageR"src={user.image?.url} alt="" /></div>
		<div className="left_col">
			<div className="followers">
				<div className="follow_count">18,541</div>
				Followers
			</div>
			<div className="following">
				<div className="follow_count">181</div>
				Following
			</div>
		</div>
		<div className="right_col">
			<h2 className="name">{user.nombre}</h2>
			<h3 className="location">San Francisco, CA</h3>
       <p>{user.email}</p>
      <div>
          {
            review?.map((i,u)=>{
              return(
                <ProfileReview 
                  key={u}
                  description={i.description}
                  score={i.score}
                  title={i.title}
                />
              )
            })
          }
      </div>
		</div>
    
		</div>

    <div >
        <div>
          {curr?.map(e => {
            return (
              <ProfileBook
                nombre={e.nombre}
                autor={e.autor}
                image={e.image}
              />
            )
          })}
        </div>
        <PaginadoUser
                    pageSize={pageSize}
                    allVideogames={book.length}
                    page={page}
                    goToNextPage={goToNextPage}
                    goToPreviousPage={goToPreviousPage}
                />
		</div>
  
</>

    


  
      
  )
}


export default ProfileUsers