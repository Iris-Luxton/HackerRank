// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.
// Lily decides to share a contiguous segment of the bar selected such that: The length of the segment matches Ron's birth month
// and The sum of the integers on the squares is equal to his birth day
// a contiguous segment consists of elements that are adjacent to each other without any gaps or breaks
// Determine how many ways she can divide the chocolate.

function birthday(s, d, m) {
    // Write your code here
    let ways = 0;
    // Loop through the chocolate bar segments of length `m`
    for (let i = 0; i <= s.length - m; i++)  {
        let segmentSum = 0;
        // Calculate the sum of the integers in the current segment
        for (let j = i; j < i + m; j++) { // this will break down into subarray for us to iterate through
            segmentSum += s[j];
        }
        if (segmentSum === d) {
            ways++;
        }
    }
    return ways;
}

let s = [1, 2, 1, 3, 2]
let d = 3;
let m = 2;

console.log(birthday(s, d, m)); 
//output 2

