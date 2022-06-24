import { useSelector } from "react-redux"
import { detailsBook } from "../../../../redux/actions/detailsBooks"

const { nombre, autor, idioma, editorial, edicion, tapa, año_de_pub, cant_pags, descripcion, price, file, colection, ilustrado, category } = useSelector(state => state.detail)

const EditCard = ({ id, addMode }) => {
  useEffect(() => {
    if (!addMode) { dispatch(detailsBook(id)) }
  }, [])

  return (
    <div>
      <h1>{addMode ? 'Anunciar Producto' : `Editar ${nombre}`}</h1>
      {
        addMode
          ? null
          : (
            <p>{nombre}, {autor}, {idioma}, {editorial}, {edicion}, {tapa}<br />
              {año_de_pub}, {cant_pags}, {category}<br />
              {price}<br />
              {file}<br />
              {colection}, {ilustrado}, {descripcion}</p>
          )
      }
    </div>)
}

export default EditCard
