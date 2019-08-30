const express = require('express');

const app = express();

app.get('/',(req, res) => {
    res.send('Hello2 RocketSeat');
});

app.listen(3001);