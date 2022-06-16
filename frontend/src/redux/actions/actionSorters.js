import { RESET_SORTS, SORT_BY_NAME, SORT_BY_PRICE } from "../utils/constants"

export function sortByName(payload) {
  return {
    type: SORT_BY_NAME,
    payload
  }
}

export function sortByPrice(payload) {
  return {
    type: SORT_BY_PRICE,
    payload
  }
}

// export function resetSorts(...args) {
//   return {
//     type: RESET_SORTS,
//     payload: [...args]
//   }
// }