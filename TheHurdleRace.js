// Character competes in a hurdle race
// Hurdles are of varying heights, and the characters have a maximum height they can jump. 
// There is a magic potion they can take that will increase their maximum jump height by 1 unit for each dose
// If the character can already clear all of the hurdles, return 0.
// How many doses of the potion must the character take to be able to jump all of the hurdles?

function hurdleRace(k, height) {
    // Write your code here
    const max = Math.max(...height);
    if (max < k) {
        return 0;
    } else {
        return max - k;
    }
}

let k = 4; // this is how high player can jump;
let height = [1, 6, 3, 5, 2]; // height of each hurdle;
console.log(hurdleRace(k, height)); // output 2

