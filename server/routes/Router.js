const router = require('express').Router();
const userRouter = require('./UserRouter');
const authRouter = require('./AuthRouter');
const friendsRouter = require('./FriendsRouter');

router.use("/users", userRouter);
router.use("/auth", authRouter);
router.use("/friends", friendsRouter);


module.exports = router;
