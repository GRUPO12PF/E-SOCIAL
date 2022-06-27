import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { detailsBook } from "../../../../redux/actions/detailsBooks"
import { formatToCurrency } from "../../../../utils/helperFunctions"
import s from '../Form.module.css'

const EditCard = ({ id, isCreate }) => {
  const dispatch = useDispatch()
  const { nombre, descripcion, price, image } = useSelector(state => state.detail)

  const priceShow = formatToCurrency(price)

  const [verMas, setVerMas] = useState(false)

  useEffect(() => {
    if (!isCreate) { dispatch(detailsBook(id)) }
  }, [])

  return (
    <div>
      <h1>{isCreate ? 'Anunciar Producto' : `Editar: ${nombre}`}</h1>
      {
        isCreate
          ? null
          : (
            <div className={s.centro}>
              <img src={image}
                alt='portada anterior'
                style={{ maxWidth: "300px" }} />
              {priceShow}<br />

              <button onClick={() => setVerMas(!verMas)}>
                {verMas ? "Ver menos" : "Ver más"}
              </button>
              <br />

              {!verMas
                ? `Desc: ${descripcion?.substring(0, 100)}...`
                : <p>Desc: {descripcion}</p>}
              <br />
            </div>)
      }
    </div >
  )
}
export default EditCard
