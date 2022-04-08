import {errorLog} from "../utils/logger.js";
import {errorRes, notFound, successRes} from "../utils/response.js";
import {Route} from "../models/Route.js";




export const getRoutes = async (req, res) => {
    try {
        const routes = await Route.find({deleted: false})
        return successRes(res, 200, {routes})
    } catch (err) {
        console.log(errorLog(err.message))
    }
}

export const getRoute = async (req, res) => {
    try {
        const route = await Route.findOne({_id: req.params.id, deleted: false})

        if(!route) return notFound(res)

        return successRes(res, 200, {route})
    } catch (err) {
        console.log(errorLog(err.message))
    }
}

export const createRoute = async (req, res) => {
    try {
        const route = new Route({
            cities: req.body.cities,
            periods: req.body.periods,
            shortname: req.body.shortname
        })

        await route.save()

        return successRes(res, 201, {route})
    } catch (err) {
        console.log(errorLog(err.message))
    }
}

export const deleteRoute = async (req, res) => {
    try {
        await Route.findOneAndUpdate(
            {_id: req.params.id},
            {deleted: true},
            {new: true}
        )

        return successRes(res, 200, {})
    } catch (err) {
        console.log(errorLog(err.message))
    }
}