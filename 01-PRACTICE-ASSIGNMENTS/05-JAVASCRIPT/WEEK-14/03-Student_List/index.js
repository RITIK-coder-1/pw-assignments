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

  
function passedStudents(anyArray){
    for (let index = 0; index < anyArray.length; index++) {
        if (anyArray[index].score >= 90) {
            console.log(`Congratulations! ${anyArray[index].name} passed with ${anyArray[index].score} Marks!`);
        }
    } 
}

passedStudents(students)