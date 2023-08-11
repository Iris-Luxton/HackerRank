// Sam's house is between point s and point t
// apple tree is at point a; orange tree is at point b; fruit will land in d uinits of distance from its tree along the x axis
// negative value of d means the fruit fell d units to the tree's left and positive value means it falls d units to the tree's right
// input is d units for m amount of apples and n amount of oranges
// Determine the number of apples and oranges that land on Sam s house in the inclusive range of [s,t]

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let counterApple = 0;
    let counterOrange = 0;
    for (let i = 0; i < apples.length; i++) {
        if (a + apples[i] <= t && a + apples[i] >= s) {
            counterApple+=1;
        }
    }
    for (let i = 0; i < oranges.length; i++) {
        if (b + oranges[i] <= t && b + oranges[i] >= s) {
            counterOrange+=1;
        }
    }
    console.log(counterApple);
    console.log(counterOrange);
}

// 1st line of input is array [s, t] - how big is sam's house
// 2nd line of input is array [a, b] - distance between 2 trees
// 3rd line of input is array [m, n] - amount of  apples and oranges
// 4th line of input is array [x, y, z,...] - distance that each apple falls from a
// 5th line of input is array [i, j, k,...] - distance that each orange falls from b

let house = [7, 11];
let tree = [5, 15];
let apples = [-2, 2, 1];
let oranges = [5, -6];
let m = apples.length;
let n = oranges.length;
let amount = [apples.length, oranges.length];
let s = house[0];
let t = house[1];
let a = tree[0];
let b = tree[1];

countApplesAndOranges(s, t, a, b, apples, oranges);

// apples[0] fell 2d to the left, apples[1] fell 2d to the right, apple[2] fell 1d to the right
// orange[0] fell 5d to the right, orange[1] fell 6d to the left 
// sam's house is 4d 
// 

// output [1,1] -  1 apple and 1 orange fell on Sam's house