let sentence = "hey hey"

function repeated(string){
let repeat = false 
let number = 0
for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < string.length; j++){
        if (string[i] === string[j]){
            repeat = true
            // number++
        }
    }
}

if (repeat){
    console.log("true" + number);
} else {
    console.log("false");
}
}

repeated(sentence)