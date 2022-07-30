const validateMiddleware = require("../middlewares/ValidateMiddlware");
const chatRouter = require("express").Router();
const chatController = require('../controllers/ChatContoller');
const authMiddleware = require("../middlewares/AuthMiddlware");

chatRouter.post(
    '/',
    authMiddleware,
    chatController.validate("create"),
    validateMiddleware,
    chatController.create
);
module.exports = chatRouter;