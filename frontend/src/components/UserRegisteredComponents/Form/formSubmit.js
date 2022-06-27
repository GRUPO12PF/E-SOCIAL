import { useDispatch } from "react-redux"
import { putBookBody } from "../../../redux/actions/actionBooks"
import { postCreate } from "../../../redux/actions/postProducts"

const dispatch = useDispatch()

export function onSubmit(values, resetForm) {
  if (uploadImg) {
    values.image = imgPreview
  }
  delete values.file

  if (isAddMode) {
    dispatch(postCreate(values))
  } else {
    values._id = id
    dispatch(putBookBody(values))
  }

  dispatch(cleanData)
  resetForm()
  swal({
    title: "¡Realizado con éxito!",
    text: " ",
    icon: "success",
    button: "Ok!",
  })
  navigate('/')
  dispatch(getBooks())
}