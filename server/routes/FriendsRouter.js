const userController = require("../controllers/UserContoller");
const validateMiddleware = require("../middlewares/ValidateMiddlware");
const authMiddleware = require("../middlewares/AuthMiddlware");
const friendsRouter = require("express").Router();

friendsRouter.post(
    '/',
    authMiddleware,
    userController.validate("addOrDeleteFriend"),
    validateMiddleware,
    userController.addFriend
);
friendsRouter.delete(
    '/',
    authMiddleware,
    userController.validate("addOrDeleteFriend"),
    validateMiddleware,
    userController.deleteFriend
);
module.exports = friendsRouter;
