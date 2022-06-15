import OrderCreated from "../models/Order.js"
import Order from "../models/Order.js"



const obtenerOrders = async (req, res) => {
    try{
          const orders = await Order.find({})
         let  response = orders

         res.json(response)
    } catch (error) {
      console.log(error)
    }
  }

const nuevaOrder = async (req, res) => {
    const {idBook} = req.params
    const order = new Order({
        adress: req.body.adress,
        bookSelected: idBook,
    })   
    order.comprador = req.usuario._id
      
    try {
      const orderAlmacenada = await order.save()
      res.status(201).json(orderAlmacenada);
    } catch (error) {
      console.log(error)
    }
  }

  const eliminarOrder = async (req, res) => {
    try {
      const id = req.params.id
      const orderId = await Order.findOneAndDelete({ _id: id })
      res.json({ orderId })
    } catch (error) {
      console.log(error)
    }
  }

  const detailOrder = async (req, res) => {
  try {
    const { id } = req.params
    const order = await Order.findById(id)

    if (!order) {
      const error = new Error('No se encontró la orden')
      return res.status(404).json({ msg: error.message })
    }

    res.json(order)
  } catch (error) {
    console.log(error)
  }
}

  export {
    nuevaOrder,
    obtenerOrders,
    eliminarOrder,
    detailOrder
  }