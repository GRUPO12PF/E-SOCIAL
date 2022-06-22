import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { detailsBook } from "../../../redux/actions/detailsBooks"
import NavBar from "../../CommonComponents/NavBar/NavBar"
import book from "../../../assets/images/book.svg"
import { formatToCurrency } from "../../../utils/helperFunctions"

import {getQA, postQuestion} from "../../../redux/actions/actionQA"


const Details = () => {
  const [loading, setLoading] = useState(true)
  const token = localStorage.getItem("token")
  const { id } = useParams()
  const dispatch = useDispatch()

  //--------------------------
  const detail = useSelector((state) => state.detail)
  const usuarioVendedor = detail.creador
  const idBook = detail._id
  
  const user = useSelector((state)=>state.usuarioActual)
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

  const handleSubmitSendQuestion = async () =>{
    setInput({
      mensaje: input.mensaje,
    })
    console.log("a ver qué te mando jeje", input)
    dispatch(postQuestion({
      mensaje: input.mensaje, 
      id: userComprador,
      idBook: idBook,
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
          <img src={detail.image || book} alt="not found" className="image-detalle" />
        </div>

        <div>
          <h3 className="pName-detalle">{detail.nombre}</h3>
          <div className="price-detalle">
          {formatToCurrency(detail.price)}
          </div>

          <div className="description-detalle">

            <h5 className="h5-detalle">Saga / Serie</h5>
            {detail.colection}

            <h5 className="h5-detalle">Categoría</h5>
            {detail.category?.sort((a, b) => a.localeCompare(b)).join(', ')}

            <h5 className="h5-detalle">Descripción</h5>
            <p className="parra-detalle">
              {detail.descripcion}
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

          <form onSubmit={()=>handleSubmitSendQuestion()}>
            <input type="text" placeholder="Acá va su pregunta, señor" name="mensaje" value={input.mensaje} onChange={e => handleInputChange(e)}/> 
            {/* <input type="text" placeholder="Acá va su pregunta, señor" name={input.mensaje} />  */}
            <button >enviar</button>
          </form>
        {/* acá van las preguntas y respuestas */}
      </div>

    </>
  )
}

export default Details



{/* <div>
        <NavBar />
      </div>
      {Object.keys(detail).length > 0 && !loading ? (
        <div>
          <div className={s.background}>
            <div className={s.name}>
              <h3 className={s.pName}>{detail.nombre}</h3>
              <img
                src={detail.image || book}
                alt="not found"
                className={s.image}
              />
              <h3 className={s.pName}>Precio: {"$" + detail.price + ".00"}</h3>
              {
                token ?
                  <Link to="/checkout">
                    <button className={s.btnn}>COMPRAR</button>
                  </Link>
                  :
                  <Link to="/homeout">
                    <button className={s.btnn}>COMPRAR</button>
                  </Link>
              }

            </div>
            <div className={s.description}>
              <h5 className={s.h5}>Colección</h5>
              {detail.colection}

              <h5 className={s.h5}>Categoría</h5>
              {detail.category.join(", ")}


              <h5 className={s.h5}>Descripción</h5>
              <p className={s.parra}>
                {detail.descripcion}
              </p>
           
            </div>
          </div>
        </div> */}
{/* ) : <Loading />
      } */}
