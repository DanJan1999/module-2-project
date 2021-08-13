const readline = require("readline");

console.log(`Welcome to Password Validator!`);

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question(`Please enter a password!`, password => { if (password.length >= 10) {
    console.log(`Password validated! Thank you!`)
    reader.close();
} else if (password.length < 10) {
    console.log(`Please enter a password longer than 10 characters!`)
    reader.close()
}
});

reader.on(`close`, function() {
    console.log(`Goodbye!`)
    process.exit(0)
});
