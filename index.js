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


//get random letter from characters array
function randomCharacter(charSet) {
  let randomNumber = Math.floor(Math.random() * charSet.length);
  return charSet[randomNumber];
}

//ability to set password length
function setPassLength() {
  let inputValue = lengthValue.value;
  console.log(inputValue);

  //setting default
  if (inputValue === ""){
      return 12;
  }
  return inputValue;
}
