import { useDispatch } from 'react-redux'
import { NAME_ASC, NAME_DESC, PRICE_ASC, PRICE_DESC } from '../../../redux/utils/constants'
import { sortBy } from '../../../redux/actions/actionSorter'
import s from './Sorter.css'

export default function Sort() {
  const dispatch = useDispatch()

  function onSelectChange(e) {
    e.preventDefault()
    dispatch(sortBy(e.target.value))
  }
  return (
    <div>
      <select name='select' defaultValue='default' onChange={onSelectChange} className={s.select}>
        <option disabled value='default'>Ordenar por nombre</option>
        <option value={NAME_ASC}>A-Z</option>
        <option value={NAME_DESC}>Z-A</option>
        <option disabled value='default'>Ordenar por precio</option>
        <option value={PRICE_ASC}>$ ^</option>
        <option value={PRICE_DESC}>$ v</option>
      </select>
    </div>
  )
}
