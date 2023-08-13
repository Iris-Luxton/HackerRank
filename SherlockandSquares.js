// Watson will provide a starting and ending value that describe a range of integers, inclusive of the endpoints.
// Sherlock must determine the number of square integers within that range.

function squares(a, b) {
    // Write your code here
    let count = 0;
    // Calculate the square root of the starting value a and round up to the nearest integer
    const startSqrt = Math.ceil(Math.sqrt(a));
    console.log(startSqrt);
    // Calculate the square root of the ending value b and round down to the nearest integer
    const endSqrt = Math.floor(Math.sqrt(b));
    // Loop through all integer values within the range of square roots
    for (let i = startSqrt; i <= endSqrt; i++) {
        count++;
    }
    return count;
}

// There are three square integers in the range below, 24, 36, 49: 
let a = 24;
let b = 49;
console.log(squares(a, b));
// output 3;
