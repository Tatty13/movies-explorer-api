const express = require('express');
const mongoose = require('mongoose');

const { PORT, BD_URL } = require('./utils/config');
const limiter = require('./utils/limiter-config');

const app = express();
mongoose.connect(BD_URL, {
  useNewUrlParser: true,
});

app.use(limiter);

app.listen(PORT);
