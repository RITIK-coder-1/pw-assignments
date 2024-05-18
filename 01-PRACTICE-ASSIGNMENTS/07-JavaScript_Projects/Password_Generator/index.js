// Selecting Elements --->

const password = document.getElementById("password")
const generatePassword = document.getElementById("generatePassword")
const copyToClipboard = document.getElementById("copyToClipboard")
const passwordLength = document.getElementById("passwordLength")
const uppercase = document.getElementById("uppercase")
const lowercase = document.getElementById("lowercase")
const numbers = document.getElementById("includeNumbers")
const symbols = document.getElementById("includeSymbols")

// conditional values -->

let array = [] // this array will contain the password characters
let includeUppercase = true
let includeLowercase = true
let includeNumbers = true
let includeSymbols = true
// all of these things will be included at first

// Password String -->

const passwordString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_" // these are the password characters out of which a password will be generated

// switch to include or not include characters -->

uppercase.addEventListener("click", () => {
    includeUppercase = change(includeUppercase) // it stores the neegated value
})
lowercase.addEventListener("click", () => {
    includeLowercase = change(includeLowercase) // it stores the neegated value
})
numbers.addEventListener("click", () => {
    includeNumbers = change(includeNumbers) // it stores the neegated value
})
symbols.addEventListener("click", () => {
    includeSymbols = change(includeSymbols) // it stores the neegated value
})

// code logic to generate password -->

generatePassword.addEventListener("click", () => {
    for (let i = 0; i < passwordString.length; i++) {
        const element = passwordString[i * randomTarget()]; // this helps to shuffle between characters, so that the password is not always linear
        console.log(element)
        array.push(element) // clicking the button will push the characters to this array
        let stringArray = array.toString().replace(/,/g, "") // using the replace method, I replaced all the occurences of the comma. regex "g" flag replaces all the occurences 
        let random = randomNumber() // this stores the return value of the randomNumber() function that is a random number from 0 to 72
        let passwordValue = stringArray.substring(random, random + 8) // this takes a substring out of the string from a random position and maintains the default length to be 8
        password.value = passwordValue // the value of the password
        // it will show the array content inside the password box
        if (!includeUppercase) {
            password.value = passwordValue.toLowerCase() // if uppercase letters are discluded, all the characters will be in lowercase
        }
        if (!includeLowercase){
            password.value = passwordValue.toUpperCase()
        }
        if (!includeNumbers){
            password.value = passwordValue.replace(/[1234567890]/g, "x")
        }
        if (!includeSymbols){
            password.value = passwordValue.replace(/[!@#$%^&*()_]/g, "z")
        }
    }
}, false)

// function to change an element's state -->

function change(includeX) {
    return !includeX // it returns the negation of the value
    // I am returning the negated value because String being a primitive data type doesn't change the original value but the copy of it. So, in order to change the original value, I need to store the returned value
}

// function to generate a random number from 0 to 72 -->

function randomNumber() {
    let randomNumber = Math.floor(Math.random() * 73)
    console.log(randomNumber)
    return randomNumber
}

// function to generate a random number from 0 to 10 -->

function randomTarget() {
    let randomNumber = Math.floor(Math.random() * 10)
    return randomNumber
}

