import {errorLog} from "../utils/logger.js";
import {errorRes, notFound, successRes} from "../utils/response.js";
import {User} from "../models/User.js";
import bcrypt from 'bcryptjs'
import {generateToken} from "../utils/authToken.js";

export const login = async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username})

        if(!user) {
            return errorRes(res, {message: 'User not found'})
        }

        const validPw = await bcrypt.compare(req.body.password, user.password)

        if(!validPw) {
            return errorRes(res, {message: 'Invalid password'})
        }

        const token = generateToken({
            _id: user._id,
            username: user.username,
            role: user.role
        })

        return successRes(res, 200, {token, user})
    } catch (err) {
        console.log(errorLog(err.message))
    }
}


export const register = async (req, res) => {
    try {
        const candidate = await User.findOne({username: req.body.username})

        if(candidate) {
            return errorRes(res, {message: 'Username exists'})
        }

        const user = new User({
            ...req.body,
            password: await bcrypt.hash(req.body.password, 10)
        })
        await user.save()

        return successRes(res, 201, {})
    } catch (err) {
        console.log(errorLog(err.message))
    }
}


export const getUser = async (req, res) => {
    try {
        const user = await User.findOne({_id: req.params.id})
        if(!user) return notFound(res)

        return successRes(res, 201, {user})
    } catch (err) {
        console.log(errorLog(err.message))
    }
}

export const getUsers = async (req, res) => {
    try {
        const filter = {}

        if (req.query.role) {
            filter.role = req.query.role
        }

        const users = await User.find(filter)

        return successRes(res, 201, {users})
    } catch (err) {
        console.log(errorLog(err.message))
    }
}
