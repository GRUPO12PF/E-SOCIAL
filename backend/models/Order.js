import mongoose from 'mongoose';

const orderSchema = mongoose.Schema(
  {
    comprador: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Usuario',
      required: true,
    },
    bookSelected: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
    },
    adress: {
        type: String,
        trim: true,
        required: true,
      },
  },
  {
    timestamps: true,
  }
)

const OrderCreated = mongoose.model("Order", orderSchema);
export default OrderCreated;

