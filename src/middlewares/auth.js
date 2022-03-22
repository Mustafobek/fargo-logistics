import {errorLog} from "../utils/logger.js";
import {decodeToken} from "../utils/authToken.js";
import {User} from "../models/User.js";
import {errorRes} from "../utils/response.js";

export const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.replace('Bearer ', '')
        const decode = decodeToken(token)
        const user = await User.findOne({_id: decode._id})

        if(!user) {
            return errorRes(res, {message: 'Invalid token'})
        }

        req.user = user
        req.token = token

        next()
    } catch (err) {
        console.log(errorLog('TOKEN_ERROR ' + err.message))
    }
}