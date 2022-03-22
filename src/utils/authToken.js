import jwt from 'jsonwebtoken'

export const generateToken = (payload, options = {}) => {
    return jwt.sign(payload, process.env.JWT_KEY, options)
}


export const decodeToken = (token) => {
    return jwt.verify(token, process.env.JWT_KEY)
}