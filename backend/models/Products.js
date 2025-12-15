import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    id: {
        type: Number,  
        required: true
      },
    title: String,
    description: String,
    price: Number,
    category: String,
    stock: Number,
    image: String
})

export default mongoose.model("Product", productSchema)