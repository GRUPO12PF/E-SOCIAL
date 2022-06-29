import { ErrorMessage, Field } from "formik"
import { mayúsculaInicial } from "../../../../utils/helperFunctions"
import s from '../Form.module.css'

const CampoInput = ({ name, text, type, input, isCreate, errors, req, placeholder, as }) => {

  const nombre = text ? text : name

  return (
    <>
      <label className={s.labelBis} >{mayúsculaInicial(nombre) + (req ? req : '')}</label>
      
      {/* valor anterior solo en modo Update */}
      {!isCreate && name !== 'descripcion' && name !== 'price'
        ? <p className={s.centroBis}>({input})</p>
        : null}

      <div>
        <Field
          name={name}
          className={s.inputAdicionalBis}
          type={type}
          id={name}
          placeholder={placeholder}
          as={as ? as : ''}
        />
      </div>

      <ErrorMessage name={name} component={() => (<p className={s.error}>{errors[name]}</p>)} />

    </>
  )
}

export default CampoInput
