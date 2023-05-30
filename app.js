const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const { PORT, BD_URL } = require('./configs');
const limiter = require('./configs/limiter-config');
const router = require('./routes');
const handleError = require('./middlewares.js/handleError');

const app = express();
mongoose.connect(BD_URL, {
  useNewUrlParser: true,
});

app.use(limiter);
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(router);
app.use(handleError);

app.listen(PORT);
