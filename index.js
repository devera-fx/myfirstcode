#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("let's start Calculation");
    await sleep();
    rainbowTitle.stop();
    console.log(` _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`);
}
await welcome();
async function calculator() {
    const ans = await inquirer
        .prompt([
        {
            type: "list",
            name: "operator",
            message: "Which operation you want to perform? \n",
            choices: ["+", "-", "x", "/", "^", "%"]
        },
        {
            type: "number",
            name: "number1",
            message: "Enter first number "
        },
        {
            type: "number",
            name: "number2",
            message: "Enter second number "
        }
    ]);
    if (ans.operator == "+") {
        console.log(chalk.blue(`Answer = ${ans.number1 + ans.number2}`));
    }
    else if (ans.operator == "-") {
        console.log(chalk.blueBright(`Answer = ${ans.number1 - ans.number2}`));
    }
    else if (ans.operator == "x") {
        console.log(chalk.blueBright(`Answer = ${ans.number1 * ans.number2}`));
    }
    else if (ans.operator == "/") {
        console.log(chalk.blueBright(`Answer = ${ans.number1 / ans.number2}`));
    }
    else if (ans.operator == "^") {
        console.log(chalk.blueBright(`Answer = ${ans.number1 ** ans.number2}`));
    }
    else if (ans.operator == "%") {
        console.log(chalk.blueBright(`Answer = ${ans.number1 % ans.number2}`));
    }
}
async function startAgain() {
    do {
        await calculator();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "Do you want to start again? Press y or n "
        });
    } while (again.restart == "y" || again.restart == "Y" || again.restart == "yes" || again.restart == "YES");
}
startAgain();
