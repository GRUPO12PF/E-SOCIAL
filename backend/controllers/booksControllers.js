import Book from '../models/Book.js'

const projection = { createdAt: 0, updatedAt: 0, __v: 0, avaliable: 0 }

const obtenerBooks = async (req, res) => {
  let response
  try {
    // booksByQuery
    if (req.query.name) {
      const { name } = req.query
      const limit = req.query.limit || 3
      const page = req.query.page || 1
      const bookQuery = await Book.paginate({ 'nombre': { $regex: `^.*${name}.*`, $options: 'i' } }, { projection, limit, page })
      response = bookQuery.docs

      // booksByCategory
    } else {
      // getAllBooks      
      const { category } = req.query
      const limit = req.query.limit || 3
      const page = req.query.page || 1
      if (category) {
        const categoryResponse = await Book.paginate({ category: { $in: [`${category}`] } }, { projection, limit, page })
        response = categoryResponse.docs
      } else {
        const books = await Book.paginate({}, { projection, limit, page })
        response = books.docs
      }
    }
    res.json(response)
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
  const { name } = req.query
  const limit = req.query.limit || 3
  const page = req.query.page || 1
  let response
  if (category) {
    const categoryResponse = await Book.paginate({ category: { $in: [`${category}`] } }, { projection, limit, page })
    response = categoryResponse.totalDocs
  } else if (name) {
    const booksName = await Book.paginate({ 'nombre': { $regex: `^.*${name}.*`, $options: 'i' } }, { projection, limit, page })
    response = booksName.totalDocs
  } else {
    const books = await Book.paginate({}, { projection, limit, page })
    response = books.totalDocs
  }
  res.json(response)
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
      const id = req.params.id
    console.log(req.params, "params")
    console.log(id, "id")

    try {
        // const libroEditado = await Book.save()
        // res.json(libroEditado)
        const bookId = await Book.findOneAndUpdate({_id: id}, {
          nombre : req.body.nombre,
          descripcion : req.body.descripcion,
          colection : req.body.colection,
          category : req.body.category,
          price : req.body.price,
          rating : req.body.rating,
        })

        if(!bookId) {
            const error = new Error("No Enctontrado el libro");
            return res.status(404).json({msg: error.message});
        }
    
        // if (bookId.creador.toString() !== req.usuario._id.toString() ) {
        //     const error = new Error("Accion No Valida");
        //     return res.status(401).json({msg: error.message});
        // }
        res.json("se actualizó el libro").status(201)
        
    } catch (error) {
        console.log(error)
    }
 }

const eliminarBook = async (req, res) => {
  try {
    const id = req.params.id
    const bookId = await Book.findOneAndDelete({ _id: id })
    res.json({ bookId })
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
