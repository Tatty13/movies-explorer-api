const moviesRouter = require('express').Router();

const { getMovies, createMovie, deleteMovieById } = require('./controller');
const { validateMovieData, validateMovieId } = require('./validators');

moviesRouter.get('/', getMovies);
moviesRouter.post('/', validateMovieData, createMovie);
moviesRouter.delete('/:movieId', validateMovieId, deleteMovieById);

module.exports = moviesRouter;
