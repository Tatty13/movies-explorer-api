const moviesRouter = require('express').Router();

const { getMovies, createMovie, deleteMovieById } = require('./controller');

moviesRouter.get('/', getMovies);
moviesRouter.post('/', createMovie);
moviesRouter.delete('/:movieId', deleteMovieById);

module.exports = moviesRouter;
