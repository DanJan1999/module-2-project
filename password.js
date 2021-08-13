const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(`Welcome to Password Validator!`);

function runReadLine() {
reader.question(`Please enter a password!`, answer => {
    if (answer.length >= 10) {
    console.log(`SUCCESS: Password validated! Thank you!`);
    reader.close();
    } else {
    console.log(`ERROR: Please enter a password longer than 10 characters!`);
    runReadLine();
    }   
});
}

runReadLine();