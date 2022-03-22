import {errorLog} from "../utils/logger.js";
import {conflict, errorRes, notFound, successRes} from "../utils/response.js";
import {Car} from "../models/Car.js";


export const getCars = async (req, res) => {
    try {
        const cars = await Car.find({})
        return successRes(res, 200, {cars})
    } catch (err) {
        console.log(errorLog(err.message))
    }
}

export const getCar = async (req, res) => {
    try {
        const car = await Car.findOne({_id: req.params.id})

        if(!car) return notFound(res)

        return successRes(res, 200, {car})
    } catch (err) {
        console.log(errorLog(err.message))
    }
}

export const createCar = async (req, res) => {
    try {
        const carEx = await Car.findOne({number: req.body.number})

        if(carEx) return conflict(res)

        const car = new Car(req.body)
        await car.save()

        return successRes(res, 201, {car})
    } catch (err) {
        console.log(errorLog(err.message))
    }
}

export const changeCarStatus = async (req, res) => {
    try {
        const car = await Car.findOneAndUpdate(
            {_id: req.params.id},
            {status: req.body.status},
            {new: true}
        )

        return successRes(res, 200, {car})
    } catch (err) {
        console.log(errorLog(err.message))
    }
}

export const deleteCar = async (req, res) => {
    try {
        await Car.findOneAndUpdate(
            {_id: req.params.id},
            {deleted: true},
            {new: true}
        )

        return successRes(res, 200, {message: 'Deleted'})
    } catch (err) {
        console.log(errorLog(err.message))
    }
}