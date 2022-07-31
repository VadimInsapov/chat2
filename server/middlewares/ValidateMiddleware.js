const {validationResult} = require('express-validator');
const ApiError = require("../errors/ApiError");
module.exports = function (req, res, next) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return next(ApiError.BadRequest("Ошибка валидации запроса!", errors.array()));
    }
    next();
}