let characters = {
    letters: "abcdefghijklmnopqrstuvwxyz",
    numbers: "1234567890",
    special: "!?{}-+=[]|~`@"
};

let passElOne = document.querySelector("#pass-el-one");
let passElTwo = document.querySelector("#pass-el-two");
let generateBtn = document.querySelector("#generate");
let lengthValue = document.querySelector("#length-value");
let includeLetters = document.querySelector("#include-letters");
let includeNumbers = document.querySelector("#include-numbers");
let includeSpecial = document.querySelector("#include-special");
let selectAllBtn = document.querySelector("#select-all");
