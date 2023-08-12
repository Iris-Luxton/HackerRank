// There is a large pile of socks that must be paired by color. 
// Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

function sockMerchant(ar) {
    // Write your code here
    const sockInventory = {}; 
    for (let i = 0; i < ar.length ; i++) {
        if (!sockInventory[ar[i]]) {
            sockInventory[ar[i]] = 1; 
        } else {
            sockInventory[ar[i]] +=1;
        }
    }
    //then we loop through the object and looks for the value that are divisible by 2
    console.log(sockInventory);
    let warehouse = Object.values(sockInventory);
    console.log(warehouse);
    let count = 0;
    for (let i = 0; i < warehouse.length; i++) {
        const pairs = Math.floor(warehouse[i] / 2);
        count += pairs;
    }
    return count;
}
let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(sockMerchant(ar));
//output should be 3