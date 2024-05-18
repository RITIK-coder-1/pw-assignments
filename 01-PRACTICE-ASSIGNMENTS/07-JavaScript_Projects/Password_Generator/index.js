// Selecting Elements --->

const password = document.getElementById("password")
const generatePassword = document.getElementById("generatePassword")
const copyToClipboard = document.getElementById("copyToClipboard")
const passwordLength = document.getElementById("passwordLength")
const uppercase = document.getElementById("uppercase")
const lowercase = document.getElementById("lowercase")
const Numbers = document.getElementById("includeNumbers")
const Symbols = document.getElementById("includeSymbols")

// conditional values -->

let array = [] // this array will contain the password characters
let includeUppercase = true
let includeLowercase = true
let includeNumbers = true
let includeSymbols = true
// all of these things will be included at first

// Password String -->

const passwordString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_" // these are the password characters out of which a password will be generated

// code logic to generate password -->

generatePassword.addEventListener("click", () => {
    for (let i = 0; i < passwordString.length; i++) {
        const element = passwordString[i * randomTarget()]; // this helps to shuffle between characters, so that the password is not always linear
        console.log(element)
        array.push(element) // clicking the button will push the characters to this array
        let stringArray = array.toString().replace(/,/g, "") // using the replace method, I replaced all the occurences of the comma. "g" flag replaces all the occurences 
        let random = randomNumber() // this stores the return value of the randomNumber() function that is a random number from 0 to 72
        password.value = stringArray.substring(random, random + 8) // this takes a substring out of the string from a random position and maintains the default length to be 8
        // it will show the array content inside the password box
    }
}, false)

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

