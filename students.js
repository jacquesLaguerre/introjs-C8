const students = require("./students.json")
//Arrays of objects ^^

//display all the student's first name one at a time, one per line. 
//Example
//What i want to see 
//bobby
//Jenny
//Tara
function showStudents (studentList){
for (let i = 0; i < studentList.length; i++){
    const student = studentList[i];
    console.log(student.firstName)
} 

}

showStudents(students)
