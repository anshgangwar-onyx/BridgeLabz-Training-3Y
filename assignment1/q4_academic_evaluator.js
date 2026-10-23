// Q4. Academic Performance Evaluator

const marks = [78, 85, 90, 65, 80]; // Marks of 5 subjects
let totalMarks = 0;
let hasFailed = false;

for (let i = 0; i < marks.length; i++) {
    totalMarks += marks[i];
    if (marks[i] < 35) {
        hasFailed = true; // Validation rule: any subject < 35 -> Detained
    }
}

const averageMarks = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;

console.log(`Overall Percentage: ${percentage.toFixed(2)}%`);

if (hasFailed) {
    console.log("Status: Detained (Due to failing marks in a subject)");
} else if (percentage >= 85) {
    console.log("Status: Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
    console.log("Status: Promoted");
} else {
    console.log("Status: Detained");
}
