const mongooseError = require('mongoose').Error;

const Movie = require('./model');
const { CREATED_201 } = require('../../utils/constants');
const { handleMongooseValidationError, handleMongooseCastError } = require('../../utils');
const { NotFoundError, ForbiddenError } = require('../../errors');

async function getMovies(_, res, next) {
  try {
    const movies = await Movie.find({});
    res.send(movies);
  } catch (err) {
    next(err);
  }
}

async function createMovie(req, res, next) {
  const { _id } = req.user;
  try {
    const movie = await Movie.create({ ...req.body, owner: _id });
    res.status(CREATED_201).send(movie);
  } catch (err) {
    if (err instanceof mongooseError.ValidationError) {
      handleMongooseValidationError(err, next);
      return;
    }
    next(err);
  }
}

async function deleteMovieById(req, res, next) {
  const { movieId } = req.params;
  const userId = req.user._id;
  try {
    const movie = await Movie.findById(movieId);
    if (!movie) throw new NotFoundError('Фильм не найден');
    if (movie.owner._id.toString() !== userId) throw new ForbiddenError('Недостаточно прав для удаления фильма');

    await movie.deleteOne();
    res.send({ message: 'Фильм удален' });
  } catch (err) {
    if (err instanceof mongooseError.CastError) {
      handleMongooseCastError(err, next);
      return;
    }
    next(err);
  }
}

module.exports = {
  getMovies,
  createMovie,
  deleteMovieById,
};
