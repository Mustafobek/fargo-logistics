import {Router} from "express";
import {getRoute, getRoutes, createRoute, deleteRoute} from "../controller/route.js";

const r = Router()

r.get('/', getRoutes)
r.get('/:id', getRoute)
r.post('/', createRoute)
r.post('/:id', deleteRoute)

export default r