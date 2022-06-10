import Book from '../models/Book.js'

const projection = { createdAt: 0, updatedAt: 0, __v: 0, avaliable: 0 }

const obtenerBooks = async (req, res) => {
  try {
    // booksByQuery
    if (req.query.name) {
      const { name } = req.query
      const bookQuery = await Book.find({ 'nombre': { $regex: `^.*${name}.*`, $options: 'i' } }, projection)

      if (bookQuery.length) {
        res.json(bookQuery)
      } else {
        const error = new Error('No se encontró el libro.')
        res.status(404).json({ msg: error.message })
      }

      // booksByCategory
    } else {
      // getAllBooks      
      const { category } = req.query
      const limit = req.query.limit || 3
      const page = req.query.page || 1
      if (category) {
        const categoryResponse = await Book.paginate({ category: { $in: [`${category}`] } }, { projection, limit, page })
        let response = categoryResponse.docs
        res.json(response)
      } else {
        const books = await Book.paginate({}, { projection, limit, page })
        const allBooks = books.docs
        res.json(allBooks)
      }
    }
  } catch (error) {
    console.log(error)
  }
}

/*const obternerTodosLosLibros = async (req, res) =>{
    const limit = req.query.limit || 3
    const page = Math.ceil(req.query.page) || 1
    const books = await Book.paginate({}, { projection, limit, page })
    const allBooks = books.totalDocs 

    res.json(allBooks)
}*/

const obternerTodosLosLibros = async (req, res) => {
  const { category } = req.query
  const limit = req.query.limit || 3
  const page = req.query.page || 1
  if (category) {
    const categoryResponse = await Book.paginate({ category: { $in: [`${category}`] } }, { projection, limit, page })
    let response = categoryResponse.totalDocs
    res.json(response)
  } else {
    const books = await Book.paginate({}, { projection, limit, page })
    const allBooks = books.totalDocs
    res.json(allBooks)
  }


}


const nuevoBook = async (req, res) => {
  const book = new Book(req.body)
  book.creador = req.usuario._id

  try {
    const bookAlmacenado = await book.save()
    res.status(201).json(bookAlmacenado)
  } catch (error) {
    console.log(error)
  }
}

const detailBook = async (req, res) => {
  try {
    const { id } = req.params
    const book = await Book.findById(id, projection)



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
    const bookId = await Book.findById(id, projection)

    if (bookId) {
      const { nombre, descripcion, colection, category, price, rating } = req.body
      await Book.updateOne({ nombre, descripcion, colection, category, price, rating })
    } else {
      const error = new Error('No se encontró el libro.')
      res.status(404).json({ msg: error.message })
    }
    res.json({ success_msg: 'Libro modificado correctamente' })
  } catch (error) {
    console.log(error)
  }
}

const eliminarBook = async (req, res) => {
  try {
    const { id } = req.params

    const bookId = await Book.findById(id, projection)
    if (bookId) {
      await Book.deleteOne({
        where: { id },
      })
      res.json({ success_msg: 'Libro eliminado correctamente' })
    } else {
      const error = new Error('No se encontró el libro.')
      res.status(404).json({ msg: error.message })
    }
  } catch (error) {
    console.log(error)
  }
}

export {
  obtenerBooks,
  detailBook,
  nuevoBook,
  editarBook,
  eliminarBook,
  obternerTodosLosLibros,
  projection
}