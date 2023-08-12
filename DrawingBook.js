// A teacher asks the class to open their books to a page number. 
// When they open the book, page 1 is always on the right side:
// Each page except the last page will always be printed on both sides. 
// The last page may only be printed on the front, given the length of the book. 
// If the book is n pages long, and a student wants to turn to page p, what is the minimum number of pages to turn? 


function pageCount(n, p) {
    // Write your code here
    const frontFlip = Math.floor(p / 2); // Number of pages to turn from the beginning
    const backFlip = Math.floor((n / 2) - frontFlip); // Number of pages to turn from the end
    return Math.min(frontFlip, backFlip);
}
console.log(pageCount(6, 2));
//output 1