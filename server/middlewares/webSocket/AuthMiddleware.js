const TokenService = require("../../services/TokenService");
module.exports = (socket, next) => {
    try {
        const existsToken = socket.handshake.query && socket.handshake.query.auth;
        if (!existsToken) {
            next(new Error('Authentication error'));
            return;
        }
        const accessToken = socket.handshake.query.auth;
        const user = TokenService.checkTokenAndGetUser(accessToken);
        socket.user = {...user};
        next();
    } catch (e) {
        next(e);
    }
}
