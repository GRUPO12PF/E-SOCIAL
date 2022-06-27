import { ErrorMessage, Field } from "formik"
import { mayúsculaInicial } from "../../../../utils/helperFunctions"
import s from '../Form.module.css'

const CampoInput = ({ name, type, input, isCreate, errors, req, placeholder, as}) => {

  return (
    <>
      <label className={s.label} >{mayúsculaInicial(name) + (req ? req : '') }</label>
      {!isCreate ? <p className={s.centro}>({input})</p> : null} {/* solo en modo Update */}
      <div>
        <Field
          name={name}
          className={s.input}
          type={type}
          id={name}
          placeholder={placeholder}
          as={as ? as : ''}
        />
        <ErrorMessage name={name} component={() => (<p className={s.error}>{errors[name]}</p>)} />
      </div>
    </>
  )
}

export default CampoInput
