// HackerLand University has the following grading policy:
// Grade from 1 to 100; less than 40 is fail; 
// Round the result to the nearest 5 if difference is less than 3, any grade less than 38 will not be rounded


function gradingStudents(grades) {
    // Write your code here
    let roundedGrades = [];
    for (let i = 0; i < grades.length; i++) {
        const originalGrade = grades[i];
        if (originalGrade < 38) {
            roundedGrades.push(originalGrade);
        } else {
            const nextMultipleOf5 = Math.ceil(originalGrade / 5) * 5;
            if (nextMultipleOf5 - originalGrade < 3) {
                roundedGrades.push(nextMultipleOf5);
            } else {
                roundedGrades.push(originalGrade);
            }
        }
    }
    console.log(roundedGrades);
}


let grades = [73, 67, 38, 33];
gradingStudents(grades);
// out put [75, 67, 40, 33]
// note that the code below instead of simple return will help print out the format HackerRank wants (but they have their own compiler using ws.write(result.join('\n') + '\n');):
// for (let i = 0; i < roundedGrades.length; i++) {
//    console.log(roundedGrades[i]);
//}