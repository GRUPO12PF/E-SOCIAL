import mongoose from 'mongoose';

const answerSchema = mongoose.Schema(
  {
    idVendedor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Usuario',
      required: true,
    },
    mensaje: {
        type: String,
        required: true,
    }
  }
)

const AnswerModel = mongoose.model("Answer", answerSchema);
export default AnswerModel;

