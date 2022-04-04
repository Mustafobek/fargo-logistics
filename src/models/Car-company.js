import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

export const CarCompany = mongoose.model('car-companies', schema)