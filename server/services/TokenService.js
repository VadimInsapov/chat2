const jwt = require("jsonwebtoken");

class TokenService {
    static createAccessToken(user) {
        return jwt.sign({user}, process.env.JWT_SECRET_KEY, {expiresIn: "108h"});
    }
}

module.exports = TokenService;