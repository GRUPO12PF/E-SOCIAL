import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByCategory, getCategories } from '../../../redux/actions/actionCategories.js'
import style from './FilterCategories.module.css'

export default function FilterCategories() {
  const categories = useSelector(state => state.categories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
    return () => {
    }
  }, [dispatch])

  const handleCategorySelect = (e) => {
    e.preventDefault()
    dispatch(filterByCategory(e.target.value))
  }

  return (
    <div>
      <select className={style.filter}
       onChange={handleCategorySelect}>
        <option value={''}>ALL CATEGORIES</option>
        {categories?.map((g, i) => {
          return (
            <option value={g} key={i}>{g}</option>
          )
        })}
      </select>
    </div>
  )
}
