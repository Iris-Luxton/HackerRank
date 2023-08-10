// Given an array of integers, where all elements but one occur twice, find the unique element.
function lonelyinteger(a) {
    // Write your code here
     for (const num of a) {
        if (a.indexOf(num) === a.lastIndexOf(num)) {
            return num;
        }
    }
}

let a = [1,2,3,4,3,2,1];
console.log(lonelyinteger(a)); //output is 4