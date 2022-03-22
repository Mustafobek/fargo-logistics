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
    }]
})

export const Route = mongoose.model('routes', schema)