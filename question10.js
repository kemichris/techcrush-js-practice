// Write a function called summarizeStudent that accepts an array of student objects (each with name and score). 
// The function should return a new array of strings in this format:
// 'Amara scored 88 — Grade: B'

function summarizeStudent(students) {
    return students.map(student => {
        let grade;
        if (student.score >= 70 && student.score <= 100) {
            grade = 'A';
        } else if (student.score >= 60 && student.score <= 69) {
            grade = 'B';
        } else if (student.score >= 50 && student.score <= 59) {
            grade = 'C';
        } else if (student.score >= 40 && student.score <= 49) {
            grade = 'D';
        } else {
            grade = 'F';
        }
        return `${student.name} scored ${student.score} — Grade: ${grade}`;
    });
}

// Example usage:
const students = [
    { name: 'Amara', score: 88 },
    { name: 'Bola', score: 62 },
    { name: 'Chidi', score: 45 },
    { name: 'Dayo', score: 30 }
];

console.log(summarizeStudent(students));