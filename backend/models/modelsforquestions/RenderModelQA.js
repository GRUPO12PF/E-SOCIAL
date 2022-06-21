import mongoose from 'mongoose';

const renderModelQA = mongoose.Schema(
  {
    idComprador: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
      required: true,
    },
    idVendedor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Answer',
      required: true,
    }
  }
)

const RenderModelQA = mongoose.model("renderModelQA", renderModelQA);
export default RenderModelQA;

