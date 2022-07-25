const userController = require("../controllers/userContoller");
const validateMiddleware = require("../middlewares/validateMiddlware");
const userRouter = require("express").Router();

userRouter.put(
    '/add-friend',
    userController.validate("addFriend"),
    validateMiddleware,
    userController.addFriend
);
module.exports = userRouter;
