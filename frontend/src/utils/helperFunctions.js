export function formatToCurrency(value) {
  let centsToDollars = value / 100
  let finalPrice = `U$D ${centsToDollars}`
  return finalPrice
}

// export function validateTextName(name) { // tampoco lo pude usar
//   if (!values[name]) {
//     return errors[name] = 'Campo requerido.'
//   } else if (!/^\S.*$/.test(values[name])) {
//     return errors[name] = 'El primer caracter no puede ser un espacio'
//   } else if (!/^(|[a-z]|[,.:;¡!¿?']|[À-ÿ]|\s){1,40}$/i.test(values[name])) {
//     return errors[name] = 'No puede superar los 40 caracteres.'
//   }
// }

// export function listedArray(value) { // no sé por qué no funca jaja
//   value?.sort((a, b) => a.localeCompare(b)).join(', ')
// }