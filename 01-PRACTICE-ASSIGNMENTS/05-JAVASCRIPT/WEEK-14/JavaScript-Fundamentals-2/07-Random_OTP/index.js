function generateOTP() {
    const min = 1000;
    const max = 9999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(`Here is your OTP: ${generateOTP()}`);