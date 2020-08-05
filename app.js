require('dotenv').config();

const express = require('express');

const { json } = require('body-parser');

const mongoose = require('mongoose');

const { celebrate, Joi, errors } = require('celebrate');

// const { login, createUser } = require('./controllers/users');

const app = express();

// const auth = require('./middlewares/auth');

// const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3042 } = process.env;
