// // Program to check if any student is passed or failed --------->


const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 98 },
    { name: "David", score: 67 },
    { name: "Eva", score: 73 },
    { name: "Frank", score: 89 },
    { name: "Grace", score: 94 },
    { name: "Hank", score: 76 },
    { name: "Ivy", score: 81 },
    { name: "Jack", score: 88 },
  ];

// Function for individual student ---------->

function checkResults(anyString){

let isPassed = false

    for (let index = 0; index < students.length; index++) {
        if (students[index].hasOwnProperty("name") && students[index].hasOwnProperty("score")) {
            if (students[index].name === anyString && students[index].score >= 90) {
                isPassed = true
            } 
        }
    }  

    if (isPassed){
        let statement1 = `Congratulations! ${anyString}, You have cleared the exam.`
        console.log(statement1);
        return statement1
    } else {
        let statement2 = `Sorry ! ${anyString}, You couldn't clear the exam.`
        console.log(statement2);
        return statement2
    }

}

checkResults("Alice")

// Function for displaying all the students ------------>

function studentsResults(anyArray){
    for (let index = 0; index < anyArray.length; index++) {
        if (anyArray[index].score >= 90) {
            console.log(`Congratulations! ${anyArray[index].name} passed with ${anyArray[index].score} Marks!`);
        }
        else {
            console.log(`Sorry! ${anyArray[index].name}, You could not clear the exam!`);
        }
    } 
}

// studentsResults(students) 

