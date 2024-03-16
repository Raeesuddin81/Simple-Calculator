import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message: "Enter first number", type: "number", name: "firstNumber" }, 
    {messege: "Enter second number", type: "number", name: "secondNumber"}, 
    {messege: "Select one of the operators to perform action", 
    type: "list", 
    name: "operator", 
    choices: ["Addition", "subtraction", "Multiplication", "Division"], 
},
]);

// conditional statment
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
} else {
    console.log("Please select valid operator")
}
