const marks = [102, 90, 143, 170, 125];
let highestMarks = marks[0];
for (let i = 0; i < marks.length; i++) {

    highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
}
console.log(`The Highest from the Marks of  five Students is ${highestMarks} `);