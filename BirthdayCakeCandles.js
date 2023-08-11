// You are in charge of the cake for a child's birthday. 
// You have decided the cake will have one candle for each year of their total age. 
// They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

function birthdayCakeCandles(candles) {
    // Write your code here
    const maxHeight = Math.max(...candles);
    let count = 0;
    for (let i = 0; i <= candles.length; i++) {
        if (candles[i] === maxHeight) {
            count++;
        }
    } return count;
    // there is another way to do this using const count = candleHeights.filter(height => height === targetHeight).length;
    // The filter() method creates a shallow copy of a portion of a given array, filtered down to just the wanted elements, in this case - height of tallest candles
}
let candles = [3, 2, 1, 3];
console.log(birthdayCakeCandles(candles));
// so you have 4 candles with 3 being the height units of the candles
// and 3 is the tallest, and you have 2 of the 3-units height candles, so output should 2. 