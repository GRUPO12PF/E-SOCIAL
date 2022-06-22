import { uploadImage } from "../libs/cloudinary.js"
import fs from "fs-extra"
import Book from '../models/Book.js'

const projection = { createdAt: 0, updatedAt: 0, __v: 0, avaliable: 0 }

const obtenerBooks = async (req, res) => {
  let response
  try {
    // booksByQuery
    if (req.query.name) {
      const { name } = req.query
      const bookQuery = await Book.find({ 'nombre': { $regex: `^.*${name}.*`, $options: 'i' } }, { projection }).populate('creador')
      response = bookQuery
      // booksByCategory
    } else {
      const { category } = req.query
      if (category) {
        const categoryResponse = await Book.find({ category: { $in: [`${category}`] } }, { projection }).populate('creador')
        response = categoryResponse
      } else {
        const books = await Book.find({}, { projection }).populate('order').populate('creador')
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

  // const formatos = ["png", "jpg", "webp", "gif"]
  // if (
  //   !formatos.includes(
  //     req.files.image.name.split(".")[
  //     req.files.image.name.split(".").length - 1
  //     ]
  //   )
  // ) {
  //   return res.status(400).send({ msg: "Invalid image format (jpg, png, webp or gif)" })
  // }

  try {
    if (req.files.image) {
      const response = await uploadImage(req.files.image.tempFilePath)
      await fs.remove(req.files.image.tempFilePath)
  
      book.image = {
        url: response.secure_url,
        public_id: response.public_id,
      }
    }
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
    res.json(book)
  } catch (error) {
    console.log(error)
  }
}

const editarBook = async (req, res) => {
  const id = req.params.id

  try {
    const bookId = await Book.findByIdAndUpdate({ _id: id }, {
      nombre: req.body.nombre,
      autor: req.body.autor,
      idioma: req.body.idioma,
      editorial: req.body.editorial,
      edicion: req.body.edicion,
      tapa: req.body.tapa,
      año_de_pub: req.body.año_de_pub,
      cant_pags: req.body.cant_pags,
      descripcion: req.body.descripcion,
      price: req.body.price,
      image: req.body.image,
      colection: req.body.colection,
      ilustrado: req.body.ilustrado,
      category: req.body.category,
    })

    if (!bookId) {
      const error = new Error("No Enctontrado el libro");
      return res.status(404).json({ msg: error.message });
    }

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
