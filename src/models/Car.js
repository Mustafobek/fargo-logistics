import mongoose from "mongoose";

const schema = new mongoose.Schema({
    number: {
        type: String,
        required: true
    }
})

export const Car = mongoose.model('cars', schema)