// To decode the string, first reverse the string of digits, then pick values from the string and convert them to ASCII
// Given a string, decode it 
// A to Z is 65 - 90
// a to z is 97 - 122
// space is 32
const charMap = {
    'A': 65, 'B': 66, 'C': 67, 'D': 68, 'E': 69, 'F': 70, 'G': 71, 'H': 72,
    'I': 73, 'J': 74, 'K': 75, 'L': 76, 'M': 77, 'N': 78, 'O': 79, 'P': 80,
    'Q': 81, 'R': 82, 'S': 83, 'T': 84, 'U': 85, 'V': 86, 'W': 87, 'X': 88,
    'Y': 89, 'Z': 90,
    'a': 97, 'b': 98, 'c': 99, 'd': 100, 'e': 101, 'f': 102, 'g': 103, 'h': 104,
    'i': 105, 'j': 106, 'k': 107, 'l': 108, 'm': 109, 'n': 110, 'o': 111, 'p': 112,
    'q': 113, 'r': 114, 's': 115, 't': 116, 'u': 117, 'v': 118, 'w': 119, 'x': 120,
    'y': 121, 'z': 122,
    ' ': 32
};

function decode(encoded) {
    const reversed = encoded.split('').reverse().join('');
    let decoded = '';
    
    for (let i = 0; i < reversed.length;) {
        if (reversed[i] === '1') {
            const charCode = parseInt(reversed.substr(i, 3));
            decoded += String.fromCharCode(charCode);
            i += 3;
        } else {
            const charCode = parseInt(reversed.substr(i, 2));
            decoded += String.fromCharCode(charCode);
            i += 2;
        }
    }
    
    return decoded;
}

// Example usage
const encoded = "23511011501782351112179911801562340161171141148";
const decoded = decode(encoded);
console.log(decoded);
 // output is Truth Always Wins