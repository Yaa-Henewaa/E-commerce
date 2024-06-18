import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    added_at: {
        type: Date,
        default: Date.now
    }
},



{timestamps: true }

);

export default mongoose.model("Cart", CartSchema)