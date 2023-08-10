// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
// Print the decimal value of each fraction on a new line with 6 places after the decimal.

function plusMinus(arr) {
    // Write your code here
    const n = arr.length;
    let positive = 0;
    let negative = 0;
    let zero = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            positive++
        } else if (arr[i] < 0) {
            negative++
        } else {
            zero++
        }
    }
    const posratio = (positive / n).toFixed(6);
    const negratio = (negative / n).toFixed(6);
    const zeroratio = (zero / n).toFixed(6);
    return `${posratio}\n${negratio}\n${zeroratio}`;
}
let arr = [-4, 3, -9, 0, 4, 1];
console.log(plusMinus(arr));
//output:
// 0.500000
// 0.333333
// 0.166667