import mongoose from "mongoose";

export const CAR_STATUS = {
    inUse: 'IN_USE',
    free: 'FREE'
}

const schema = new mongoose.Schema({
    ownerCompanyId: {
        type: String,
        // required: true
    },
    model: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: CAR_STATUS.free
    },
    ownerCompany: {
        type: String,
        required: true
    },
    deleted: {
        type: Boolean,
        default: false
    }
})

export const Car = mongoose.model('cars', schema)