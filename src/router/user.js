import {Router} from "express";
import {getUser, login, register} from "../controller/user.js";

const r = Router()

r.get('/:id', getUser)
r.post('/login', login)
r.post('/register', register)

export default r