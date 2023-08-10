// Given an array of integers, find the longest subarray 
// where the absolute difference between any two elements is less than or equal to 1

function pickingNumbers(a) {
    // Write your code here
    a.sort((a, b) => a - b);
    let maxLength = 0; //this number will be the final output
    let start = 0;
    // loop through the sorted array
    for (let end = 0; end < a.length; end++) {
        while (a[end] - a[start] > 1) {
            start++; // nested while loop to move the starter away if difference is greater than 1
        }
        // Update the maximum length by comparing current value of stored maxLength and actual length of subarray (pick the greater)
        // because all start from subarray[0] so end - start + 1
        maxLength = Math.max(maxLength, end - start + 1); 
    }
    return maxLength;
}
let a = [4, 6, 5, 3, 3, 1];
console.log(pickingNumbers(a)); //output is 3 as we can do 3,3,1 as that is the longest we can go without having it greater than 1









