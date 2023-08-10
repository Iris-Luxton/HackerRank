// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
function diagonalDifference(arr) {
    // Write your code here
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    // arr is a 2D square array where each element is accessed using two indices: arr[row][column]

    for (let i = 0; i < arr.length; i++) {
        primaryDiagonalSum += arr[i][i];
        secondaryDiagonalSum += arr[i][arr.length - 1 - i]; //arr.length - 1 is the last element of the row, then it will keep moving backward as i increase
    }
    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}
let arr = [
[11, 2, 4],
[4, 5, 6],
[10, 8, -12]
];

console.log(diagonalDifference(arr)); //output 15