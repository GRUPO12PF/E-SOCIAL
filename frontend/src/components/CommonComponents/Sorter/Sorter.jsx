import { useDispatch } from 'react-redux'
import { NAME_ASC, NAME_DESC, PRICE_ASC, PRICE_DESC } from '../../../redux/utils/constants'
import { sortBy } from '../../../redux/actions/actionSorter'

export default function Sort() {
  const dispatch = useDispatch()

  function onSelectChange(e) {
    e.preventDefault()
    dispatch(sortBy(e.target.value))
  }
  return (
    <div className='ccc'>
      <select name='select' onChange={onSelectChange} className="select">
        <option value='Ordenar por nombre'>-Ordenar por nombre-</option>
        <option value={NAME_ASC}>A-Z</option>
        <option value={NAME_DESC}>Z-A</option>
        <option value='Ordenar por precio'>-Ordenar por precio-</option>
        <option value={PRICE_ASC}>Asc</option>
        <option value={PRICE_DESC}>Desc</option>
      </select>
    </div>
  )
}
