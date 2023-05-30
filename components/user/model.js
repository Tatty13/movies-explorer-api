const mongoose = require('mongoose');

const { emailPattern } = require('../../utils/patterns');
const { findUserByCredentials } = require('../../utils');

mongoose.set('toObject', { useProjection: true });
mongoose.set('toJSON', { useProjection: true });

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'email не указан'],
    unique: [true, 'Пользователь с указанным email уже существует'],
    validate: {
      validator: (v) => emailPattern.test(v),
      message: 'Email не валиден',
    },
  },
  password: {
    type: String,
    required: [true, 'Пароль не указан'],
    select: false,
  },
  name: {
    type: String,
    required: [true, 'Имя не указанo'],
    minlength: [2, 'Длина имени не должна быть короче двух символов'],
    maxlength: [30, 'Длина имени не должна превышать 30 символов'],
  },
});

userSchema.statics = { findUserByCredentials };

module.exports = mongoose.model('user', userSchema);
