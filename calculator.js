const calculateButton = document.getElementById("calculate-btn");
calculateButton.addEventListener("click", promptUser);
// when "click" it goes to the promptUser function

function prompter(requestText, n) {
  let userInput = prompt(requestText); //collect input from user
  if (typeof n == "number") {
    if (!isNaN(parseFloat(userInput))) {
      userInput = Number(userInput);
    }
  } else {
    // n = "+-*÷"
    if (!n.includes(userInput)) {
      return prompter(requestText, n);
    }
  }

  if (userInput == "" || typeof userInput !== typeof n) {
    // if user does not enter anything ask again
    return prompter(requestText, n);
  } else {
    return userInput; // if there is input, return it and continue
  }
}

function promptUser() {
  // parseFLoat means string is converted to decimal
  // number and stops reading non-numeric
  // characters except for . or e
  let a, b, answer;
  //functions are read inside out so prompter is first then pareFloat
  a = parseFloat(prompter("Enter First Number", 1));
  operator = prompter("Enter (+, -, *, /) operator", "+-*/");
  b = parseFloat(prompter("Enter Second Number", 1));
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
    default:
      return;
  }
}
