// Day of the programmer is the 256th day of the year, range from  range from 1700 to 2700. 
// From 1700 to 1917, Russia use Julian calendar; since 1919 they used the Gregorian calendar system. 
// The transition year is 1918 when the next day after January 31st was February 14th. 14.2 became 32nd day of the year.
// In both calendar systems, February has 29 days during a leap year, and 28 days during all other years. 
// In Julian calendar, leap years are divisible by 4; in Gregorian calendar, leap years are divisible by 400 or by 4 and not 100
// given the year y - find the 256th date of that year, print in dd.mm.yyyy and according to the official Russian calendar

function dayOfProgrammer(year) {
    // Write your code here
    let isLeapYear = false;
    if (year < 1918) {// Julian 
        isLeapYear = year % 4 === 0; // Julian leap year
    } else if (year === 1918) {
        return `26.09.${year}`; // programmer day in transition year is 26.09.1918
    } else {
        isLeapYear = (year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0)); // Gregorian leap year
    }
    // Calculate the 256th day for leap years and non-leap years.
    let day, month;
    day = isLeapYear ? 256 - 244 : 256 - 243;
    month = 9; // September would always be the right month
    // Print the result in the required format.
    return `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`;
}
console.log(dayOfProgrammer(1984));
//as this is leap year and after 1918 so we use Gregorian calendar, output should be 12.09.1984