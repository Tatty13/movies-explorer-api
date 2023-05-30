const router = require('express').Router();

const usersRouter = require('../components/user/router');
const moviesRouter = require('../components/movie/router');
const notFoundRouter = require('../components/not-found/router');
const { createUser } = require('../components/user/controller');

router.post('/signup', createUser);

router.use('/users', usersRouter);
router.use('/movies', moviesRouter);
router.use(notFoundRouter);

module.exports = router;
