/**
 * Usage:
 * > node fibonacci_sequence.js
 * > node fibonacci_sequence.js 10
 */

function fib(numbers) {
    let n1 = 1;
    let n2 = 1;
    let sum = 1;

    for (let i = 0; i < numbers; i++) {
        if (i < 2) {
            sum = 1;
        } else {
            sum = n1 + n2;
            n1 = n2;
            n2 = sum;
        }
        console.log(sum);
    }
}

let fibNumbers = 20;
if (process.argv.slice(2).length) {
    fibNumbers = Number(process.argv.slice(2)[0]);
}

fib(fibNumbers);