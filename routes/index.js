const router = require('express').Router();

const usersRouter = require('../components/user/router');
const moviesRouter = require('../components/movie/router');

router.use('/users', usersRouter);
router.use('/movies', moviesRouter);

module.exports = router;
