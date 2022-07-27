const userController = require("../controllers/UserContoller");
const validateMiddleware = require("../middlewares/ValidateMiddlware");
const friendsRouter = require("express").Router();

friendsRouter.post(
    '/',
    userController.validate("addOrDeleteFriend"),
    validateMiddleware,
    userController.addFriend
);
friendsRouter.delete(
    '/',
    userController.validate("addOrDeleteFriend"),
    validateMiddleware,
    userController.deleteFriend
);
module.exports = friendsRouter;
