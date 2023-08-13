// Lily created a new game where she determines the difference between a number and its reverse
// She will look at a numbered range of days and will only go to a movie on a beautiful day.
// Given a range of numbered days range from [i...j] and number k

function beautifulDays(i, j, k) {
    // Write your code here
    let beautifulDays = 0;
    for (let day = i; day <= j; day++) {
        const reverse = parseInt(day.toString().split('').reverse().join(''));
        const difference = Math.abs(day - reverse);
        if (difference % k === 0) {
            beautifulDays++;
        }
    }
    return beautifulDays;
}

let i = 20;
let j = 23;
let k = 6;
console.log(beautifulDays(i, j, k));
// output is the number of beautiful days in the range - 2
// beautiful days are the whole number days