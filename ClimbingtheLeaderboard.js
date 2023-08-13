// An arcade game player wants to climb to the top of the leaderboard
// The player with the highest score is ranked number 1 on the leaderboard.
// Players with equal scores receive the same ranking, and the next player(s) receive the immediately following ranking number.



function climbingLeaderboard(ranked, player) {
    // Write your code here
    const unique = [...new Set(ranked)];
    const rankResult = [];
    let currentRank = unique.length; // start with the lowest rank
    for (let score of player) {
        while (currentRank > 0 && score >= unique[currentRank - 1]) {
            currentRank--
        }
        rankResult.push(currentRank + 1); // +1 to convert to ranking because it will decrement to 0 index
    }
    return rankResult; 
}

let ranked = [100, 90, 90, 80];
let player = [70, 80, 105]; // their rankings after each game are 4th, 3rd and 1st so output would be [4, 3, 1]
console.log(climbingLeaderboard(ranked, player));