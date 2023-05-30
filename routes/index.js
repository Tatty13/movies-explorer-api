const router = require('express').Router();

const usersRouter = require('../components/user/router');
const moviesRouter = require('../components/movie/router');
const notFoundRouter = require('../components/not-found/router');

router.use('/users', usersRouter);
router.use('/movies', moviesRouter);
router.use(notFoundRouter);

module.exports = router;
