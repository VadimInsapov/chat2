class ApiError extends Error {
    constructor(status, message, errors) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static BadRequest(message, errors = []) {
        return new ApiError(404, message, errors);
    }

    static UnauthorizedRequest(message, errors = []) {
        return new ApiError(401, message, errors);
    }
}

module.exports = ApiError;