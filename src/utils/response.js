
export const errorRes = (res, data) => {
    return res.status(400).json({
        success: false,
        data
    })
}

export const successRes = (res, code, data) => {
    return res.status(code).json({
        success: true,
        data
    })
}