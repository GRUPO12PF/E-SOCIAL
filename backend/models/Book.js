import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"

const booksSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            trim: true,
            required: true,
        },
        descripcion: {
            type: String,
            trim: true,
            required: true,
        },
        creador: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Usuario",
            required: true,
        },
        colection: {
            type: mongoose.Schema.Types.String,
            ref: "Coleccion",
        },
        category: [
            {
                type: mongoose.Schema.Types.String,
                ref: "Usuario",
            },
        ],
        // image: {
        //     type: Text,
        // },
        price: {
            type: Number,
            trim: true,
            required: true,
        },
        ranking: {
            type: Number,
            trim: true,
            default: 0
        },
        userLikes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Usuario"
            }
        ],
        avaliable: {
            type: Boolean,
            trim: true,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

booksSchema.plugin(mongoosePaginate);
const BooksCreated = mongoose.model("Books", booksSchema);
export default BooksCreated;
