const jwt = require("jsonwebtoken");
const ApiError = require("../errors/ApiError");

class TokenService {
    static createAccessToken(user) {
        return jwt.sign({user}, process.env.JWT_SECRET_KEY, {expiresIn: "108h"});
    }

    static checkTokenAndGetUser(accessToken) {
        let returningUser = "";
        jwt.verify(accessToken, process.env.JWT_SECRET_KEY, (err, data) => {
            if (err) {
                throw ApiError.UnauthorizedRequest("Пользователь не авторизован!", err);
            }
            const {user} = data;
            returningUser = user;
        });
        return returningUser;
    }
}

module.exports = TokenService;