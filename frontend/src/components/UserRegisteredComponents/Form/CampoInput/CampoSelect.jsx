import { ErrorMessage, Field } from "formik"
import { mayúsculaInicial } from "../../../../utils/helperFunctions"
import s from '../Form.module.css'

const CampoSelect = ({ name, input, isCreate, values, errors, value1, option1, value2, option2 }) => {

  return (
    <>
      <div>
        <Field
          name={name}
          className={s.selector}
          id={name}
          as='select'
          value={values[input]?.defaultValue}
        >
          <option value={''}>¿{mayúsculaInicial(name)}?</option>
          <option value={value1}>{option1}</option>
          <option value={value2}>{option2}</option>
        </Field>

        <ErrorMessage name={name} component={() => (<p className={s.error}>{errors[name]}</p>)} />
        
        {/* valor anterior solo en modo Update */}
        {!isCreate && input
          ? <p className={s.centro}>({input})</p>
          : null}

      </div>
    </>
  )
}

export default CampoSelect
