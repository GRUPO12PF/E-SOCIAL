import { useNavigate } from "react-router"

export function BackButton() {
  const navigate = useNavigate()

  return (
    <>
      <button
        className='backButton'
        type="button"
        onClick={() => { navigate(-1) }}
      >
        VOLVER
      </button>
    </>
  )
}
