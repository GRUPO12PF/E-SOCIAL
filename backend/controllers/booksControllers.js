import Book from '../models/Book.js'

const obtenerBooks = async (req, res) => {
  try {
    // booksByQuery
    if (req.query.name) {
      const { name } = req.query
      const bookQuery = await Book.find({ 'nombre': { $regex: `^.*${name}.*` } },  '-createdAt -updatedAt -__v')
      if (bookQuery.length) {
        res.json(bookQuery)
      } else {
        const error = new Error('No se encontró el libro.')
        res.status(404).json({ msg: error.message })
      }

    } else {
      // getAllBooks      
      const limit = req.query.limit  || 8
      const page = req.query.page || 1
      const books = await Book.paginate({}, {limit, page})

      const books = await Book.find(null, '-createdAt -updatedAt -__v')
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

const detailBook = async (req, res) => {
  try {
    const { id } = req.params
    const book = await Book.findById(id, '-createdAt -updatedAt -__v')

    if (!book) {
      const error = new Error('No se encontró el libro.')
      return res.status(404).json({ msg: error.message })
    }

    res.json(book)
  } catch (error) {
    console.log(error)
  }
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
  try{
    const {id} = req.params;
    const bookId = await Book.findById(id)
    await Book.deleteOne({
      where: {
        id,
      },
    });
    res.send('Libro eliminado correctamente')
  } catch(error){
    console.log(error)
  }
}


export {
  obtenerBooks,
  detailBook,
  nuevoBook,
  editarBook,
  eliminarBook
}
