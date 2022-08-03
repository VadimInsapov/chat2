const validateMiddleware = require("../middlewares/http/ValidateMiddleware");
const chatRouter = require("express").Router();
const chatController = require('../controllers/http/ChatContoller');
const authMiddleware = require("../middlewares/http/AuthMiddleware");

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
    chatController.appointUserRole
);
chatRouter.delete(
    '/delete-user',
    authMiddleware,
    chatController.validate("deleteUser"),
    validateMiddleware,
    chatController.deleteUser
);
chatRouter.get(
    '/:chatId',
    authMiddleware,
    chatController.validate("getUsers"),
    validateMiddleware,
    chatController.getUsers
);
module.exports = chatRouter;
