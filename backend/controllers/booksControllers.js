import Book from '../models/Book.js'

const obtenerBooks = async (req, res) => {
  try {
    // booksByQuery
    if (req.query.name) {
      const { name } = req.query
      console.log("🚀 ~ file: booksControllers.js ~ line 5 ~ obtenerBooks ~ req =", name)
      const bookQuery = await Book.find({ 'nombre': { $regex: `^.*${name}.*` } })
      if (bookQuery.length) {
        res.json(bookQuery)
      } else {
        res.status(404).json({ error_msg: '¡Libro no encontrado!' })
      }

    } else {
      // getAllBooks      
      const books = await Book.find()
      // .where('creador').equals(req.usuario) // TODO ¿estaba por algo en particular esta condición?
      res.json(books)
    }
  } catch (error) {
    console.log(error)
  }
}

const nuevoBook = async (req, res) => {
  const book = new Book(req.body)
  book.creador = req.usuario._id

  try {
    const bookAlmacenado = await book.save()
    res.json(bookAlmacenado)
  } catch (error) {
    console.log(error)
  }
}

const obtenerBook = async (req, res) => {
  const { id } = req.params

  const book = await Book.findById(id)

  if (!book) {
    const error = new Error('No Enctontrado el Book')
    return res.status(404).json({ msg: error.message })
  }

  if (book.creador.toString() !== req.usuario._id.toString()) {
    const error = new Error('Accion No Valida')
    return res.status(401).json({ msg: error.message })
  }
  res.json(book)
}

const editarBook = async (req, res) => {
  try {
    const { id } = req.params
    const bookId = await Book.findById(id)
    if (bookId) {
      const {
        nombre,
        descripcion,
        colection,
        category,
        price,
        rating
      } = req.body

      await Book.updateOne({ nombre, descripcion, colection, category, price, rating })
    } else {
      console.log('no hay libro con dicho ID')
    }
    res.send('Libro modificado')

  } catch (error) {
    console.log(error)
  }
}

const eliminarBook = async (req, res) => {

}


export {
  obtenerBook,
  obtenerBooks,
  nuevoBook,
  editarBook,
  eliminarBook
}