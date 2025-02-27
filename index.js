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
let toggleThemeBtn = document.querySelector("#toggle-theme");

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

//generating the password
function generatePassword(length) {
  let charSet = "";
  if (includeLetters.checked) charSet += characters.letters;
  if (includeNumbers.checked) charSet += characters.numbers;
  if (includeSpecial.checked) charSet += characters.special;

  // No character type selected
  if (charSet === "") return "";

  let password = '';
  for (let i = 0; i < length; i++){
      password += randomCharacter(charSet);
  }
  return password;
}

// rendering password to screen
function renderPassword() {
  passElOne.textContent = '';
  passElTwo.textContent = '';

  // Remove existing copy buttons
  let existingCopyBtnOne = passElOne.nextSibling;
  if (existingCopyBtnOne && existingCopyBtnOne.tagName === "BUTTON") {
      existingCopyBtnOne.remove();
  }
  let existingCopyBtnTwo = passElTwo.nextSibling;
  if (existingCopyBtnTwo && existingCopyBtnTwo.tagName === "BUTTON") {
      existingCopyBtnTwo.remove();
  }

  let length = setPassLength()
  passElOne.textContent += generatePassword(length);
  passElTwo.textContent += generatePassword(length);

  // Create copy buttons
  let copyBtnOne = document.createElement("button");
  copyBtnOne.textContent = "Copy";
  copyBtnOne.addEventListener("click", () => copyToClipboard({ target: passElOne }));

  let copyBtnTwo = document.createElement("button");
  copyBtnTwo.textContent = "Copy";
  copyBtnTwo.addEventListener("click", () => copyToClipboard({ target: passElTwo }));

  // Append copy buttons
  passElOne.parentNode.insertBefore(copyBtnOne, passElOne.nextSibling);
  passElTwo.parentNode.insertBefore(copyBtnTwo, passElTwo.nextSibling);
}

//ability to copy to clipboard
function copyToClipboard(e) {
  let password = e.target;
  navigator.clipboard.writeText(password.textContent).then(res=>{
          console.log("Input data copied to clipboard successfully");
      })
}

passElOne.addEventListener("click", copyToClipboard)
passElTwo.addEventListener("click", copyToClipboard)

generateBtn.addEventListener("click", renderPassword)

selectAllBtn.addEventListener("click", () => {
  includeLetters.checked = true;
  includeNumbers.checked = true;
  includeSpecial.checked = true;
});

toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});
