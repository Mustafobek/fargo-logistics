import mongoose from "mongoose";

export const ORDER_STATUS = {
    inProcess: 'IN_PROCESS',
    preCompleted: 'PRE_COMPLETED',
    completed: 'COMPLETED'
}

const schema = new mongoose.Schema({
    carId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cars'
    },
    // driver
    driverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    routeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'routes'
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
            // required: true,
            default: ORDER_STATUS.inProcess
        },
        time: {
            type: Date,
            default: Date.now()
        },
        currentCity: {
            type: String,
            required: true
        },
        nextCity: {
            type: String,
            required: true
        },
        willFinish: {
            type: Number,
            required: true
        }
    }]
})

export const Order = mongoose.model('orders', schema)