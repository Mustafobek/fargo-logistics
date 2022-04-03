import {Router} from "express";

const r = Router()

r.get('/', (req, res) => res.render('login.hbs', {title: 'Login'}))
r.get('/main', (req, res) => res.render('main.hbs', {title: 'Login'}))
r.get('/create-order', (req, res) => res.render('create-order.hbs', {title: 'Login'}))



r.get('/*', (req, res) => res.render('404.hbs', {title: 'Page not found'}))

export default r