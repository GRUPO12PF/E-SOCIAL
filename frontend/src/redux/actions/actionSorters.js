import { SORT_BY_NAME, SORT_BY_PRICE } from "../utils/constants"

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