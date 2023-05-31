const router = require('express').Router();

const usersRouter = require('../components/user/router');
const moviesRouter = require('../components/movie/router');
const notFoundRouter = require('../components/not-found/router');
const { createUser, signIn, signOut } = require('../components/user/controller');
const { auth } = require('../middlewares');
const { validateUserCredentialOnSignUp, validateUserCredentialOnSignIn } = require('../components/user/validators');

router.post('/signup', validateUserCredentialOnSignUp, createUser);
router.post('/signin', validateUserCredentialOnSignIn, signIn);
router.post('/signout', auth, signOut);

router.use('/users', auth, usersRouter);
router.use('/movies', auth, moviesRouter);
router.use(auth, notFoundRouter);

module.exports = router;
