const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

app.get('/lorem', (req, res) => {
    res.end(fs.readFileSync(path.join(__dirname, 'lorem.txt')));
});

app.listen(3000, () => console.log('Listening on port 3000'));
