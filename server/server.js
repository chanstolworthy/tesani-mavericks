require('dotenv').config();

const express = require('express');
const createInitialSession = require(`${__dirname}/middleware/checkSession.js`);
const controller = require('./controllers/controller')
const cors = require('cors');
const bodyParser = require('body-parser')
const session = require('session')
const massive = require('massive')

const app = express();
app.use(bodyParser());
app.use(cors());

