// Given a time in 12 hours AM PM format, convert it to military (24-hour) time.
function timeConversion(s) {
    // Write your code here
    let mid = s.charAt(8);
    let militaryHour = "";
    if (mid == 'A') {
        if (s.substring(0,2) == "12") {
            militaryHour = "00";
        } else {
            militaryHour = s.substring(0,2);
        }
    }
    else { //mid == 'P'
        if (s.substring(0,2) == "12") {
            militaryHour = s.substring(0,2);
        } else {
            militaryHour = parseInt(s.substring(0,2)) + 12;
        }
    }
    return militaryHour + s.substring(2,8);
}
let s = "07:05:45PM";
console.log(timeConversion(s));
// output 19:05:45