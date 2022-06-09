import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import ForgotPassword from './components/ForgotPassword/ForgotPassword'
import NewPassword from './components/NewPassword/NewPassword'
import ConfirmAccount from './components/ConfirmAccount/ConfirmAccount'
import VerificationUser from './components/VerificationUser/VerificationUser'
import Home from './components/Home/Home'
import UpdatePassword from './components/UpdatePassword/UpdatePassword'
import Forms from './components/Form/Forms'
import Details from './components/Details/Details'
import Settings from './components/Settings/Settings'
import About from './components/About/About'
import Homeout from './components/Homeout/Homeout'
import NotFound from './components/NotFound/NotFound'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBooks } from './redux/actions/actionBooks'

function App() {
  const dispatch = useDispatch()
  const allBooks = useSelector(state => state.books)

  useEffect(() => {
    if(!allBooks)
    dispatch(getBooks())
  })

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='registrar' element={<Register />} />
        <Route path='olvide-password' element={<ForgotPassword />} />
        <Route path='olvide-password/:token' element={<NewPassword />} />
        <Route path='confirmar/:id' element={<ConfirmAccount />} />
        <Route path='/update-password' element={<UpdatePassword />} />
        <Route path='/create' element={<Forms />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/homeout' element={<Homeout />} />

        <Route path='/create' element={<Forms />} />
        <Route path='/about' element={<About />} />
        <Route path='/home' element={<VerificationUser />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='/home/usuario/setting' element={<VerificationUser />}>
          <Route index element={<Settings />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
