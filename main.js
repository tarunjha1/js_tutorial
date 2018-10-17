let Phrase = require("mhartl-palindrome");// a published module which checks for palindrome 


function palindromeTester() {
  let string = prompt("Please enter a string for palindrome testing:");
  let phrase = new Phrase(string);
  console.log("Input was"+ phrase);
  console.log("input was"+string);
    let palindromeResult = document.querySelector("#palindromeResult");
    console.log("where is palindromeResult"+ palindromeResult);
  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `"${phrase.content}" is a palindrome!`;
  } else {
    palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome.`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let button = document.querySelector("#palindromeTester");
  console.log ("button is"+ button);
  button.addEventListener("click", function() {
    palindromeTester();
  });
});
