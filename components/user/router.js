const usersRouter = require('express').Router();

const { getUser, updateUser } = require('./controller');
const { validateUserInfo } = require('./validators');

usersRouter.get('/me', getUser);
usersRouter.patch('/me', validateUserInfo, updateUser);

module.exports = usersRouter;
