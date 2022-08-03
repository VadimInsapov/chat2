const ApiError = require('../../errors/ApiError');
module.exports = function (err, socket) {
    console.error(err);
    if (err instanceof ApiError) {
        socket.emit('exception', {
            message: err.message,
            errors: err.errors
        });
        return;
    }
    return socket.emit('exception', {
        message: err.message,
    });
}