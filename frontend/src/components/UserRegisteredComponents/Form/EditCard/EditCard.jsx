import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { detailsBook } from "../../../../redux/actions/detailsBooks"
import { formatToCurrency } from "../../../../utils/helperFunctions"

const EditCard = ({ id, addMode }) => {
  const dispatch = useDispatch()
  const { nombre, autor, idioma, editorial, edicion, tapa, publicado, cant_pags, descripcion, price, image, colection, ilustrado, category } = useSelector(state => state.detail)
  
  const priceShow = formatToCurrency(price)

  const [verMas, setVerMas] = useState(false)

  useEffect(() => {
    if (!addMode) { dispatch(detailsBook(id)) }
  }, [])

  return (
    <div>
      <h1>{addMode ? 'Anunciar Producto' : `Editar: ${nombre}`}</h1>
      {
        addMode
          ? null
          : (
            <div>
              <p>{nombre}, {autor}, {idioma}, {category}</p><br />
              {image}<br />
              {priceShow}<br />

              <button onClick={() => setVerMas(!verMas)}>
                {verMas ? "Ver menos" : "Ver más"}
              </button>
              <br />

              {!verMas
                ? `${descripcion?.substring(0, 100)}...`
                : <p>{descripcion}, {editorial}, {edicion}, {tapa}, {publicado}, {cant_pags}, {colection}, {ilustrado}</p>}
              <br />
            </div>)
      }
    </div >
  )
}
export default EditCard
