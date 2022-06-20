import mongoose from 'mongoose';

const orderSchema = mongoose.Schema(
  {
    comprador: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Usuario',
      required: true,
    },
    books: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Books'
      }
    ,
    email: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    }

  }
)

const OrderCreated = mongoose.model("Order", orderSchema);
export default OrderCreated;

