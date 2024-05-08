#! /usr/bin/env node

import inquirer from "inquirer";

//prompt for first question
let option1 = await inquirer.prompt([
  {
    name: "num1",
    type: "number",
    message: "please enter your first number:",
  },
]);

//prompt for second question
let option2 = await inquirer.prompt([
  {
    name: "num2",
    type: "number",
    message: "please enter your second number:",
  },
]);

//Print output
let output: number = option1.num1 * option2.num2;
console.log(output);
