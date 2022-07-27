const userController = require("../controllers/UserContoller");
const validateMiddleware = require("../middlewares/ValidateMiddlware");
const userRouter = require("express").Router();

userRouter.put(
    '/add-friend',
    userController.validate("addFriend"),
    validateMiddleware,
    userController.addFriend
);
userRouter.get(
    '/friends/:userId',
    userController.validate("getFriends"),
    validateMiddleware,
    userController.getFriends
);
userRouter.get(
    '/search-user',
    userController.validate("getUsersByName"),
    validateMiddleware,
    userController.getUsersByName
);
module.exports = userRouter;
