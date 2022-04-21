const express = require('express');
const cors = require('cors');
const app = express();

//config app expres
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(require('./routes'));

module.exports = app;