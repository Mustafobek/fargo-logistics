import mongoose from "mongoose";

export const USER_ROLE = {
    admin: 'ADMIN',
    driver: 'DRIVER',
    report: "REPORT",
    manager: 'MANAGER'
}

const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    fullName: String,
    birthday: String,
    passportSerial: String,
    passportNumber: String,
    address: String
})

export const User = mongoose.model('users', schema)