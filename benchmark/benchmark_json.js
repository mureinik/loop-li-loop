console.log('Length\tTime');
for (let i = 1024; i <= 1024 * 1024 ; i += 1024) {
    const str = '"' + Array(i + 1).join('a') + '"';
    const before = new Date();
    for (let j = 1; j < 100; ++j) {
        JSON.parse(str);
    }
    const after = new Date();
    console.log(`${i}\t${after-before}`);
}
