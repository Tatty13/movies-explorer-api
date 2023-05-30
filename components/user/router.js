const usersRouter = require('express').Router();
const { getUser, updateUser } = require('./controller');

usersRouter.get('/me', getUser);
usersRouter.patch('/me', updateUser);

module.exports = usersRouter;
