// You are choreographing a circus show with various animals. 
// You are given two kangaroos on a number line ready to jump in the positive direction
// The 1st kangaroo starts at location x1, move at velocity v1 (meter per jump)
// The 2nd kangaroo starts at location x2, move at velocity v2 (meter per jump)
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show.
// If possible for them to meet - YES; if not - NO
// Note that x1 < x2; if v1 = v2 they will never see each other.
function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let n = (x1 - x2)/(v2-v1);
    if (n > 0 && n % 1 === 0) { //instead of using the %1, you can also use Number.isInteger(n)
        return 'YES'
    } else {
        return 'NO'
    }
}
let arr = [0, 3, 4, 2]
let x1 = arr[0];
let v1 = arr[1];
let x2 = arr[2];
let v2 = arr[3];
console.log(kangaroo(x1, v1, x2, v2));
// how it works: 
// x1+v1*n = x2+v2*n <=> x1 - x2 = n(v2-v1) <=> -4 = n*(-1) <=> n = 4;
// output YES if n is positive integer
