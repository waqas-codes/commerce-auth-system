import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 3,
        max: 10,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        min: 8,
        max: 100,
        required: true
    },
    address: {
        type: String,
        min: 1,
        max: 100,
        required: false
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const User = mongoose.model("User", userSchema);

export default User; 