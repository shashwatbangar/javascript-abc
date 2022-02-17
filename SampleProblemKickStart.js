const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

let currentline = 0;
function readline(){
    return input[currentline++];
}

let T = readline();
for(let i = 1; i <= T; i++){
    let [N, M] = readline().split(' ');
    let arr = readline().split(' ');
    console.log(`Case #${i}: ${solve(M, arr)}`);
}

function solve(M, arr){
    let sum = 0;
    
    for(let candy of arr) {
        sum += +candy;
    }

    return sum % M;
}

