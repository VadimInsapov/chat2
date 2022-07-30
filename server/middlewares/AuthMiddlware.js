const jwt = require('jsonwebtoken');
const {check} = require("express-validator");
const TokenService = require("../services/TokenService");
module.exports = function (req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            res.status(401);
        }
        const user = TokenService.checkTokenAndGetUser(authHeader);
        req.user = {...user};
        next();
    } catch (e) {
        console.log(e.message);
        res.status(400).json({errors: [{msg: "Пользователь не авторизован!"}]});
    }

}