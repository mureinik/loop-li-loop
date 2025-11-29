'use strict';

const express = require('express');
const app = express();
app.use(express.text({type: '*/*'}));

const jsYaml = require('js-yaml');

app.post('/yaml', (req, res) => {
    const parsed = jsYaml.load(req.body);
    res.end('expanded size: ' + JSON.stringify(parsed).length);
});

app.listen(3000, () => console.log('Listening on port 3000'));
