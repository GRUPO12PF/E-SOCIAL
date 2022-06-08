import { useDispatch, useSelector } from 'react-redux'
import { filterByCategories } from '../../redux/actions/actionBooks.js'
import s from '../styles/filterCategories.module.css'

export default function FilterCategory(props) {
  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories)
  // const { setCurrentPage } = props

  const handleCategoryChange = (e) => {
    e.preventDefault()
    // setCurrentPage(1)
    dispatch(filterByCategories(e.target.value))
  }

  return (
    <div>
      <select onChange={handleCategoryChange}>
        <option value={'Todas las categorías'}>Todas las categorías</option>
        {categories?.map((g, i) => {
          return (
            <option value={g} key={i}>{g}</option>
          )
        })}
      </select>
    </div>
  )
}
