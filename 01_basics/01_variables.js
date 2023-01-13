const accountId = 144553;
let accountEmail = "sauravgupta3131@gmail.com"
var accountPassword = "1234"
accountCity= "Jaipur"
let accountState;

// accountId = 123 // not allowed
accountEmail = "sg@sg.com"
accountPassword = "212121"
accountCity = "Baglore"


console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

