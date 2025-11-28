'use strict';

const express = require('express');
const app = express();

app.get('/regexp', (req, res) => {
    const regexp = new RegExp(req.query.regexp);
    const text = req.query.text;
    res.end(regexp.test(text) ? 'Match!' : 'No match');
});

app.listen(3000, () => console.log('Listening on port 3000'));
