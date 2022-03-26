import {Router} from "express";
import {getOrder, getOrders, changeOrderStatus, createOrder} from "../controller/order.js";

const r = Router()

r.get('/', getOrders)
r.get('/:id', getOrder)
r.post('/', createOrder)
r.patch('/:id', changeOrderStatus)

export default r