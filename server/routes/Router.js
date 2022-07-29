const router = require('express').Router();
const userRouter = require('./UserRouter');
const authRouter = require('./AuthRouter');
const friendsRouter = require('./FriendsRouter');
const chatRouter = require('./ChatRouter');

router.use("/users", userRouter);
router.use("/auth", authRouter);
router.use("/friends", friendsRouter);
router.use("/chats", chatRouter);


module.exports = router;
