// When they launch a new product, they advertise it to exactly 5 people on social media.
// On the first day, half of those people like the advertisement and each shares it with 3 of their friends
// At the beginning of the second day, 6 people receive the advertisement.
// Each day, each of the recipients like the advertisement and will share it with 3 friends on the following day.
// Assuming no one receives the ad twice, how many people liked the ad by the end of n day, beginning with launch day as day 1.


function viralAdvertising(n) {
    // Write your code here
    let result = 0;
    let shares = 5;
    for (let i = 1; i <= n; i++) {
        const likes = Math.floor(shares / 2);
        result += likes;
        shares = likes * 3
    }
    return result;
}
let n = 5;
console.log(viralAdvertising(n)); // output should be 24