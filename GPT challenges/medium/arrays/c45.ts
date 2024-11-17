/* Challenge #45: Filter Students by Average Grade
Difficulty: 🟠 Medium
Points: 20

Task: Write a function that takes an array of student objects, each with a name and grades array,
and a minimum average grade. Return a new array containing only the students whose average grade is greater than or equal to the minimum average.

Requirements:

Define a function called filterStudentsByGrade.
It should take an array of student objects (each with name and grades) and a minAvg number.
Use the filter method to return students meeting the average grade requirement. */

function filterStudentsByGrade(
    students: { name: string; grades: number[] }[],
    minAvg: number
): { name: string; grades: number[] }[] {
    return students.filter((student) => {
        const grades = student.grades;
        if (grades.length === 0) return false;

        const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
        return average >= minAvg;
    });
}

const students = [
    { name: "Alice", grades: [85, 90, 92] },
    { name: "Bob", grades: [70, 75, 72] },
    { name: "Charlie", grades: [95, 100] },
];

console.log(filterStudentsByGrade(students, 80));
console.log(filterStudentsByGrade(students, 100));
console.log(filterStudentsByGrade([], 75));
console.log(filterStudentsByGrade([{ name: "Dave", grades: [] }], 75));
