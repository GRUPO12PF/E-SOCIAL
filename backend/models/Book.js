import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        id: {
            type: String,
            trim: true,
            required: true,
        },
        colection: {
            type: mongoose.Schema.Types.String,
            ref: "Coleccion",
        },
        category: {
            type: mongoose.Schema.Types.String,
            ref: "Categorias",
        },
        ownerId: {
            type: mongoose.Schema.Types.String,
            ref: "Usuario",
        },
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

const ProductCreated = mongoose.model("ProductCreated", productSchema);
export default ProductCreated;
