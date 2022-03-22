import mongoose from "mongoose";

export const CAR_STATUS = {
    inUse: 'IN_USE',
    free: 'FREE'
}

const schema = new mongoose.Schema({
    number: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: CAR_STATUS.free
    },
    deleted: {
        type: Boolean,
        default: false
    }
})

export const Car = mongoose.model('cars', schema)