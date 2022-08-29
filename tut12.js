console.log("welcome to tut12");
//callback function
console.log("This is tutorial 37");

// Pretend that this response is coming from the server
const students = [
    {name: "harry", subject: "JavaScript"},
    {name: "Rohan", subject: "Machine Learning"}
]


function enrollStudent(student,getStudents){
    setTimeout(function() {
        students.push(student);
        console.log("Student has been enrolled");
        getStudents();
    }, 5000);
}

function getStudents(){
    setTimeout(function() {
        let str = "";
        students.forEach(function(student){
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 1000);
}

let newStudent = {name:"Sunny", subject:"Python"}
enrollStudent(newStudent,getStudents);
//getStudents();

