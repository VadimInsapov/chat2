const userRouter = require('express').Router();
const authController = require('../controllers/authContoller');
const validateMiddleware = require('../middlewares/validateMiddlware');

userRouter.post(
    '/login',
    authController.validate(),
    validateMiddleware,
    authController.login
);

userRouter.post(
    '/registration',
    authController.validate(),
    validateMiddleware,
    authController.registration
);

module.exports = userRouter;
