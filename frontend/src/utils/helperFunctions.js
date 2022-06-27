// devuelve año actual
export function currentYear() {
  const current = new Date()
  const result = `${current.getFullYear()}`
  return result
}

// chequea extensión del (file)
function hasExtension(input) {
  // const fileName = document.getElementsByName(inputID).value
  const res = /\.(gif|jpe?g|png)$/i.test(input)
  return res
}

// pasa (value) de centavos de dólar a número con coma
export function formatToCurrency(value) {
  const centsToDollars = value / 100
  const finalPrice = `U$D ${centsToDollars}`
  return finalPrice
}

// validaciones del Form
export function formValidators(values) {
  let errors = {}

  if (!values.nombre) {
    errors.nombre = 'Campo requerido'
  } else if (!/^\S.*$/.test(values.nombre)) {
    errors.nombre = 'El primer caracter no puede ser un espacio'
  } else if (!/^(\d|[a-z]|[\u00f1\u00d1]|[,.:¡!¿?']|[À-ÿ]|\s){1,40}$/i.test(values.nombre)) {
    errors.nombre = 'Ingrese un nombre válido de hasta 40 caracteres'
  }

  if (!values.autor) {
    errors.autor = 'Campo requerido'
  } else if (!/^\S.*$/.test(values.autor)) {
    errors.autor = 'El primer caracter no puede ser un espacio'
  } else if (!/^(|[a-z]|[()']|[À-ÿ]|[\u00f1\u00d1]|\s){1,40}$/i.test(values.autor)) {
    errors.autor = 'Ingrese un autor válido de hasta 40 caracteres'
  }

  if (!values.idioma) {
    errors.idioma = 'Campo requerido'
  } else if (!/^\S.*$/.test(values.idioma)) {
    errors.idioma = 'El primer caracter no puede ser un espacio'
  } else if (!/^([a-z]|[\u00f1\u00d1]|\s){1,20}$/i.test(values.idioma)) {
    errors.idioma = 'Ingrese un idioma válido de hasta 40 caracteres'
  }

  if (/^\s(.)*$/.test(values.editorial)) {
    errors.editorial = 'El primer caracter no puede ser un espacio'
  } else if (!/^(\d|[a-z]|[\u00f1\u00d1]|[,.:¡!¿?']|[À-ÿ]|\s){0,40}$/i.test(values.editorial)) {
    errors.editorial = 'Ingrese un nombre válido de hasta 40 caracteres'
  }

  if (/(\D)/.test(values.edicion) || values.edicion < 1 && values.edicion.toString()?.length > 0) {
    errors.edicion = 'Ingrese un Nº de edición mayor a 0'
  }

  if (values.publicado && (!/^[0-9]{0,4}$/.test(values.publicado) || values.publicado > currentYear())) {
    errors.publicado = 'Ingrese un año válido en formato AAAA'
  }

  if (/(\D|^0|[-])/.test(values.cant_pags)) { // NO tira error si solo se le pasa "-"
    errors.cant_pags = 'Ingrese un número de págs. válido'
  }

  if (values.descripcion?.length < 6) {
    errors.descripcion = 'La descripción debe contar con al menos 6 caracteres'
  } else if (values.descripcion?.length > 1500) {
    errors.descripcion = 'La descripción debe contar con un máximo de 1500 caracteres'
  }

  if (/(\D)/.test(values.price)) {
    errors.price = 'Ingrese el precio en centavos de USD'
  } else if (!values.price || values.price < 50) {
    errors.price = 'Ingrese un precio válido mayor a 50 centavos'
  }

  if (values.category?.length < 1) {
    errors.category = 'Elija al menos 1 categoría'
  }

  if (values.file?.name && !hasExtension(values.file.name)) {
    errors.file = 'Elija una imagen con extensión .jpg, .jpeg, .gif o .png'
  }
  
  if (values.image && !hasExtension(values.image)) {
    errors.image = 'Elija una imagen con extensión .jpg, .jpeg, .gif o .png'
  }

  return errors
}

export function sortArray(value, reverse) { // toma value y lo ordena si es array, invertido si el segundo arg es TRUE
  let res 
  Array.isArray(value)
    ? value.sort(
      isNaN(value[0])
        ? (a, b) => a.localeCompare(b)
        : (a, b) => a - b)
    : res = "NOT AN ARRAY!" // aclara si no es un array; así no rompe
  return res ? res : reverse ? value.reverse() : value
}
