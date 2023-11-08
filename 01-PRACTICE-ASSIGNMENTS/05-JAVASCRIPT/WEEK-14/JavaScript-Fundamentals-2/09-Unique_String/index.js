function uniqueCharcterCheck(anyString) {
    let isUnique = true

    for (let i = 0; i < anyString.length; i++) {
        for (let j = i + 1; j < anyString.length; j++){
            if (i != j) {
                if (anyString[i] === anyString[j]) {
                    isUnique = false
                    break; // it doesn't need to iterate over other characters now as we already know the result
                }
            } 
        }    
    }
    
    if (isUnique) {
        console.log(`the string '${anyString}' has unique characters!`);
    } else {
        console.log(`the string '${anyString}' does not have unique characters!`);
    }
}

uniqueCharcterCheck("ritik")
uniqueCharcterCheck("sonali")