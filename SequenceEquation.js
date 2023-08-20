// Given a sequence of n integers. p(x)...p(n) and x will increment from 1 to n
// Find any integer y so that p(p(y)) = x and keep a history of the values of y in a returning array. 

function permutationEquation(p) {
    // Write your code here
    const y = [];
    for (let x = 1; x <= p.length; x++) {
        const index = p.indexOf(x) + 1; // because it is starting from 1, not 0
        y.push(p.indexOf(index) + 1)
    }
    return y;
}


let p = [5, 2, 1, 3, 4];
console.log(permutationEquation(p)); //output shall be y = [4, 2, 5, 1, 3];