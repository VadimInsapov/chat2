const ApiError = require('../../errors/ApiError');
module.exports = function (err, req, res, next) {
    console.error(err);
    if (err instanceof ApiError) {
        res.status(err.status).json({
            message: err.message,
            errors: err.errors
        })
        return;
    }
    return res.status(500).json({
        message: "Неизвестная ошибка!",
    })
}