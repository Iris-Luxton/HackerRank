// When a contiguous block of text is selected in a PDF, highlighted with blue rectangle, each word is highlighted independently. 
// h is a list of 26 character, 'a' is at index 0 and 'z' is at index 25.
// determine the area of the rectangle highlight in mm^2 assuming all letters are 1mm wide.


function designerPdfViewer(h, word) {
    // The idea is to find the maximum height of characters in the selected word and then 
    // calculate the area by multiplying that height with the width (number of characters in the word).
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const height = [];

    for (let i = 0; i < word.length; i++) {
        height.push(h[alphabet.indexOf(word[i])])
    }
    const tallest = Math.max(...height);
    return tallest * word.length;
}

let h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7];
let word = 'zaba';
console.log(designerPdfViewer(h, word)); //output 28

