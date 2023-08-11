// There will be two arrays of integers. Determine all integers that satisfy the following two conditions:
// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array

function getTotalX(a, b) {
    // Write your code here
    let counter = 0;
    if (a.length === 1) {  // this is an edge case where length of array is 1, 
        // this will lead to infinite loop, therefore we can start from a[0] instead of Math.min(...a)
        for (let i = a[0]; i <= Math.max(...b); i += a[0]) {
            if (b.every((item) => item % i === 0)) {
                counter += 1;
            }
        }
    } else {
        let mina = Math.min(...a); // have to start from min a and we only check for multiple of a
        for (let i = mina; i < Math.max(...b); i += mina) {
            if (b.every((item) => item % i === 0)) {
                // check every items in b to make sure they are all divisible by i from a
                // this will make sure that i is a factor of all elements in b
                if (a.every((item) => i % item === 0)) {
                    // then we check for a again to make sure i is a multiple of all elements in array a
                    counter += 1
                }
            }
        }
    }

    return counter;
}

let a = [2, 4];
let b = [16, 32, 96];
console.log(getTotalX(a, b));
// output 3
// how does it work: understand that The greatest common factor/divisor (GCF) is the largest number that is a factor of two or more numbers,
// and the lowest common multiple (LCM) is the smallest number that is a multiple of two or more numbers.
