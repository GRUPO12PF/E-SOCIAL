import Review from "../models/Review.js"
import Order from "../models/Order.js"
import Usuario from "../models/Usuario.js"


const nuevaReview = async (req, res) => {
  
  //const{orderId} = req.params
 // const {vendedor}= req.body.vendedor

 // const order = await Order.findById(orderId)
  //console.log(order)
  //const vendedorId = await Usuario.findById(vendedor)

  //const newReview = await new Review({
   // orden: orderId,
    //vendedor,
   // title: req.body.title,
   // description: req.body.description,
    //score: req.body.score
////})

//newReview.comprador = req.usuario._id
  try {
    //const review = await newReview.save()
    //order.review = order.review.concat(review._id)
    //await order.save()
   // vendedorId.reviews = vendedorId.reviews.concat(review._id)
    //await vendedorId.save()
   // res.status(201).json(review);
  } catch (error) {
    console.log(error)
  }
}



export {
    nuevaReview
}