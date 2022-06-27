import { useState } from "react"
import Loading from '../../../CommonComponents/Loading/Loading'
import s from "./ImgPreview.module.css"

const PreviewImage = ({ file }) => {
  const [preview, setPreview] = useState(null)

  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => {
    setPreview(reader.result)
  }

  return (
    <div>
      {preview
        ? <img src={preview} alt="preview" className={s.previewF} />
        : <Loading />}
    </div>
  )
}

export default PreviewImage
