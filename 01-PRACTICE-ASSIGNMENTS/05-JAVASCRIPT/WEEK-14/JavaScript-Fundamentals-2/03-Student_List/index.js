// // Function to check if any student is passed or failed --------->


// const students = [
//     { name: "Alice", score: 85 },
//     { name: "Bob", score: 92 },
//     { name: "Charlie", score: 98 },
//     { name: "David", score: 67 },
//     { name: "Eva", score: 73 },
//     { name: "Frank", score: 89 },
//     { name: "Grace", score: 94 },
//     { name: "Hank", score: 76 },
//     { name: "Ivy", score: 81 },
//     { name: "Jack", score: 88 },
//   ];


// function IspassedStudents(anyArray){
//     for (let index = 0; index < anyArray.length; index++) {
//         if (anyArray[index].score >= 90) {
//             console.log(`Congratulations! ${anyArray[index].name} passed with ${anyArray[index].score} Marks!`);
//         }
//         else {
//             console.log(`Sorry! ${anyArray[index].name}, You could not clear the exam!`);
//         }
//     } 
// }

// IspassedStudents(students) 



let array = [{name: "ritik", score: 60}]

for (let index = 0; index < array.length; index++) {
    if (array[index].hasOwnProperty("name") && array[index].hasOwnProperty("score")) {
        if (array[index].score > 50) {
            console.log(array[index].name);
        }
    }   
}

