
export const errorRes = (res, data) => {
    return res.json({
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

export const notFound = (res) => {
    return res.status(404).json({
        success: false,
        message: 'Not found'
    })
}

export const conflict = res => {
    return res.status(409).json({
        success: false,
        message: 'Conflict models'
    })
}