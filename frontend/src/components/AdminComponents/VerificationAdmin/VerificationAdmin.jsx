import { useEffect } from "react"
import { useDispatch} from "react-redux"
import { Outlet, Navigate } from "react-router-dom"
import { autenticarUser } from "../../../redux/actions/actionUser.js"
import { isAdmin } from "../../../redux/actions/actionIsAdmin.js"

export default function VerificationAdmin() {
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  useEffect(() => {
    if (!token) {
      return
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
    dispatch(isAdmin(config))
  }, [])
  if (!token) "No eres admin pillin >.< "

  return <>{token ? <Outlet /> : <Navigate to="/" />}</>
}