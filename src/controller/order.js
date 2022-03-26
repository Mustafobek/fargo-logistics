import {errorLog} from "../utils/logger.js";
import {errorRes, notFound, successRes} from "../utils/response.js";
import {Order} from "../models/Order";



export const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({})

        return successRes(res, 200, {orders})
    } catch (err) {
        console.log(errorLog(err.message))
    }
}

export const getOrder = async (req, res) => {
    try {
        const order = await Order.findOne({_id: req.params.id})

        if(!order) {
            return notFound(res)
        }

        return successRes(res, 200, {order})
    } catch (err) {
        console.log(errorLog(err.message))
    }
}

export const createOrder = async (req, res) => {
    try {
        const order = new Order(req.body)
        await order.save()

        return successRes(res, 201, {order})
    } catch (err) {
        console.log(errorLog(err.message))
    }
}

export const changeOrderStatus = async (req, res) => {
    try {
        const order = await Order.findOneAndUpdate(
            {_id: req.params.id},
            {status: req.body.status},
            {new: true}
        )

        return successRes(res, 200, {order})
    } catch (err) {
        console.log(errorLog(err.message))
    }
}