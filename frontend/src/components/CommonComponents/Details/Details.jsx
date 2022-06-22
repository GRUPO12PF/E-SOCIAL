import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { detailsBook } from "../../../redux/actions/detailsBooks"
import NavBar from "../../CommonComponents/NavBar/NavBar"
import book from "../../../assets/images/book.svg"
import { formatToCurrency } from "../../../utils/helperFunctions"
import { getQA, postQuestion } from "../../../redux/actions/actionQA"
import DetailsCard from "./DetailsCard/DetailsCard"

const Details = () => {
  const [loading, setLoading] = useState(true)
  const token = localStorage.getItem("token")
  const { id } = useParams()
  const dispatch = useDispatch()

  //--------------------------
  const detail = useSelector((state) => state.detail)
  const { nombre, autor, idioma, editorial, edicion, tapa, cant_pags, colection, image, price, descripcion, category, ilustrado, año_de_pub } = useSelector((state) => state.detail)

  const usuarioVendedor = detail.creador
  const idBook = detail._id

  const user = useSelector((state) => state.usuarioActual)
  const userComprador = user._id

  // console.log("id del libro", idBook, "id del comprador", userComprador, "id del vendedor", usuarioVendedor)
  const [input, setInput] = useState({
    mensaje: ''
  })
  //--------------------------

  if (Object.keys(detail).length > 0 && loading) {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  useEffect(() => {
    dispatch(detailsBook(id))
  }, [dispatch])

  const handleSubmitSendQuestion = async (e) => {
    e.preventDefault();
    setInput({
      mensaje: input.mensaje,
    })
    console.log("a ver qué te mando jeje", input)
    dispatch(postQuestion({
      mensaje: input.mensaje,
      idComprador: userComprador,
      book: idBook,
      idVendedor: usuarioVendedor
    }))
  }

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <NavBar />

      <div className="card-detalle">
        <div className="clip-detalle">

        </div>
        <div>
          <img src={image || book} alt="not found" className="image-detalle" />
        </div>

        <div>
          <h3 className="pName-detalle">{nombre}</h3>
          <div className="price-detalle">
            {formatToCurrency(price)}
          </div>

          <div className="description-detalle">

            <DetailsCard
              constant={autor}
              clase="h5-detalle"
              title='Autor'
            />

            <DetailsCard
              constant={idioma}
              clase="h5-detalle"
              title='Idioma'
            />

            <DetailsCard
              constant={editorial}
              clase="h5-detalle"
              title='Editorial'
            />

            <DetailsCard
              constant={edicion}
              clase="h5-detalle"
              title='Edición'
            />

            <DetailsCard
              constant={tapa}
              clase="h5-detalle"
              title='Tapa'
            />

            <DetailsCard
              constant={año_de_pub} // No me renderiza :C, no está cargando
              clase="h5-detalle"
              title='Año de publicación'
            />

            <DetailsCard
              constant={cant_pags}
              clase="h5-detalle"
              title='Páginas'
            />

            {ilustrado ?
              (<>
                <h5 className="h5-detalle">Ilustrado</h5> ✓
              </>)
              : (<>
                <h5 className="h5-detalle">Ilustrado</h5> X
              </>)
            }

            <DetailsCard
              constant={colection}
              clase="h5-detalle"
              title='Saga / Serie'
            />
            
            <DetailsCard
              constant={image}
              clase="h5-detalle"
              title='Fotografías del ejemplar'
            />

            <h5 className="h5-detalle">Categoría</h5>
            {category?.sort((a, b) => a.localeCompare(b)).join(', ')}

            <h5 className="h5-detalle">Descripción</h5>
            <p className="parra-detalle">
              {descripcion}
            </p>

          </div>
          <div className="che-detalle">
            {
              token ?
                <Link to="/checkout">
                  <button className="btnn-detalle">COMPRAR</button>
                </Link>
                :
                <Link to="/registrar">
                  <button className="btnn-detalle">COMPRAR</button>
                </Link>
            }
          </div>
        </div>
      </div>

      <div>

        <form onSubmit={(e) => handleSubmitSendQuestion(e)}>
          <input type="text" placeholder="Acá va su pregunta, señor" name="mensaje" value={input.mensaje} onChange={e => handleInputChange(e)} />
          {/* <input type="text" placeholder="Acá va su pregunta, señor" name={input.mensaje} />  */}
          <button >enviar</button>
        </form>
        {/* acá van las preguntas y respuestas */}
      </div>

    </>
  )
}

export default Details
