import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { detailsBook } from "../../../redux/actions/detailsBooks"
import NavBar from "../../CommonComponents/NavBar/NavBar"
import book from "../../../assets/images/book.svg"
import { formatToCurrency } from "../../../utils/helperFunctions"


const Details = () => {
  const [loading, setLoading] = useState(true)
  const token = localStorage.getItem("token")
  const { id } = useParams()
  const dispatch = useDispatch()
  const detail = useSelector((state) => state.detail)

  if (Object.keys(detail).length > 0 && loading) {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  useEffect(() => {
    dispatch(detailsBook(id))
  }, [dispatch])


  return (
    <>
      <NavBar />

      <div className="card">
        <div className="clip">

        </div>
        <div>
          <img src={detail.image || book} alt="not found" className="image" />
        </div>

        <div>
          <h3 className="pName">{detail.nombre}</h3>
          {formatToCurrency(detail.price)}

          <div className="description">

            <h5 className="h5">Saga / Serie</h5>
            {detail.colection}

            <h5 className="h5">Categoría</h5>
            {detail.category?.sort((a, b) => a.localeCompare(b)).join(', ')}

            <h5 className="h5">Descripción</h5>
            <p className="parra">
              {detail.descripcion}
            </p>

          </div>
          <div className="che">
            {
              token ?
                <Link to="/checkout">
                  <button className="btnn">COMPRAR</button>
                </Link>
                :
                <Link to="/registrar">
                  <button className="btnn">COMPRAR</button>
                </Link>
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default Details
