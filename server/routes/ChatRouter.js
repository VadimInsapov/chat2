const validateMiddleware = require("../middlewares/ValidateMiddleware");
const chatRouter = require("express").Router();
const chatController = require('../controllers/ChatContoller');
const authMiddleware = require("../middlewares/AuthMiddleware");

chatRouter.post(
    '/',
    authMiddleware,
    chatController.validate("create"),
    validateMiddleware,
    chatController.create
);
chatRouter.post(
    '/add-user',
    authMiddleware,
    chatController.validate("addUser"),
    validateMiddleware,
    chatController.addUser
);
chatRouter.put(
    '/appoint-role',
    authMiddleware,
    chatController.validate("appointUserRoleInChat"),
    validateMiddleware,
    chatController.appointUserRoleInChat
);
module.exports = chatRouter;
