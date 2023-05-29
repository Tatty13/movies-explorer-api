const mongoose = require('mongoose');

const { isUrl } = require('../../utils');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, 'Cтрана не указана'],
  },
  director: {
    type: String,
    required: [true, 'Pежиссёр не указан'],
  },
  duration: {
    type: Number,
    required: [true, 'Длительность фильма не указана'],
  },
  year: {
    type: String,
    required: [true, 'Год выпуска фильма не указан'],
  },
  description: {
    type: String,
    required: [true, 'Описание фильма не указано'],
  },
  image: {
    type: String,
    required: [true, 'Ссылка на постер к фильму не указана'],
    validate: {
      validator: isUrl,
      message: 'Ссылка на постер не валидна',
    },
  },
  trailerLink: {
    type: String,
    required: [true, 'Ссылка на трейлер фильма не указана'],
    validate: {
      validator: isUrl,
      message: 'Ссылка на трейлер не валидна',
    },
  },
  thumbnail: {
    type: String,
    required: [true, 'Ссылка на мини-постер к фильму не указана'],
    validate: {
      validator: isUrl,
      message: 'Ссылка на мини-постер не валидна',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'Пользователь не указан'],
  },
  movieId: {
    type: Number,
    required: [true, 'ID не указан'],
  },
  nameRU: {
    type: String,
    required: [true, 'Название фильма на русском языке не указано'],
  },
  nameEN: {
    type: String,
    required: [true, 'Название фильма на английском языке не указано'],
  },
});

module.exports = mongoose.model('movie', movieSchema);
