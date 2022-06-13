import { useDispatch } from 'react-redux'
import { ASCENDENT, DESCENDENT } from '../../redux/utils/constants.js'
import { sortByName } from '../../redux/actions/actionSorters.js'
import s from './SorterByName.css'

export default function Sort() {
  const dispatch = useDispatch()

  function onSelectChange(e) {
    e.preventDefault()
    dispatch(sortByName(e.target.value))
  }
  return (
    <div>
      <select name='select' defaultValue='default' onChange={onSelectChange} className={s.select}>
        <option disabled value='default'>Ordenar por nombre</option>
        <option value={ASCENDENT}>A-Z</option>
        <option value={DESCENDENT}>Z-A</option>
      </select>
    </div>
  )
}