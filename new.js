const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let currentline = 0;
function readline(){
    return input[currentline++];
}

let t = readline();
for(let i = 1; i <= t; i++){
    let str = readline().split('');
    console.log(str);
    console.log(`Case #${i}: ${solve(str)}`);
}

function solve(str){
    let ones = 0;
    let zeroes = 0;

    for(let char of str) {
        if(char === '0') zeroes++;
        else ones++
    }

    if(zeroes > ones) return ones;
    else return zeroes;
}
