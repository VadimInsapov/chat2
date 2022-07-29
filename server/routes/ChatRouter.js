const validateMiddleware = require("../middlewares/ValidateMiddlware");
const chatRouter = require("express").Router();
const chatController = require('../controllers/ChatContoller');

chatRouter.post(
    '/',
    chatController.validate("create"),
    validateMiddleware,
    chatController.create
);
module.exports = chatRouter;
