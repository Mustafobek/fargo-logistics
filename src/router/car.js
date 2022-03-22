import {Router} from "express";
import {getCar, getCars, createCar, changeCarStatus, deleteCar} from "../controller/car.js";

const r = Router()

r.get('/', getCars)
r.get('/:id', getCar)
r.post('/', createCar)
r.patch('/:id', changeCarStatus)
r.post('/:id', deleteCar)

export default r