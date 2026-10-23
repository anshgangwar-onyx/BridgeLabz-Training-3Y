const scores = [];
for (let i = 0; i < 8; i++) {
    scores.push(Math.floor(Math.random() * 71) + 30);
}

const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);
const totalScore = scores.reduce((acc, curr) => acc + curr, 0);
const averageScore = totalScore / scores.length;
const passedStudentsCount = scores.filter(score => score >= 50).length;

console.log("Student Scores:", scores);
console.log("Highest Score: " + highestScore);
console.log("Lowest Score: " + lowestScore);
console.log("Average Score: " + averageScore.toFixed(2));
console.log("Students Passed (>=50): " + passedStudentsCount + " out of " + scores.length);
