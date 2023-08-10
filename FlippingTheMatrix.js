function maximizeUpperLeftSum(matrix) {
    const n = matrix.length / 2;
    const sortedValues = [];
    // Extract values from the upper-left quadrant

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            sortedValues.push(matrix[i][j]);
        }
    }
    // Sort the values in descending order
    sortedValues.sort((a, b) => b - a);
    // Calculate the sum of the maximum values in the upper-left quadrant
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += sortedValues[i];
    }
    return sum;
}
const matrix = [
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108]
];
const maxSum = maximizeUpperLeftSum(matrix);
console.log("Maximized Upper-Left Sum:", maxSum); // Output: 414