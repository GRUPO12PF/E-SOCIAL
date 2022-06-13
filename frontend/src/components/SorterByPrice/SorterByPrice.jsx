import { useDispatch } from 'react-redux'
import { ASCENDENT, DESCENDENT } from '../../redux/utils/constants.js'
import { sortByPrice } from '../../redux/actions/actionSorters.js'
import s from './SorterByPrice.css'

export default function Sort() {
  const dispatch = useDispatch()

  function onSelectChange(e) {
    e.preventDefault()
    dispatch(sortByPrice(e.target.value))
    // dispatch(resetSorts('name'))
  }
  return (
    <div>
      <select name='select' defaultValue='default' onChange={onSelectChange} className={s.select}>
        <option disabled value='default'>Ordernar por $</option>
        <option value={ASCENDENT}>^</option>
        <option value={DESCENDENT}>v</option>
      </select>
    </div>
  )
}