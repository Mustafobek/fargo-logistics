import express from 'express'
import path from 'path'
import hbs from 'hbs'
import './db/mongoose.js'

import {infoLog} from "./utils/logger.js";
import authRoute from './router/user.js'
import carRoute from './router/car.js'

const app = express()
const PORT = process.env.PORT || 3000
const __dirname = path.resolve()


app.use(express.urlencoded({extended: false}))
app.use(express.json({limit: '10mb'}))
app.use(express.static(__dirname + './assets'))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, './views'))
hbs.registerPartials(__dirname, './views/partials')


app.use('/api/auth', authRoute)
app.use('/api/cars', carRoute)


app.listen(PORT, () => {
    console.log(infoLog(`Application is on port: ${PORT}`))
})
