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
    <>
      <h1 className={s.titleForm}>{addMode ? 'ANUNCIAR LIBRO' : `EDITAR LIBRO`}</h1>
      <div className={s.contenedorBook}>
        {
          addMode
            ? null
            : (
              <div className={s.cardBook}>
                <img src={image} alt='portada anterior' className={s.imgBook} />
                <p className={s.precioBook}> {priceShow}</p>

                {
                  descripcion?.length > 100
                    ? (<button className={s.btnBook} onClick={() => setVerMas(!verMas)}>
                      {verMas ? ". . ." : "VER DESC"}
                    </button>
                    )
                    : null
                    }
                {
                verMas
                  ? <p className={s.textBook}>{descripcion}</p>
                  : <p className={s.textBook}>{descripcion?.substring(0, 100)}</p>
                  }

              </div>)
        }
      </div >
    </>
  )
}
export default EditCard
