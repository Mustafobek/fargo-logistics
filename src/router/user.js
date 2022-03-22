import {Router} from "express";
import {login, register} from "../controller/user.js";

const r = Router()

r.post('/login', login)
r.post('/register', register)

export default r