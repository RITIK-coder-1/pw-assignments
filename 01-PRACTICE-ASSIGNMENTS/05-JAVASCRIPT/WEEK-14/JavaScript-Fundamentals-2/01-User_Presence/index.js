// Function to check if a user is present in a list ------> 



const list1 = [ "Ritik", "Bijay", "Mithun" ]
const list2 = [ "Sonali", "Sunena", "Sushma" ]

function isUserPresent(anyList, username) {
    if (anyList.includes(username)){
        console.log(`Yes, ${username} is a valid user.`);
    } else {
        console.log(`${username} is not a valid user!`);
    }
}

isUserPresent(list1, "Mithun")
isUserPresent(list2, "Sushma")
isUserPresent(list1, "someone")