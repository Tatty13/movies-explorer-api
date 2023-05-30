const mongooseError = require('mongoose').Error;

const User = require('./model');
const { NotFoundError, BadRequestError, ConflictError } = require('../../errors');
const { generateHash, generateToken, handleMongooseValidationError } = require('../../utils');
const { CREATED_201 } = require('../../utils/constants');
const { cookieTokenOpt } = require('../../configs/cookie-options');

async function getUser(req, res, next) {
  const { _id } = req.user;
  try {
    const user = await User.findById(_id);
    if (!user) throw new NotFoundError('Пользователь не найден');

    res.send(user);
  } catch (err) {
    next(err);
  }
}

async function updateUser(req, res, next) {
  const { name, email } = req.body;
  const { _id } = req.user;
  try {
    const user = await User.findByIdAndUpdate(
      _id,
      { name, email },
      { new: true, runValidators: true },
    );

    if (!user) throw new NotFoundError('Пользователь не найден');

    res.send(user);
  } catch (err) {
    if (err instanceof mongooseError.ValidationError) {
      handleMongooseValidationError(err, next);
      return;
    }
    next(err);
  }
}

async function createUser(req, res, next) {
  const { email, password, name } = req.body;
  try {
    const hash = await generateHash(password);
    const user = await User.create({ email, name, password: hash });

    res.status(CREATED_201).send({ user });
  } catch (err) {
    if (err.code === 11000) {
      next(new ConflictError('Пользователь с указанным email уже существует'));
      return;
    }
    if (err instanceof mongooseError.ValidationError) {
      handleMongooseValidationError(err, next);
      return;
    }
    next(err);
  }
}

async function signIn(req, res, next) {
  const { email, password } = req.body;
  try {
    const { _id } = await User.findUserByCredentials(email, password);
    const token = generateToken({ _id });

    res
      .cookie('token', token, cookieTokenOpt)
      .send({ message: 'Авторизация прошла успешно' });
  } catch (err) {
    if (err instanceof mongooseError.ValidationError) {
      handleMongooseValidationError(err, next);
      return;
    }
    next(err);
  }
}

module.exports = {
  getUser,
  updateUser,
  createUser,
  signIn,
};
