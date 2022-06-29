import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { detailsBook } from "../../../../redux/actions/detailsBooks"
import { formatToCurrency } from "../../../../utils/helperFunctions"
import s from '../Form.module.css'

const EditCard = ({ id, addMode }) => {
  const dispatch = useDispatch()
  const { nombre, descripcion, price, image } = useSelector(state => state.detail)
  
  const priceShow = formatToCurrency(price)

  const [verMas, setVerMas] = useState(false)

  useEffect(() => {
    if (!addMode) { dispatch(detailsBook(id)) }
  }, [])

  return (
    <div className={s.contenedorBook}>
      <h1 className={s.titleForm}>{addMode ? 'Anunciar Producto' : `Editar tu libro`}</h1>
      {
        addMode
          ? null
          : (
            <div className={s.cardBook}>
              <img src={image} alt='portada anterior' className={s.imgBook}/>
              <p className={s.precioBook}> {priceShow}</p>
              

              <button  className={s.btnBook} onClick={() => setVerMas(!verMas)}>
                {verMas ? "Ver menos" : "Ver más"}
              </button>
              <br />

              {!verMas
                ? `Desc: ${descripcion?.substring(0, 100)}...`
                : <p  className={s.textBook}>Desc: {descripcion}</p>}
              <br />
            </div>)
      }
    </div >
  )
}
export default EditCard
