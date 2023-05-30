const mongooseError = require('mongoose').Error;

const User = require('./model');
const { NotFoundError, BadRequestError } = require('../../errors');
const { generateHash } = require('../../utils');
const { CREATED_201 } = require('../../utils/constants');

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
      const message = Object.values(err.errors).map((e) => e.message).join('. ');
      next(new BadRequestError(message));
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
    next(err);
  }
}

module.exports = {
  getUser,
  updateUser,
  createUser,
};
