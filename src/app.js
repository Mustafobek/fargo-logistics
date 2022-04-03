import express from 'express'
import {join, resolve} from 'path'
import hbs from 'hbs'
import './db/mongoose.js'
import cors from 'cors'

import {infoLog} from "./utils/logger.js";
import authRoute from './router/user.js'
import carRoute from './router/car.js'
import routeRoute from './router/route.js'
import orderRoute from './router/order.js'
import pageRoute from './router/pages.js'
import {auth} from "./middlewares/auth.js";

const app = express()
const PORT = process.env.PORT || 3000
const __dirname = resolve()

app.use(express.static(join(__dirname, '/assets')))
app.set('view engine', 'hbs')
app.set('views', join(__dirname, './templates'))
hbs.registerPartials(join(__dirname, './templates/partials'))

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

app.use('/api/auth', authRoute)
app.use('/api/cars', [auth, carRoute])
app.use('/api/routes', [auth, routeRoute])
app.use('/api/orders', [auth, orderRoute])
app.use('/', pageRoute)


app.listen(PORT, () => {
    console.log(infoLog(`Application is on port: ${PORT}`))
})
