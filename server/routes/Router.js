const router = require('express').Router();
const userRouter = require('./UserRouter');
const authRouter = require('./AuthRouter');

router.use("/users", userRouter);
router.use("/auth", authRouter);


module.exports = router;
