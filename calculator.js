const calculateButton = document.getElementById("calculate-btn");
calculateButton.addEventListener("click", promptUser);

function promptUser() {
  // parseFLoat means string is converted to decimal
  // number and stops reading non-numeric
  // characters except for . or e

  let a = parseFloat(prompt("Insert first number"));
  let operator = prompt("Insert (+, -, ×, ÷) operator");
  let b = parseFloat(prompt("Insert second number"));
  let answer = calculate(a, b, operator);
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
    case "÷":
      if (b === 0) {
        return "undefined";
      }
      return a / b;
    default:
      return "";
  }
}
