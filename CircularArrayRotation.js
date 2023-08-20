// John Watson knows of an operation called a right circular rotation on an array of integers.
// One rotation operation moves the last array element to the first position and shifts all remaining elements right one. 
// Watson provides Sherlock with an array of integers so he can perform the rotation operation a number of times 
// then determine the value of the element at a given position.
// For each array, perform a number of right circular rotations and return the values of the elements at the given indices.

function circularArrayRotation(a, k, queries) {
    // Write your code here
    // Perform circular rotations using pop and unshift
    for (let i = 0; i < k; i++) { // k is the amount of rotation
        const lastElement = a.pop(); // Remove the last element
        a.unshift(lastElement); // Add the last element to the beginning
    }
    const queryResults = [];
    for (let query of queries) {
        queryResults.push(a[query]);
    }
    return queryResults;
}

let a = [3, 4, 5];
let k = 2;
let queries = [1, 2];
console.log(circularArrayRotation(a, k, queries)); // Output: [5, 3]


