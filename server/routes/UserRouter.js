const userController = require("../controllers/UserContoller");
const validateMiddleware = require("../middlewares/ValidateMiddleware");
const authMiddleware = require("../middlewares/AuthMiddleware");
const userRouter = require("express").Router();

userRouter.get(
    '/friends',
    authMiddleware,
    validateMiddleware,
    userController.getFriends
);
userRouter.get(
    '/search-user',
    authMiddleware,
    userController.validate("getUsersByName"),
    validateMiddleware,
    userController.getUsersByName
);
module.exports = userRouter;
