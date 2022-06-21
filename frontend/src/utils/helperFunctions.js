export function formatToCurrency(value) {
  let centsToDollars = value / 100
  let finalPrice = `U$D ${centsToDollars}`
  return finalPrice
}

// export function listedArray(value) { // no sé por qué no funca jaja
//   value?.sort((a, b) => a.localeCompare(b)).join(', ')
// }