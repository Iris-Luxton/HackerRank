// Given five positive integers, find the minimum and maximum values that can be calculated by 
// summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.
function miniMaxSum(arr) {
    // Write your code here
    arr.sort((a,b) => a - b);
    const min = arr.slice(0,4).reduce((sum,num) => sum + num, 0);
    const max = arr.slice(1).reduce((sum,num) => sum + num, 0);
    return min + " " + max;
}

let arr = [5,2,3,1,4];
console.log(miniMaxSum(arr));
// output 10  14
