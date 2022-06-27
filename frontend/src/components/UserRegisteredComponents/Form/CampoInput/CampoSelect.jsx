import { ErrorMessage, Field } from "formik"
import { mayúsculaInicial } from "../../../../utils/helperFunctions"
import s from '../Form.module.css'

const CampoSelect = ({ name, type, input, isCreate, values, errors, req}) => {

  return (
    <>
      <label className={s.label} >{mayúsculaInicial(name) + (req ? req : '')}</label>
      {!isCreate ? <p className={s.centro}>({input})</p> : null} {/* solo en modo Update */}
      <div>
        <Field
          name={name}
          className={s.input}
          type={type}
          id={name}
          as='select'
          value={values[input]?.defaultValue}
        >
          <option value={false}>¿{mayúsculaInicial(name)}?</option>
          <option value={false}>X</option>
          <option value={true}>✓</option>
        </Field>
        <ErrorMessage name={name} component={() => (<p className={s.error}>{errors[name]}</p>)} />
      </div>
    </>
  )
}

export default CampoSelect
