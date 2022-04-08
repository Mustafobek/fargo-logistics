import {Router} from "express";
import {auth} from "../middlewares/auth.js";

const r = Router()

// USER
r.get('/', (req, res) => res.render('login.hbs', {title: 'Login'}))
r.get('/main', (req, res) => res.render('main.hbs', {title: 'Logistics'}))
r.get('/create-order', (req, res) => res.render('create-order.hbs', {title: 'Create'}))
r.get('/completed', (req, res) => res.render('completed.hbs', {title: 'Completeds'}))
r.get('/order/:id', (req, res) => res.render('order.hbs', {title: 'Order'}))


// ADMIN
r.get('/ad/main', (req, res) => res.render('admin/main.hbs', {title: 'Admin'}))
r.get('/ad/create-car-company', (req, res) => res.render('admin/create-car-company.hbs', {title: 'Admin'}))
r.get('/ad/create-car', (req, res) => res.render('admin/create-car.hbs', {title: 'Admin'}))
r.get('/ad/create-route', (req, res) => res.render('admin/create-route.hbs', {title: 'Admin'}))


// ERROR
r.get('/*', (req, res) => res.render('404.hbs', {title: 'Page not found'}))

export default r