const express = require('express');
const mongoose = require('mongoose');

//Iniciando o App
const app = express();

//Iniciando o DB
mongoose.connect('mongodb://Localhost:27017/nodeapi', {useNewUrlParser: true});

//primeira rota
app.get('/',(req, res) => {
    res.send('Hello2 RocketSeat3');
});

app.listen(3001);