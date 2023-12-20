// src/app.js
const express = require('express');
const { directorRoute, userRouter, filmRouter, loginRouter } = require('./routes');
const app = express();

app.use(express.json());

app.use('/films', filmRouter);

app.use('/directors', directorRoute);

app.use('/login', loginRouter)

app.use('/user', userRouter);

module.exports = app;