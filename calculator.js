const calculateButton = document.getElementById("calculate-btn");
calculateButton.addEventListener("click", promptUser);

function prompter(requestText, validate = true){ // setup input validation later?
  let userInput = prompt(requestText); //collect input from user
  // console.log(userInput);
  if(userInput == '') { // if user does not enter anything ask again
    return prompter(requestText);
  } else {
    return userInput; // if there is input, return it and continue
  }
}

function promptUser() {
  // parseFLoat means string is converted to decimal
  // number and stops reading non-numeric
  // characters except for . or e
let a, b, answer;
  // let a = parseFloat(prompt("Insert first number"));
  a = parseFloat(prompter("Enter First Number"));
  operator = prompter("Enter (+, -, ×, ÷) operator");
  b= parseFloat(prompter("Enter Second Number"));
  answer = calculate(a, b, operator);
  document.write(answer);

  //   let userInput = prompt("Insert operation");
  //   console.log(typeof userInput);
}


function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        return "undefined";
      }
      return a / b;
    // default:
    //   return "";
  }
}
