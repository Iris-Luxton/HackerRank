// Given an array of bird, every element represents a bird type id, determine the id of the most frequently sighted type. 
// If more than 1 type has been spotted that maximum amount, return the smallest of their ids.
function migratoryBirds(arr) {
    // Write your code here
    // reason why we use object, because there are 2 things we have save, id and frequency of that id
    let birdType = {}; // therefore it is best to use object. 
    let maxCount = 0;
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        if (!birdType[arr[i]]) {
            birdType[arr[i]] = 1; // if there this type of bird has not existed before then we create a key for it in birdType with value = 1
        } else {
            birdType[arr[i]] += 1; // if there is already a key then we increment on that value
        }
        if (birdType[arr[i]] > maxCount) {
            maxCount = birdType[arr[i]] // maxCount will be updated to keep track of the highest occurence
        }
    }
    for (let i = 0; i <= arr.length; i++) {
        if (birdType[arr[i]] === maxCount) {
            output.push(arr[i]); // this is to collect the array with all the id that has similar count with maxCount
        }
    }
    return Math.min(...output);//final step is to loop through all the elements of the output array and return only the lowest id
}
let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
console.log(migratoryBirds(arr));
//output should be 3, even though both type 3 and type 4 had 3 occurence (represented by 3 birds), type 3 id is smaller than type 4.

