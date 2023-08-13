// Two cats and a mouse are at various positions on a line. You will be given their starting positions. 
// Your task is to determine which cat will reach the mouse first
// Mouse does not move and the cats travel at equal speed
// If the cats arrive at the same time, print the Mouse, otherwise print out the cat that caught the mouse first

function catAndMouse(x, y, z) {
    const catAtoMouse = Math.abs(x - z);
    const catBtoMouse = Math.abs(y - z);
    if (catAtoMouse === catBtoMouse) {
        return 'Mouse C'
    } else if (catAtoMouse < catBtoMouse) {
        return 'Cat A'
    } else {
        return 'Cat B'
    }
}

// x y z are the positions for cat A, cat B and mouse C
let x = 2;
let y = 5;
let z = 4;
console.log(catAndMouse(x, y, z));
// output Cat B



