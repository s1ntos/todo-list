const express = require('express');
const router = express.Router();

const app = express();

app.use(express.json()); // Para aceitar JSON nas requisições
app.use('/', router);

module.exports = app;


