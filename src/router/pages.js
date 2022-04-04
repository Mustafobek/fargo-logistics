import {Router} from "express";

const r = Router()

r.get('/', (req, res) => res.render('login.hbs', {title: 'Login'}))
r.get('/main', (req, res) => res.render('main.hbs', {title: 'Logistics'}))
r.get('/create-order', (req, res) => res.render('create-order.hbs', {title: 'Create'}))
r.get('/completed', (req, res) => res.render('completed.hbs', {title: 'Completeds'}))


r.get('/order/:id', (req, res) => res.render('order.hbs', {title: 'Order'}))

r.get('/*', (req, res) => res.render('404.hbs', {title: 'Page not found'}))

export default r