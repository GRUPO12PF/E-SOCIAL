import Book from '../models/Book.js'


const obtenerLibrosUsuarios = async (req, res) => {
  try {
    const { id } = req.params
    const booksUsuarios = await Book.find({ creador: id }).populate("creador")
    let response = booksUsuarios
    
    res.send(response)
  } catch (error) {
    console.log(error)
  }
}




export {
  obtenerLibrosUsuarios
}
