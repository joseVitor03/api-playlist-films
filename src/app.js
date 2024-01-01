// src/app.js
const express = require('express');
const cors = require('cors')
const { directorRoute, userRouter, filmRouter, loginRouter, registerRouter } = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/films', filmRouter);

app.use('/directors', directorRoute);

app.use('/login', loginRouter);

app.use('/register', registerRouter);

app.use('/user', userRouter);

module.exports = app;