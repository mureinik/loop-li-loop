'use strict';

const express = require('express');
const app = express();
app.use(express.text({type: '*/*'}));

const libxmljs = require('libxmljs2');
const opts = {noent: true, nocdata: true, noblanks: true, huge: true};

app.post('/xml', (req, res) => {
    const parsed = libxmljs.parseXml(req.body, opts);
    res.end(parsed.childNodes().length + ' child nodes in the payload');
});

app.listen(3000, () => console.log('Listening on port 3000'));
