const router = require('express').Router();

const usersRouter = require('../components/user/router');

router.use('/users', usersRouter);

module.exports = router;
