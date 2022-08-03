const userRouter = require('express').Router();
const authController = require('../controllers/http/AuthContoller');
const validateMiddleware = require('../middlewares/http/ValidateMiddleware');

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
