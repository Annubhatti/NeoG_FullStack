/*
Question 1: Given data for some students.

name	rollNo	hindi	english	maths
Rahul	101	80	75	90
Amit	102	85	70	95
Priya	103	78	92	87
Convert the table into an array of objects.

Add marks for computers for each student respectively.

  const marksForComputer = [88, 92, 95]
1.1 Print the studentsData using for loops.

Expected output for 1.1:
1.1: Students Data with Computer Marks
Name: Rahul, Roll No: 101, Hindi: 80, English:75, Maths: 90, Computer: 88
Name: Amit, Roll No: 102, Hindi: 85, English:70, Maths: 95, Computer: 92
Name: Priya, Roll No: 103, Hindi: 88, English:87, Maths: 87, Computer: 95

1.2 Add marks for one more subject, science. Then print the updated studentsData with Science marks.

   const marksForScience = [82, 90, 88]
Expected output for 1.2:
1.1: Updated Students Data with Science Marks
Name: Rahul, Roll No: 101, Hindi: 80, English:75, Maths: 90, Computer: 88, Science:82
Name: Amit, Roll No: 102, Hindi: 85, English:70, Maths: 95, Computer: 92, Science:90
Name: Priya, Roll No: 103, Hindi: 88, English:87, Maths: 87, Computer: 95, Science:88

*/
// Step 1: Convert the table into an array of objects
let studentsData = [
    { name: "Rahul", rollNo: 101, hindi: 80, english: 75, maths: 90 },
    { name: "Amit", rollNo: 102, hindi: 85, english: 70, maths: 95 },
    { name: "Priya", rollNo: 103, hindi: 78, english: 92, maths: 87 }
];

// Step 2: Add marks for computers
const marksForComputer = [88, 92, 95];
for (let i = 0; i < studentsData.length; i++) {
    studentsData[i].computer = marksForComputer[i];
}

// Step 2.1: Print the data with computer marks
console.log("1.1: Students Data with Computer Marks");
for (let i = 0; i < studentsData.length; i++) {
    const student = studentsData[i];
    console.log(
        `Name: ${student.name}, Roll No: ${student.rollNo}, Hindi: ${student.hindi}, English: ${student.english}, Maths: ${student.maths}, Computer: ${student.computer}`
    );
}

// Step 3: Add marks for science
const marksForScience = [82, 90, 88];
for (let i = 0; i < studentsData.length; i++) {
    studentsData[i].science = marksForScience[i];
}

// Step 3.1: Print the updated data with science marks
console.log("\n1.2: Updated Students Data with Science Marks");
for (let i = 0; i < studentsData.length; i++) {
    const student = studentsData[i];
    console.log(
        `Name: ${student.name}, Roll No: ${student.rollNo}, Hindi: ${student.hindi}, English: ${student.english}, Maths: ${student.maths}, Computer: ${student.computer}, Science: ${student.science}`
    );
}



/*
Question 2: Another student Kaveri joins the class. Add Kaveri's data to studentsData.

Kaveri	104	84	88	78	90	86
2.1 Convert Kaveri's data to an object and print it.

2.2  Add Kaveri's data to studentsData. Then print the updated studentsData with Kaveri's data.

Expected output for 2.1 and 2.2:
2.1: Kaveri's Data
{
    name: 'Kaveri',
    rollNo: 104,
    hindi: 84,
    english: 88,
    maths: 78,
    computer: 90,
    science: 86
}

2.2: Updated Students Data with Kaveri
Name: Rahul, Roll No: 101, Hindi: 80, English:75, Maths: 90, Computer: 88, Science:82
Name: Amit, Roll No: 102, Hindi: 85, English:70, Maths: 95, Computer: 92, Science:90
Name: Priya, Roll No: 103, Hindi: 88, English:87, Maths: 87, Computer: 95, Science:88
Name: Kaveri, Roll No: 104, Hindi: 84, English:88, Maths: 78, Computer: 90, Science:86
  
2.3 Add a field totalMarks to every object in the array. Then print the updated studentsData with totalMarks.

2.4 Calculate the average marks and add avgMarks to each object. Then print the updated studentsData with avgMarks.

Expected output for 2.3 and 2.4:
2.3: Updated Students Data with Total Marks
Name: Rahul, Roll No: 101, Total Marks: 415
Name: Amit, Roll No: 102, Total Marks: 432
Name: Priya, Roll No: 103, Total Marks: 440
Name: Kaveri, Roll No: 104, Total Marks: 426

2.4: Updated Students Data with Average Marks
Name: Rahul, Roll No: 101, Average Marks: 83
Name: Amit, Roll No: 102, Average Marks: 86.4
Name: Priya, Roll No: 103, Average Marks: 88
Name: Kaveri, Roll No: 104, Average Marks: 85.2

*/
// Initial data
let studentsData = [
    { name: "Rahul", rollNo: 101, hindi: 80, english: 75, maths: 90, computer: 88, science: 82 },
    { name: "Amit", rollNo: 102, hindi: 85, english: 70, maths: 95, computer: 92, science: 90 },
    { name: "Priya", rollNo: 103, hindi: 88, english: 87, maths: 87, computer: 95, science: 88 }
];

// 2.1: Convert Kaveri's data to an object
let kaveriData = {
    name: "Kaveri",
    rollNo: 104,
    hindi: 84,
    english: 88,
    maths: 78,
    computer: 90,
    science: 86
};
console.log("2.1: Kaveri's Data");
console.log(kaveriData);

// 2.2: Add Kaveri's data to studentsData and print updated data
studentsData.push(kaveriData);

console.log("\n2.2: Updated Students Data with Kaveri");
studentsData.forEach(student => {
    console.log(
        `Name: ${student.name}, Roll No: ${student.rollNo}, Hindi: ${student.hindi}, English: ${student.english}, Maths: ${student.maths}, Computer: ${student.computer}, Science: ${student.science}`
    );
});

// 2.3: Add totalMarks to every student and print updated data
studentsData.forEach(student => {
    student.totalMarks =
        student.hindi + student.english + student.maths + student.computer + student.science;
});

console.log("\n2.3: Updated Students Data with Total Marks");
studentsData.forEach(student => {
    console.log(`Name: ${student.name}, Roll No: ${student.rollNo}, Total Marks: ${student.totalMarks}`);
});

// 2.4: Add avgMarks to every student and print updated data
studentsData.forEach(student => {
    student.avgMarks = (student.totalMarks / 5).toFixed(1); // Calculate average and round to 1 decimal
});

console.log("\n2.4: Updated Students Data with Average Marks");
studentsData.forEach(student => {
    console.log(`Name: ${student.name}, Roll No: ${student.rollNo}, Average Marks: ${student.avgMarks}`);
});


/*
Question 3: Write a function to calculate the grade for each student. Grade conditions have been provided below.

Condtion	Grade
If avgMarks is from 90 to 100
A
If avgMarks is from 80 to 89
B
If avgMarks is from 70 to79
C
If avgMarks is from 60 to 69
D
If avgMarks is from 50 to 59
E
If avgMarks is below 50
F
Print report cards for each student.

Sample report card for Rahul. Similarly print the report card for all other students:
=====Report Card for Rahul =====
Roll No: 101
------
Marks
------
Hindi: 80
English:75
Maths: 90
Computer: 88
Science: 82
--------
Total: 415
Average: 83.00
Grade: B
----- ----- ----- -------
*/
// Data with totalMarks and avgMarks already calculated
let studentsData = [
    { name: "Rahul", rollNo: 101, hindi: 80, english: 75, maths: 90, computer: 88, science: 82, totalMarks: 415, avgMarks: 83.0 },
    { name: "Amit", rollNo: 102, hindi: 85, english: 70, maths: 95, computer: 92, science: 90, totalMarks: 432, avgMarks: 86.4 },
    { name: "Priya", rollNo: 103, hindi: 88, english: 87, maths: 87, computer: 95, science: 88, totalMarks: 440, avgMarks: 88.0 },
    { name: "Kaveri", rollNo: 104, hindi: 84, english: 88, maths: 78, computer: 90, science: 86, totalMarks: 426, avgMarks: 85.2 }
];

// Function to calculate grade based on avgMarks
function calculateGrade(avgMarks) {
    if (avgMarks >= 90 && avgMarks <= 100) return "A";
    if (avgMarks >= 80 && avgMarks < 90) return "B";
    if (avgMarks >= 70 && avgMarks < 80) return "C";
    if (avgMarks >= 60 && avgMarks < 70) return "D";
    if (avgMarks >= 50 && avgMarks < 60) return "E";
    return "F";
}

// Generate and print report cards for each student
function printReportCards(students) {
    students.forEach(student => {
        const grade = calculateGrade(student.avgMarks);

        console.log(`===== Report Card for ${student.name} =====`);
        console.log(`Roll No: ${student.rollNo}`);
        console.log(`------`);
        console.log(`Marks`);
        console.log(`------`);
        console.log(`Hindi: ${student.hindi}`);
        console.log(`English: ${student.english}`);
        console.log(`Maths: ${student.maths}`);
        console.log(`Computer: ${student.computer}`);
        console.log(`Science: ${student.science}`);
        console.log(`--------`);
        console.log(`Total: ${student.totalMarks}`);
        console.log(`Average: ${student.avgMarks.toFixed(2)}`);
        console.log(`Grade: ${grade}`);
        console.log(`----- ----- ----- -------`);
    });
}

// Call the function to print report cards
printReportCards(studentsData);
