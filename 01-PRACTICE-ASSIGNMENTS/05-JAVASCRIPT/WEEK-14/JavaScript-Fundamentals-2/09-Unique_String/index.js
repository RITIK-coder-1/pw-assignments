// Program to check if any given string has unique characters or not ----------->

const uniqueString = (anyString) => {
    let isUnique = true
    for (let i = 0; i < anyString.length; i++) {
        for (let j = i + 1; j < anyString.length; j++) {
            if (anyString[i] === anyString[j]) {
                isUnique = false
                break; // stop the inner loop // to avoid furthur iteration after finding the common value 
            } 
        }    
        if (!isUnique){
            break; // stop the outer loop once the common value is found
        }  
    } 
    

    if (isUnique){
        console.log("This String has got unique characters!");
    } else {
        console.log("This String doesn't have all unique characters!");
    }
}

uniqueString("ritik")
uniqueString("sonali")
uniqueString("kkkk")
uniqueString("Jack")