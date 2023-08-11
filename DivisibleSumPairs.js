// Given an array of integers and a positive integer k determine the number of (i, j) pairs where i<j and ar[i] + ar[j] is divisible by k
function divisibleSumPairs(n, k, ar) {
    // Write your code here
    // Initialize the count of valid pairs
    let count = 0;
    // for (let i = 0; i < n; i++) {
    //     for (let j = i + 1; j < n; j++) {
    //         if ((ar[i] + ar[j]) % k === 0) {
    //             count++;
    //         } This method is simpler but may be less efficient for larger input arrays as its time complexity is O(n^2).
    //     }
    // }

    // There is another way, although not better in but avoid the nested loop by using subarray method:

    for (let i = 0; i < n - 1; i++) {
        const subArray = ar.slice(i + 1, n);
        count +=subArray.filter((item, i) => {
            if ((item + ar[i]) % k === 0) return item;
        }).length 
    }
    // The time complexity is still O(n^2) as the filter function still iterates through the subarray for each element in the main array.
    return count;
}


let ar = [1, 3, 2, 6, 1, 2];
let k = 3;
let n = ar.length;

console.log(divisibleSumPairs(n, k, ar));
//output 5