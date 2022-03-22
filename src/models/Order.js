import mongoose from "mongoose";

export const ORDER_STATUS = {
    inProcess: 'IN_PROCESS',
    completed: 'COMPLETED'
}

const schema = new mongoose.Schema({
    carId: {
        type: String,
        required: true
    },
    // driver
    driverId: {
        type: String,
        required: true
    },
    routeId: {
        type: String,
        required: true
    },
    title: {
        type: String
    },
    status: {
        type: String,
        default: ORDER_STATUS.inProcess
    },
    updates: [{
        status: {
            type: String,
            required: true
        },
        time: {
            type: Date,
            required: true
        }
    }]
})

export const Order = mongoose.model('orders', schema)