// Syntax: <product> / <product-version> <comment>
// Browser syntax: Mozilla/5.0 (<system-information>) <platform> (<platform-details>) <extensions>
// Example: Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0


const fs = require('fs');


const USERAGENTS_PATH = 'useragents.json';
let useragents = null;


function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}
  
// Use fs.readFileSync() method to read the file
useragents = JSON.parse(fs.readFileSync(USERAGENTS_PATH,'utf8'));

function create(amount=1, software="chrome", system="windows10") {
    if (isNumeric(amount.toString())) {
        amount = parseInt(amount);
    } else {
        throw new Error("Amount has to be a number");
    }

    if (!software in useragents) {
        software = "chrome";
    }

    if (!system in useragents) {
        system = "windows10";
    }

    let useragentsList = [];

    for (let i = 0; i < amount; i++) {
        useragentsList.push(useragents[software][system][Math.floor(Math.random() * useragents[software][system].length)]);
    }

    return useragentsList
}

if (typeof require !== 'undefined' && require.main === module) {
    console.log(create(100));
}
