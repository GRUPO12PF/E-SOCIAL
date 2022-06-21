import mongoose from 'mongoose';

const questionSchema = mongoose.Schema(
  {
    idComprador: {
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

const QuestionModel = mongoose.model("Question", questionSchema);
export default QuestionModel;

