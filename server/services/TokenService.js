const jwt = require("jsonwebtoken");

class TokenService {
    static createAccessToken(user) {
        return jwt.sign({user}, process.env.JWT_SECRET_KEY, {expiresIn: "108h"});
    }

    static checkTokenAndGetUser(authHeader) {
        const accessToken = authHeader.split(' ')[1];
        if (!accessToken) {
            throw new Error("Не удалось найти токен!");
        }
        let returningUser = "";
        jwt.verify(accessToken, process.env.JWT_SECRET_KEY, (err, data) => {
            if (err) {
                throw new Error(err);
            }
            const {user} = data;
            returningUser = user;
        });
        return returningUser;
    }
}

module.exports = TokenService;