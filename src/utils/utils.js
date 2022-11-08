const messageBuilder = (statusCode, message, body) => {
    return {
        "statusCode": statusCode,
        "message": message,
        "data": body
    }
}


module.exports = { messageBuilder }