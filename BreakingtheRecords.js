

// Maria plays college basketball. Each season she maintains a record of her play.
// Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.
//

function breakingRecords(scores) {
    // Write your code here
    let breakLow = 0;
    let breakHigh = 0;
    let low = scores[0];
    let high = scores[0];

    for (let i = 1; i <= scores.length; i++) {
        if (scores[i] > high) {
            high = scores[i]; 
            breakHigh+=1;
        } else if (scores[i] < low) {
            low = scores[i];
            breakLow+=1;
        }
    }
    return [breakHigh, breakLow];
}

let scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
console.log(breakingRecords(scores)); 