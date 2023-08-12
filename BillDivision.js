// Two friends Anna and Brian, are deciding how to split the bill at a dinner
// Brian gets the check and calculates Anna's portion
// If Brian did not overcharge Anna, print Bon Appetit on a new line; otherwise, print the difference Brian must refund to Anna. 
// This will always be an integer.

function bonAppetit(bill, k, b) {
    // Write your code here
    const totalCost = bill.reduce((acc, item) => acc + item, 0);
    const annaShouldPay = (totalCost - bill[k]) / 2;
    if (b === annaShouldPay) {
        console.log('Bon Appetit');
    } else {
        console.log(b - annaShouldPay);
    }
}
// k is the index of the item that Anna did not eat and b is the amount of money that Brian charged Anna.  
let bill = [3, 10, 2, 9,];
let k = 1;
let b = 7;
bonAppetit(bill, k, b)
//output Bon Appetit
