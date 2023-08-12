// An avid hiker keeps meticulous records of their hikes.
// steps = exactly how many steps he took
// U is uphill, D is downhill, find and print the number of valleys walked through knowing:
// A mountain is a sequence of consecutive steps above sea level.
// A valley is a sequence of consecutive steps below sea level.


function countingValleys(steps, path) {
    // Write your code here
    let seaLevel = 0;
    let valleys = 0;
    for (let step of path) {
        if (step === 'U') {
            seaLevel++
        } else if (step === 'D') {
            seaLevel--;
            if (seaLevel === -1) { //everytime hiker enter the valley, counter will plus 1
                valleys++
            }
        }
    }
    return valleys;
}
let path = 'UDDDUDUU';
let steps = 8;
console.log(countingValleys(steps, path));
//output = 1;
