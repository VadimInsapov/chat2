const jwt = require('jsonwebtoken');
const {check} = require("express-validator");
const TokenService = require("../../services/TokenService");
const ApiError = require("../../errors/ApiError");
module.exports = function (req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return next(
                ApiError.UnauthorizedRequest("Не хватает данных для получения ресурса!")
            )
        }
        const accessToken = authHeader.split(' ')[1];
        if (!accessToken) {
            next(ApiError.UnauthorizedRequest("Не удалось найти токен!"))
        }
        const user = TokenService.checkTokenAndGetUser(accessToken);
        req.user = {...user};
        next();
    } catch (e) {
        next(e);
    }

}