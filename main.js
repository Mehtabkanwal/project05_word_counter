import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.redBright.underline.bold.italic("\t\t ****************************************WELCOME TO MY WORD COUNTER APP***************************************************"));
function wordCounter(text) {
    let freeWhileSpace = text.replace(/\s/g, "");
    return freeWhileSpace.length;
}
async function startCounter(wordCounter) {
    do {
        let result = await inquirer.prompt({
            type: "input",
            message: chalk.greenBright.bold("write your text..."),
            name: "text"
        });
        console.log(chalk.overline.bold.underline.blueBright("Your words count is: "));
        console.log(chalk.yellowBright(wordCounter(result.text)));
    } while (true);
}
startCounter(wordCounter);
