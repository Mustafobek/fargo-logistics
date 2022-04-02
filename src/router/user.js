import {Router} from "express";
import {getUser, getUsers, login, register} from "../controller/user.js";

const r = Router()

r.get('/:id', getUser)
r.get('/', getUsers)
r.post('/login', login)
r.post('/register', register)

export default r