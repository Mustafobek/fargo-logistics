import mongoose from 'mongoose'
import {errorLog, infoLog} from "../utils/logger.js";

const DB_URI = process.env.DB_URI || 'mongodb://127.0.0.1:27017/fargo-logistics'

mongoose.connect(DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(r => console.log(infoLog('Connected to Database')))
.catch(err => console.log(errorLog('Database connection error ' + err.message)))