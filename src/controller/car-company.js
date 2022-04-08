import {errorLog} from "../utils/logger.js";
import {conflict, errorRes, notFound, successRes} from "../utils/response.js";
import {CarCompany} from "../models/Car-company.js";


export const getCompanies = async (req, res) => {
    try {
        const companies = await CarCompany.find({deleted: false})
        return successRes(res, 200, {companies})
    } catch (err) {
        console.log(errorLog(err.message))
    }
}

export const getCompany = async (req, res) => {
    try {
        const company = await CarCompany.findOne({_id: req.params.id, deleted: false})

        if(!company) return notFound(res)

        return successRes(res, 200, {company})
    } catch (err) {
        console.log(errorLog(err.message))
    }
}

export const createCompany = async (req, res) => {
    try {
        const compEx = await CarCompany.findOne({name: req.body.name})

        if(compEx) return conflict(res)

        const company = new CarCompany(req.body)
        await company.save()

        return successRes(res, 201, {company})
    } catch (err) {
        console.log(errorLog(err.message))
    }
}

export const deleteCompany = async (req, res) => {
    try {
        await CarCompany.findOneAndUpdate(
            {_id: req.params.id},
            {deleted: true},
            {new: true}
        )

        return successRes(res, 200, {message: 'Deleted'})
    } catch (err) {
        console.log(errorLog(err.message))
    }
}