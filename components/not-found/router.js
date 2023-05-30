const notFoundRouter = require('express').Router();

const handleUnknownRoute = require('./controller');

notFoundRouter.use('*', handleUnknownRoute);

module.exports = notFoundRouter;
