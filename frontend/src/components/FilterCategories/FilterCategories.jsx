import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByCategory, getCategories } from '../../redux/actions/actionCategories.js'
import s from './FilterCategories.module.css'

export default function FilterCategories(props) {
  // const { setCurrentPage } = props
  const categories = useSelector(state => state.categories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
    return () => {
    }
  }, [dispatch])

  const handleCategorySelect = (e) => {
    e.preventDefault()
    // setCurrentPage(1)
    dispatch(filterByCategory(e.target.value))
  }

  return (
    <div>
      <select onChange={handleCategorySelect}>
        <option value={''}>All books</option>
        {categories?.map((g, i) => {
          return (
            <option value={g} key={i}>{g}</option>
          )
        })}
      </select>
    </div>
  )
}
