const userController = require("../controllers/UserContoller");
const validateMiddleware = require("../middlewares/ValidateMiddleware");
const authMiddleware = require("../middlewares/AuthMiddleware");
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
