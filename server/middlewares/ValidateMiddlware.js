const {validationResult} = require('express-validator');
module.exports = function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({errors: errors.array().map(item => ({msg: item.msg}))});
        return;
    }
    next();
}