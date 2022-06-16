import getBookById from '../helpers/getBookById.js'
import Book from '../models/Book.js'

const projection = { createdAt: 0, updatedAt: 0, __v: 0, avaliable: 0 }

const obtenerBooks = async (req, res) => {
  let response
  try {
    // booksByQuery
    if (req.query.name) {
      const { name } = req.query
      const bookQuery = await Book.find({ 'nombre': { $regex: `^.*${name}.*`, $options: 'i' }}, { projection })
      response = bookQuery

      // booksByCategory
    } else {
      const { category } = req.query
      if (category) {
        const categoryResponse = await Book.find({ category: { $in: [`${category}`] }}, { projection })
        response = categoryResponse
      } else {
        const books = await Book.find({}, { projection })
        response = books
      }
    }
    res.json(response)
  } catch (error) {
    console.log(error, "🔴")
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
    const { id } = req.params || req.body
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

    try {
        // const libroEditado = await Book.save()
        // res.json(libroEditado)
        const bookId = await Book.findByIdAndUpdate({_id: id}, {
          nombre : req.body.nombre,
          descripcion : req.body.descripcion,
          colection : req.body.colection,
          category : req.body.category,
          image: req.body.image,
          price : req.body.price,
          rating : req.body.rating,
        })

        if(!bookId) {
            const error = new Error("No Enctontrado el libro");
            return res.status(404).json({msg: error.message});
        }
        console.log("yes")
    
        // if (bookId.creador.toString() !== req.usuario._id.toString() ) {
        //     const error = new Error("Accion No Valida");
        //     return res.status(401).json({msg: error.message});
        // }
        res.send(bookId).status(201)
        
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
  projection
}
