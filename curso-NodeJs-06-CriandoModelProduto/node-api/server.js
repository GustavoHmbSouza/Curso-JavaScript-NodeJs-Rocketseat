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

const Product = mongoose.model('Product');


//primeira rota
app.get('/',(req, res) => {
    Product.create
    ({
        title: 'React Native',
        description: 'Build native apps with React',
        url: 'Http://github.com/facebook/react-native'
    })

    return res.send('Hello2 RocketSeat'); 
});

app.listen(3002);
