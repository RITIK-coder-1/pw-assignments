// Selecting Elements --->

const password = document.getElementById("password")
const generatePassword = document.getElementById("generatePassword")
const copyToClipboard = document.getElementById("copyToClipboard")
const passwordLength = document.getElementById("passwordLength")
const uppercase = document.getElementById("uppercase")
const lowercase = document.getElementById("lowercase")
const includeNumbers = document.getElementById("includeNumbers")
const includeSymbols = document.getElementById("includeSymbols")

let array = [] // this array will contain the password characters

// Password String -->

const passwordString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_" // these are the password characters out of which a password will be generated

// code logic to generate password -->

generatePassword.addEventListener("click", () => {
    for (let i = randomNumber(); i < passwordString.length; i++) {
        const element = passwordString[i];
        console.log(element)
        array.push(element) // clicking this button will push the characters to this array
        password.value = array.toString().replace(/,/g, "") // using the replace method, I replaced all the occurences of a comma. "g" flag replaces all the occurences 
        // it will show the array content inside the password box
    }
}, false)

function randomNumber() {
    console.log(Math.floor(Math.random() * 15))
    return Math.floor(Math.random())
}