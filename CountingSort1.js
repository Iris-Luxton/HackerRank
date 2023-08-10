function countingSort(arr) {
    // Why do you need counting sort? Because both quick sort and merge sort has complexity of  O(nlogn)
    // Counting sort is a linear sorting algorithm with asymptotic complexity O(n+k). The Counting Sort method is a fast and reliable sorting algorithm. 
    // Counting sort, unlike bubble and merge sort, is not a comparison-based algorithm.

    // First we have to initiate the array with 100 elements as requested by teh challenge
    const frequencyArray = new Array(100).fill(0);
    // Then we update this array with frequency of occurence of each n item in arr
    for (const num of arr) {
        frequencyArray[num]++;
      }
    console.log(frequencyArray);
    return frequencyArray;
}
//example
let arr = [1, 1, 3, 2, 1];
let arr1 = [
    63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67,
    99, 12, 83, 89, 80, 91, 39, 86, 76, 85, 74, 39, 25, 90, 59, 10, 94, 32, 44,
    3, 89, 30, 27, 79, 46, 96, 27, 32, 18, 21, 92, 69, 81, 40, 40, 34, 68, 78,
    24, 87, 42, 69, 23, 41, 78, 22, 6, 90, 99, 89, 50, 30, 20, 1, 43, 3, 70, 95,
    33, 46, 44, 9, 69, 48, 33, 60, 65, 16, 82, 67, 61, 32, 21, 79, 75, 75, 13,
    87, 70, 33
  ];
countingSort(arr);
countingSort(arr1);
// So we create an array of zeros results = [0,0,0,0]; then iterate through it to create frequency array which is [0,3,1,1]
// These values can be used to create the sorted array as well: sorted = [1,1,1,2,3]; but we are not doing it in this challenge
