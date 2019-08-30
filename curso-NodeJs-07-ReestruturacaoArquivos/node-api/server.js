const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
//Iniciando o App
const app = express();

//Iniciando o DB
mongoose.connect(
    'mongodb://Localhost:27017/nodeapi', 
    {useNewUrlParser: true}
);

requireDir('./src/models');

//Rotas
app.use('/api', require('./src/routes'));

app.listen(3003);
