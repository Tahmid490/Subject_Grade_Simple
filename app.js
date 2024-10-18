let sub = String(prompt("Enter the Subject Name: "));
let marks = parseInt(prompt("Enter Valid Mark: "));

let grade;
let gpa;

if (marks >= 0 && marks < 33) {
  grade = "F";
  gpa = 0;
} else if (marks >= 33 && marks < 40) {
  grade = "D";
  gpa = 1;
} else if (marks >= 40 && marks < 50) {
  grade = "C";
  gpa = 2;
} else if (marks >= 50 && marks < 60) {
  grade = "C+";
  gpa = 2.5;
} else if (marks >= 60 && marks < 70) {
  grade = "B";
  gpa = 3;
} else if (marks >= 70 && marks < 80) {
  grade = "B+";
  gpa = 3.5;
} else if (marks >= 80 && marks < 90) {
  grade = "A";
  gpa = 4;
} else if (marks >= 90 && marks < 101) {
  grade = "A+";
  gpa = 5;
} else {
  grade = "Invalid";
  gpa = "Invalid";
}
console.log(`${sub} ${marks} ${grade} ${gpa}`);

document.write(` 
    <h1>
    
    Subject: ${sub} <br>
    Marks:   ${marks}  <br>
    Grade:   ${grade} <br>
    Gpa:     ${gpa} <br>
    
    </h1>
    `);
