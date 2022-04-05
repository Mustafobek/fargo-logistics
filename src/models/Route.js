import mongoose from "mongoose";

const schema = new mongoose.Schema({
    cities: [{
        city: {
            type: String,
            required: true
        }
    }],
    periods: [{
        period: {
            type: Number,
            required: true
        }
    }],
    deleted: {
        type: Boolean,
        default: false
    },
    shortname: {
        type: String,
        required: true
    }
})

export const Route = mongoose.model('routes', schema)