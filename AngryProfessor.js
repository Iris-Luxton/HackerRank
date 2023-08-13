// The professor decides to cancel class if fewer than some number of students are present when class starts
// Arrival times go from on time <= 0 and to arrived late > 0
 
function angryProfessor(k, a) {
    // Write your code here
    let onTime = 0;
    let late = 0; 
    for (let i = 0; i <= a.length; i++) {
        if (a[i] <= 0) {
            onTime++;
        } else {
            late++;
        }
    }
    if (onTime < k) {
        return 'YES'; // class is cancelled
    } else {
        return 'NO';
    }
}

let k = 3;
let a = [-2, -1, 0, 1, 2]; 
console.log(angryProfessor(k, a)); // output NO