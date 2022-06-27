import { ErrorMessage, Field } from "formik"
import { mayúsculaInicial } from "../../../../utils/helperFunctions"
import s from '../Form.module.css'

const CampoSelect = ({ name, input, isCreate, values, errors, value1, value2, option2, value3, option3 }) => {

  return (
    <>
      <label className={s.label} >{mayúsculaInicial(name)}</label>

      {/* valor anterior solo en modo Update */}
      {!isCreate
        ? <p className={s.centro}>({input})</p>
        : null}

      <div>
        <Field
          name={name}
          className={s.input}
          id={name}
          as='select'
          value={values[input]?.defaultValue}
        >
          <option value={value1}>¿{mayúsculaInicial(name)}?</option>
          <option value={value2}>{option2}</option>
          <option value={value3}>{option3}</option>
        </Field>

        <ErrorMessage name={name} component={() => (<p className={s.error}>{errors[name]}</p>)} />
      </div>
    </>
  )
}

export default CampoSelect
