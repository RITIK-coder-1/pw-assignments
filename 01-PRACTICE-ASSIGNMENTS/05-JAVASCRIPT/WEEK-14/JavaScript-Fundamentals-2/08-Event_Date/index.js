// Program to find remaining days for any event from current date ---------->


function remainingDays(anyDate) {
    const currentDate = new Date("Nov 6, 2023") / (1000*60*60*24)
    return anyDate - currentDate
}

const eventDate = new Date("Dec 6, 2023") / (1000*60*60*24)

console.log(`The remaining days for the event: ${remainingDays(eventDate)}`);