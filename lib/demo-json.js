'use strict';

const express = require('express');
const app = express();
app.use(express.json());

app.post('/json', (req, res) => {
    res.end(Object.keys(req.body).length + ' keys in the payload');
});

app.listen(3000, () => console.log('Listening on port 3000'));
