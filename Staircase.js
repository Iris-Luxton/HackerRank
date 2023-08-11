// Complete the staircase with input as the amount of steps
function staircase(n) {
    // Write your code here
    for (let i = 1; i <= n; i++) {
        const spaces = n - i; // the less i, the more space, less hashs
        const hashes = i; // hashes can simply be i as i increase through looping
        const line = ' '.repeat(spaces) + '#'.repeat(hashes);
        console.log(line);
    }
}

let n = 4;
staircase(n);
// output 
//   #
//  ##
// ###
//####