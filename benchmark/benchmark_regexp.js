'use strict';

console.log('A\'s\ttime');
let regex = new RegExp('^(a+)+$');

for (let i = 1; i < 100; ++i) {
    const str = Array(i + 1).join('a') + 'b';
    const before = new Date();
    regex.test(str);
    const after = new Date();
    const time = after - before;
    console.log(`${i}\t${time}`);
}
