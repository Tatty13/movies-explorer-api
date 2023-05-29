const express = require('express');

const { PORT } = require('./utils/config');
const limiter = require('./utils/limiter-config');

const app = express();

app.use(limiter);

app.listen(PORT);
