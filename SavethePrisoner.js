// A jail has a number of prisoners and a number of treats to pass out to them. 
// A chair number will be drawn from a hat. Beginning with that chair, one candy will be handed to each prisoner sequentially 
// around the table until all have been distributed. The last piece of candy looks like all the others, but it tastes awful.
// Determine the chair number occupied by the prisoner who will receive that candy.

function saveThePrisoner(n, m, s) {
    // Write your code here
    // Calculate the last position after all candies handed out
    let position = (s + m - 1) % n;
    // we basically don't care how many rounds but we care about the last few candies distributed among remainders
    if (position === 0) { // when amount of candies are divisible by the no. of prisoners then position is also the amount of candies
        position = n;
    }
    return position;
}

let n = 4; // amount of prisoners
let m = 6; // amount of sweets
let s = 2; // the start of the round

console.log(saveThePrisoner(n, m, s)); 