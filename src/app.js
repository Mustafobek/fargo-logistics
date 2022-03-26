import express from 'express'
import path from 'path'
import hbs from 'hbs'
import './db/mongoose.js'
import cors from 'cors'

import {infoLog} from "./utils/logger.js";
import authRoute from './router/user.js'
import carRoute from './router/car.js'
import routeRoute from './router/route.js'
import orderRoute from './router/order.js'
import {auth} from "./middlewares/auth.js";

const app = express()
const PORT = process.env.PORT || 3000
const __dirname = path.resolve()


app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json({limit: '10mb'}))
app.use(express.static(__dirname + './assets'))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, './views'))
hbs.registerPartials(__dirname, './views/partials')


app.use('/api/auth', authRoute)
app.use('/api/cars', [auth, carRoute])
app.use('/api/routes', [auth, routeRoute])
app.use('/api/orders', [auth, orderRoute])


app.listen(PORT, () => {
    console.log(infoLog(`Application is on port: ${PORT}`))
})
