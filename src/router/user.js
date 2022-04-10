import {Router} from "express";
import {getUser, getUsers, login, register} from "../controller/user.js";
import {auth} from "../middlewares/auth.js";

const r = Router()

r.get('/:id', auth, getUser)
r.get('/', auth, getUsers)
r.post('/login', login)
r.post('/register', register)

export default r