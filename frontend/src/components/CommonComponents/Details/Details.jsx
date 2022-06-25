import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"
import { detailsBook } from "../../../redux/actions/detailsBooks"
import NavBar from "../../CommonComponents/NavBar/NavBar"
import book from "../../../assets/images/book.svg"
import { formatToCurrency } from "../../../utils/helperFunctions"
import { usuarioActual } from "../../../redux/actions/actionUser";
import { getQA, postQuestion } from "../../../redux/actions/actionQA"
import DetailsField from "./DetailsField/DetailsField"
import NotFound from "../../CommonComponents/NotFound/NotFound.jsx"

const Details = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const token = localStorage.getItem("token")
  const { id } = useParams()
  const dispatch = useDispatch()
  const detail = useSelector((state) => state.detail)
  const usuarioAct = useSelector((state) => state.usuarioActual)
  const usuarioVendedor = detail.creador
  const idBook = detail._id
  const userAct = usuarioAct._id
  const handle = () => {
    navigate(`/profile/${usuarioVendedor}`)
  }

  const { nombre, autor, idioma, editorial, edicion, tapa, cant_pags, colection, image, price, descripcion, category, ilustrado, publicado } = useSelector((state) => state.detail)

  console.log(detail)
  const user = useSelector((state) => state.usuarioActual)
  const userComprador = user._id

  //----------------------------------------------------------------------------------------------------------------------------------------------------------- 
  const qa = useSelector((state) => state.questionsAndAnswers)
  const questionAnswered = qa.length ? qa.filter(ele => ele.answers.length) : null

  //-----------------------------------------------------------------------------------------------------------------------------------------------------------
  const [input, setInput] = useState({
    mensaje: ''
  })
  //--------------------------
  if (Object.keys(detail).length > 0 && loading) {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  const [verMas, setVerMas] = useState(false)

  useEffect(() => {
    dispatch(getQA(id))
    dispatch(detailsBook(id))
    dispatch(usuarioActual())
  }, [dispatch])

  const handleSubmitSendQuestion = async (e) => {
    if (userAct !== usuarioVendedor) {
      e.preventDefault();
      if(!input.mensaje.length){
        alert("No puede enviar una pregunta vacía")
      } else {
        setInput({
          mensaje: input.mensaje,
        })
        dispatch(postQuestion({
          mensaje: input.mensaje,
          idComprador: userComprador,
          book: idBook,
          idVendedor: usuarioVendedor
        }))
  
        setInput({
          mensaje: ''
        })
        alert('¡Tu respuesta fue envia con exito!')
      }
    } else {
      e.preventDefault()
      alert('¡No podés preguntar por un libro que es tuyo!')
      setInput({
        mensaje: ''
      })
    }
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
      {
        detail.msgError ? <NotFound /> :
          <div>


            <div className="card-detalle">
              <div className="clip-detalle">

              </div>
              <div>
                <img src={image || book} alt="No encontrado" className="image-detalle" />
              </div>

              <div>
                <h3 className="pName-detalle">{nombre}</h3>
                <div className="price-detalle">
                  {formatToCurrency(price)}
                </div>

                <div className="description-detalle">

                  <DetailsField
                    constant={autor}
                    clasName="h5-detalle"
                    title='Autor'
                  />

                  <DetailsField
                    constant={idioma}
                    clasName="h5-detalle"
                    title='Idioma'
                  />

                  <h5 className="h5-detalle">Categoría</h5>
                  {category?.sort((a, b) => a.localeCompare(b)).join(', ')}

                  <h5 className="h5-detalle">Descripción</h5>
                  <p className="parra-detalle">
                    {descripcion}
                  </p>

                  <button onClick={() => setVerMas(!verMas)}>
                    {verMas ? "Ver menos" : "Ver más"}
                  </button>

                  {!verMas
                    ? null
                    : (<div>
                      <DetailsField
                        constant={editorial}
                        clasName="h5-detalle"
                        title='Editorial'
                      />

                      <DetailsField
                        constant={edicion}
                        clasName="h5-detalle"
                        title='Edición'
                      />

                      <DetailsField
                        constant={tapa}
                        clasName="h5-detalle"
                        title='Tapa'
                      />

                      <DetailsField
                        constant={publicado}
                        clasName="h5-detalle"
                        title='Año de publicación'
                      />

                      <DetailsField
                        constant={cant_pags}
                        clasName="h5-detalle"
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

                      <DetailsField
                        constant={colection}
                        clasName="h5-detalle"
                        title='Saga / Serie'
                      />
                    </div>)
                  }

                </div>
                <div className="che-detalle">
                  {
                    detail.order?.length < 1 ?
                      token ?
                        <Link to="/checkout">
                          <button className="btnn-detalle">COMPRAR</button>
                        </Link>
                        :
                        <Link to="/registrar">
                          <button className="btnn-detalle">COMPRAR</button>
                        </Link>
                      : null
                  }
                </div>
              </div>
            </div>
            
            
           

            <div  className="respuesta-detail">
            <div clasName="question">
              {
                questionAnswered?.map((e, i) => {
                  return (
                    <div className="msjes">
                      <div><p className="t">Pregunta: {e.mensaje}</p></div>
                      <div><p className="t">Respuesta: {e.answers[0]?.mensaje}</p></div>
                    </div>
                  )
                })
              }
            </div>

              {
                token ?
                  <form onSubmit={(e) => handleSubmitSendQuestion(e)}>
                    <input type="text" placeholder="Acá va su pregunta, señor" name="mensaje" value={input.mensaje} onChange={e => handleInputChange(e)} />
                    {/* <input type="text" placeholder="Acá va su pregunta, señor" name={input.mensaje} />  */}
                    <button>ENVIAR</button>
                  </form>
                  :
                  <Link to="/homeout">
                    <button className="btnn-detalle">PREGUNTAR</button>
                  </Link>
              }

              {/* acá van las preguntas y respuestas */}
            </div>
           
            <div className="perfil-v">

              <button onClick={handle}>PERFIL DEL VENDEDOR</button>

            </div>


          </div>
      }



    </>

  )
}

export default Details
