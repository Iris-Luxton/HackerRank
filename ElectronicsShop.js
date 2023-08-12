// A person wants to determine the most expensive computer keyboard and USB drive with given budget
// If it is not possible to buy both items, return -1

function getMoneySpent(keyboards, drives, b) {
    const possibleBuy = [];
    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            const sum = keyboards[i] + drives[j];
            if (sum <= b) {
                possibleBuy.push(sum)
            }
        }
    }
    if (possibleBuy.length === 0) {
        return -1
    } else {
        return Math.max(...possibleBuy)
    }
}
let b = 60;
let keyboards = [40, 50, 60];
let drives = [5, 8, 12];
console.log(getMoneySpent(keyboards, drives, b));
// output 58 as in 

// there a shorter code:
function getMoneySpent(keyboards, drives, b) {
    let maxSpent = -1; // Initialize to -1 if no combination is possible
    for (let keyboard of keyboards) {
        for (let drive of drives) {
            const totalCost = keyboard + drive;
            if (totalCost <= b && totalCost > maxSpent) {
                maxSpent = totalCost;
            }
        }
    }
    return maxSpent;
}
