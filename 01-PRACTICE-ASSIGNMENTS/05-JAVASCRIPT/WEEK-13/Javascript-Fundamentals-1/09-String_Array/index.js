const arr = [1, 2, 3, null, true, "ritik", "mahapatra", "defined", undefined]

for (let i = 0; i < arr.length; i++){
    if (typeof arr[i] == 'string') {
        console.log(`Found the first String: ${arr[i]}`);
        break
    }
}